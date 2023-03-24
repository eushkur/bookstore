import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE } from '../../../routes/routes';

export const RequareAuth = () => {
    const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
