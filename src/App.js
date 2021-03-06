import React from 'react';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import Web3 from 'web3';
import { Router } from "react-router-dom";
import './App.css';
import TopNavi from './Components/TopNavi';
import PasswordGate from "./Components/PasswordGate";
import Web3ReactManager from "./Components/Web3ReactManager";
import Routes from "./routes";
import { createBrowserHistory } from 'history';
import { NetworkContextName } from './constants';
import WalletModal from './Components/WalletModal';
import AllowanceContext from "./contexts/Allowances";
import ApplicationContext, { Updater as ApplicationContextUpdater } from './contexts/Application'
import TransactionsContext,  { Updater as TransactionContextUpdater } from './contexts/Transactions'
import BalancesContext, { Updater as BalancesContextUpdater } from './contexts/Balances'
import BlocksContext from './contexts/Blocks';
import PortfolioActionsContext from './contexts/UniswapActions';
import TokensContext from './contexts/Tokens';
import { ethers } from 'ethers';
import ExchangeModal from './Components/ExchangeModal';

const instance = createBrowserHistory();
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

export const navigateTo = path => instance.push(path);

function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 10000
  return library
}

function Updaters() {
  return (
    <>
      <ApplicationContextUpdater />
      <TransactionContextUpdater />
      <BalancesContextUpdater />
    </>
  )
}

function Contexts({children}) {
  return (
    <>
      <ApplicationContext>
        <BlocksContext>
          <TransactionsContext>
            <TokensContext>
              <BalancesContext>
                <AllowanceContext>
                  <PortfolioActionsContext>
                    {children}
                  </PortfolioActionsContext>
                </AllowanceContext>
              </BalancesContext>
            </TokensContext>
          </TransactionsContext>
        </BlocksContext>
      </ApplicationContext>
    </>
  )
}

function App() {
  return (  
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ReactManager>
          <Contexts>
            <Updaters />
            <Router history={instance}>
            <PasswordGate>
              <div className="App">
                <TopNavi/>
                <Routes />
                <WalletModal />
                <ExchangeModal />
              </div>
            </PasswordGate>
            </Router>
            </Contexts>         
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
