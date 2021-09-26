import React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { persistor, store } from './store';
import Routes from './modules/Routes';
import GlobalStyle from './global.styled';
import { ThemeProvider } from './components/Theme';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <StoreProvider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <GlobalStyle />
            <Switch>
              <Routes />
            </Switch>
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
