import React from 'react';
import { Tag } from '@aragon/ui';
import Proptypes from 'prop-types';

function RatioTag({ isSafe, ratio, useCollateral = true }) {
  return !useCollateral ? (
    <Tag color="#78827a" background="#c0c2c0">
      Cool
    </Tag>
  ) : isSafe ? (
    ratio < 1.6 ? (
      <Tag background="#FFEBAD" color="#FEC100">
        {' '}
        Danger
        {' '}
      </Tag>
    ) : (
      <Tag mode="new"> safe </Tag>
    )
  ) : (
    <Tag color="#E34343" background="#FFC6C6">
      Unsafe!
    </Tag>
  );
}

RatioTag.propTypes = {
  isSafe: Proptypes.bool.isRequired,
  ratio: Proptypes.number.isRequired,
  useCollateral: Proptypes.bool,
};

RatioTag.defaultProps = {
  useCollateral: true,
};

export default RatioTag;
