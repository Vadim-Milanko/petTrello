import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppContextProvider from './context';

import './index.scss';

export const initialStore = {
  user: {
    login: '',
    email: '',
  },
  ui: {
    isToastActive: false,
    message: '',
  },
};

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider store={initialStore}>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
