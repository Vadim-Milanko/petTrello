import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import SignUp from '../pages/SignUp/SignUp';

interface IProps {
  isLogin: boolean;
  setIsLogin: (status: boolean) => void;
}

function PublicRoutes(props: IProps): JSX.Element {
  const { isLogin, setIsLogin } = props;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn isLogin={isLogin} setIsLogin={setIsLogin} />} />
      <Route path="/signup" element={<SignUp isLogin={isLogin} setIsLogin={setIsLogin} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PublicRoutes;
