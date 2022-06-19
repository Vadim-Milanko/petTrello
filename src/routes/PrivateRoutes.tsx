import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Todos from '../pages/Todos';

function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/todos/:id" element={<Todos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrivateRoutes;
