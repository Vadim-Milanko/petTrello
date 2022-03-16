import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';

function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrivateRoutes;
