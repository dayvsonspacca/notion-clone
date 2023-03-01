import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// PAGES
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
]);

export default routes;