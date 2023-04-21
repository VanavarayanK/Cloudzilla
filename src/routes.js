import React from 'react';
import Login from './container/login/login';
import Signup from './container/login/signup';
import ForgotPasswordLink from './container/login/ForgotPassword';
import Newpassword from './container/login/Newpassword';
import Settings from './container/settings';
import ResponsiveDrawer from './components/Appbar/SIdemenu';
import Home from './container/home';
import User from './container/User';
import { Navigate } from 'react-router-dom';
import LandingPage from './container/landing';

const routes = [
    {
        // path: '',
        element: <ResponsiveDrawer />,
        children: [
            { path: '/settings', element: <Settings /> },
            { path: '/home', element: <Home /> },
            { path: '/user', element: <User /> },


        ]   
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/landingpage', element: <LandingPage /> },
    { path: '/forgotpasswordlink', element: <ForgotPasswordLink /> },
    { path: '/newpassword', element: <Newpassword /> },
    { path: '/', element: <Navigate to="/login" /> }, 
]





export default routes;

