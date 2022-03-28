import React, { useContext } from 'react';

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Header from './components/Header/Header';
import CustomToast from './components/CustomToast';
import { AppContext } from './context';
import { getUserFromLS } from './utils/localStorage';
import Loader from './components/Loader/Loader';

import './App.scss';

function App(): JSX.Element {
  const { storeState } = useContext(AppContext);

  const isHasUserInLS = getUserFromLS();

  const { ui: { toast: { isActive } } } = storeState;

  return (
    <div className="App">
      <Header />
      {
        !isHasUserInLS ? <Loader /> : null
      }
      {
        isHasUserInLS
          ? <PrivateRoutes />
          : <PublicRoutes />
      }
      {
        isActive
          ? (
            <CustomToast />
          )
          : null
      }
    </div>
  );
}

export default App;
