import React, { useState } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { updateModalMode } from './utils/web3'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import AllOptoins from './components/AllContracts';
import Trade from './components/Trade'
import MyVaults from './components/MyVaults'
import OptionPage from './components/OptionPage';
import ManageVault from './components/ManageVault'
import ManagePool from './components/ManagePool'
import Footer from './components/Footer';
import { Main } from '@aragon/ui';

function App() {
  const storedTheme = window.localStorage.getItem('theme') || 'light';

  const [user, setUser] = useState(''); // the current connected user
  const [theme, setTheme] = useState(storedTheme);

  const updateTheme = (theme) => {
    setTheme(theme);
    updateModalMode(theme)
    window.localStorage.setItem('theme', theme);
  };

  return (
    <Router>
      <Main assetsUrl={`${process.env.PUBLIC_URL}/aragon-ui/`} theme={theme}>
        <NavBar user={user} setUser={setUser} theme={theme} updateTheme={updateTheme} />

        <Switch>
          {/* All Options */}
          <Route path='/option/:token' children={<OptionPage user={user} />} />
          <Route path='/options/' children={<AllOptoins />} />
          {/* My Vaults */}
          <Route path='/myvaults' children={<MyVaults user={user} />} />
          <Route path='/manage/:token/:owner' children={<ManageVault user={user}/>} />
          {/* Trade */}
          <Route path='/trade/:token/' children={<ManagePool user={user} />} />
          <Route path='/trade/' children={<Trade/>} />
          {/* HomePage */}
          <Route path='/' children={<HomePage/>} />
        </Switch>
        <Footer theme={theme} />
      </Main>
    </Router>
  );
}


export default App;
