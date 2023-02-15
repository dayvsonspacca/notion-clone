import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// PAGES
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <LogIn />
    },
    {
        path: "/home",
        element: <Home />
    }
]);

export default routes;