import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/index.jsx';
import { Login } from './pages/auth/Login/index.jsx';
import { About } from './pages/about/index.jsx';
import { Service } from './pages/services/index.jsx';
import { Register } from './pages/auth/Register/index.jsx';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/service',
    element: <Service />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
