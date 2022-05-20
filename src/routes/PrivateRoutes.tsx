import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrivateRoutes;