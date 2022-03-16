import React, { useState } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function Routers(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div>
      {
        isLogin
          ? <PrivateRoutes />
          : <PublicRoutes isLogin={isLogin} setIsLogin={setIsLogin} />
      }
    </div>
  );
}

export default Routers;
