import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import SignUp from '../pages/SignUp/SignUp';

interface IProps {
  setIsLogin: (status: boolean) => void;
}

function PublicRoutes(props: IProps): JSX.Element {
  const { setIsLogin } = props;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn setIsLogin={setIsLogin} />} />
      <Route path="/signup" element={<SignUp setIsLogin={setIsLogin} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PublicRoutes;
