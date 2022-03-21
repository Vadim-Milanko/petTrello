import React, { useState } from 'react';

import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

import './App.scss';
import Header from './components/Header/Header';

function App(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  console.log(isLogin);
  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {
          isLogin
            ? <PrivateRoutes />
            : <PublicRoutes setIsLogin={setIsLogin} />
        }
    </div>
  );
}

export default App;
