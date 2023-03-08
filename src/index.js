import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createProvider,
  RouterProvider
} from "react-router-dom";
import LandingPage from './Views/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
