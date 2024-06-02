import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/index.jsx';
import { Login } from './pages/auth/Login/index.jsx';
import { About } from './pages/about/index.jsx';
import { Service } from './pages/services/index.jsx';
import { Register } from './pages/auth/Register/index.jsx';
import { Order } from './pages/services/order/index.jsx';
import { Table } from './pages/services/table/index.jsx';
import { Reservasi } from './pages/services/reservasi/index.jsx';
import { User } from './pages/auth/user/index.jsx';

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
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/table',
    element: <Table />,
  },
  {
    path: '/reservasi',
    element: <Reservasi />,
  },
  {
    path: '/user',
    element: <User />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
