import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// PAGES
import LogIn from '../pages/LogIn';
import MyNotions from '../pages/MyNotions';
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
        path: "/notion/:id",
        element: <MyNotions />
    }
]);

export default routes;