import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Button,
  Modal,
  Box,
  Split,
  TextInput,
  IdentityBadge,
  IconEthereum,
  IconConnect,
  DataView,
  useToast,
  Tag,
} from '@aragon/ui';

import * as MyPTypes from '../types';
import { RatioTag, Comment } from '../common';

import {
  liquidate,
  addERC20Collateral,
  addETHCollateral,
  kollateralLiquidate,
} from '../../utils/web3';
import { getMaxLiquidatable } from '../../utils/infura';
import { toTokenUnitsBN, toBaseUnitBN, formatDigits } from '../../utils/number';
import { KETH, DAI, USDC } from '../../constants/contracts';

/**
 *
 * @param {{
 * option:{
 * decimals:number,
 * exchange:string, collateral:{ addr:string, decimals: number, symbol:string}, symbol:string }
 * oTokensIssued: string,
 * collateralAmount: string,
 * exchange:string}} param0
 */
function VaultModal({
  option,
  useCollateral,
  owner,
  collateral, // amount of collateral of this vault
  oTokensIssued,
  isSafe,
  ratio,
  collateralIsETH,
}) {
  const toast = useToast();
  const [opened, setOpened] = useState(false);
  const [addValue, setAddValue] = useState(0);
  const [liquidateAmt, setLiquidateAmt] = useState(0);
  const open = () => setOpened(true);
  const close = () => setOpened(false);

  useEffect(() => {
    let isCancelled = false;
    async function getData() {
      if (!opened) return;
      if (!useCollateral) return;
      const maxLiquidatable = await getMaxLiquidatable(option.addr, owner);
      if (!isCancelled) {
        setLiquidateAmt(toTokenUnitsBN(maxLiquidatable, option.decimals).toNumber());
      }
    }
    getData();

    return () => {
      isCancelled = true;
    };
  }, [option, opened, owner, useCollateral]);

  return (
    <>
      <Button onClick={open} label="More" />
      <Modal width={900} padding={50} visible={opened} onClose={close}>
        <Header primary="Access Position" />

        <DataView
          fields={['Owner', 'Collateral', 'Issued', 'ratio', 'Status']}
          entries={[{
            collateral, isSafe, oTokensIssued, ratio, owner,
          }]}
          entriesPerPage={1}
          renderEntry={(vault) => [
            <IdentityBadge entity={vault.owner} shorten />,
            formatDigits(toTokenUnitsBN(vault.collateral, option.collateral.decimals), 5),
            formatDigits(toTokenUnitsBN(vault.oTokensIssued, option.decimals), 5),
            formatDigits(vault.ratio, 4),
            RatioTag({ isSafe: vault.isSafe, ratio, useCollateral }),
          ]}
        />

        <br />
        <Box heading="Add Collateral">
          <Split
            primary={(
              <TextInput
                type="number"
                wide
                adornment={<IconEthereum />}
                adornmentPosition="end"
                value={addValue}
                onChange={(event) => {
                  setAddValue(event.target.value);
                }}
              />
            )}
            secondary={(
              <Button
                label="Add Collateral"
                wide
                onClick={() => {
                  if (collateralIsETH) {
                    addETHCollateral(option.addr, owner, addValue);
                  } else {
                    addERC20Collateral(
                      option.collateral.addr,
                      option.addr,
                      owner,
                      toBaseUnitBN(addValue, option.collateral.decimals).toString(),
                    );
                  }
                }}
              />
            )}
          />
        </Box>

        {useCollateral ? (
          <Box heading="Liquidate">
            <Comment text={`Liquidate with your ${option.symbol}`} />
            <Split
              primary={(
                <>
                  <TextInput
                    wide
                    type="number"
                    value={liquidateAmt}
                    onChange={(event) => {
                      setLiquidateAmt(event.target.value);
                    }}
                  />
                </>
              )}
              secondary={(
                <>
                  <Button
                    wide
                    disabled={isSafe}
                    label="Liquidate"
                    onClick={() => {
                      liquidate(option.addr, owner, toBaseUnitBN(liquidateAmt, option.decimals)).catch(
                        (error) => {
                          toast(error.toString());
                        },
                      );
                    }}
                  />
                </>
              )}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Comment text=" Or " />
            </div>
            <Comment text={(
              <>
                <Tag> beta </Tag>
                Liquidate with Kollateral Flashloan
              </>
              )}
            />

            <div style={{ display: 'flex' }}>
              <Button
                icon={<IconConnect />}
                label="DAI"
                disabled={isSafe}
                onClick={() => {
                  kollateralLiquidate(option.addr, option.exchange, owner, DAI).catch((error) => {
                    toast(error.toString());
                  });
                }}
                wide
                selected
              />
              <Button
                icon={<IconConnect />}
                label="USDC"
                disabled={isSafe}
                onClick={() => {
                  kollateralLiquidate(option.addr, option.exchange, owner, USDC).catch((error) => {
                    toast(error.toString());
                  });
                }}
                wide
              />
              <Button
                icon={<IconConnect />}
                label="ETH"
                disabled={isSafe}
                onClick={() => {
                  kollateralLiquidate(option.addr, option.exchange, owner, KETH).catch((error) => {
                    toast(error.toString());
                  });
                }}
                wide
              />
            </div>
          </Box>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}

VaultModal.propTypes = {
  option: MyPTypes.option.isRequired,
  useCollateral: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
  collateral: PropTypes.string.isRequired,
  isSafe: PropTypes.bool.isRequired,
  oTokensIssued: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  collateralIsETH: PropTypes.bool.isRequired,
};

export default VaultModal;
