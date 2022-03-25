import React, { useContext } from 'react';

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Header from './components/Header/Header';
import CustomToast from './components/CustomToast';

import './App.scss';
import { AppContext } from './context';
import { getUserFromLS } from './utils/localStorage';

function App(): JSX.Element {
  const { storeState } = useContext(AppContext);

  const isHasUserInLS = getUserFromLS('user');

  const { ui: { isToastActive, message }, user: { login, email } } = storeState;
  const toastSeverity = (login.length > 0 && email.length > 0);

  return (
    <div className="App">
      <Header />
      {
        isHasUserInLS
          ? <PrivateRoutes />
          : <PublicRoutes />
      }
      {
        isToastActive
          ? (
            <CustomToast
              message={message}
              toastSeverity={toastSeverity}
            />
          )
          : null
      }
    </div>
  );
}

export default App;
