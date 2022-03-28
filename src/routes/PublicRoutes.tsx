import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import SignUp from '../pages/SignUp/SignUp';

function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default PublicRoutes;
