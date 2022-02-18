import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LogIn from "../pages/LogIn/LogIn";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";


const PublicRoutes: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default PublicRoutes;