import React, { useEffect } from 'react';

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Header from './components/Header/Header';
import CustomToast from './components/CustomToast';
import { getUserFromLS } from './utils/localStorage';
import Loader from './components/Loader';
import { useCustomDispatch } from './hooks/useCustomDispatch';

import './App.scss';

function App(): JSX.Element {
  const dispatch = useCustomDispatch();
  const isHasUserInLS = getUserFromLS();

  useEffect(() => {
    dispatch({ user: isHasUserInLS });
  }, []);

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
      <CustomToast />
    </div>
  );
}

export default App;
