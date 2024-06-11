import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/index.jsx';
import { Login } from './pages/auth/Login/index.jsx';
import { Service } from './pages/services/index.jsx';
import { Register } from './pages/auth/Register/index.jsx';
import { Order } from './pages/services/order/index.jsx';
import { Table } from './pages/services/table/index.jsx';
import { Reservasi } from './pages/services/reservasi/index.jsx';
import { Menu } from './pages/services/menu/index.jsx';
import { Event } from './pages/services/event/index.jsx';
import { Pemesanan } from './Admin/pemesanan/index.jsx';
import { Daftar } from './Admin/authadmin/daftar/index.jsx';
import { Masuk } from './Admin/authadmin/masuk/index.jsx';

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
    path: '/order',
    element: <Order />,
  },
  {
    path: '/event',
    element: <Event />,
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
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/pemesanan',
    element: <Pemesanan />,
  },
  {
    path: '/daftar',
    element: <Daftar />,
  },
  {
    path: '/masuk',
    element: <Masuk />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
