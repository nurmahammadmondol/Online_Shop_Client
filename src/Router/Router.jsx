import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/home/home';
import MainHome from '../Pages/home/main/MainHome';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>,
      },
    ],
  },
]);

export default Router;
