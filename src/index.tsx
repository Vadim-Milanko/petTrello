import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppContextProvider from './context';
import { initialStore } from './store/initialStore';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider store={initialStore}>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
