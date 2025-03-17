import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/home/home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
]);

export default Router;
