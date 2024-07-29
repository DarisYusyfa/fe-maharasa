import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Home } from './pages/home/index.jsx';
import { Login } from './pages/auth/Login/index.jsx';
import { Service } from './pages/services/index.jsx';
import { Register } from './pages/auth/Register/index.jsx';
import { Order } from './pages/services/order/index.jsx';
import { Reservasi } from './pages/services/reservasi/index.jsx';
import { Menu } from './pages/services/menu/index.jsx';
import { Event } from './pages/services/event/index.jsx';
import { Pemesanan } from './Admin/pemesanan/index.jsx';
import { Daftar } from './Admin/authadmin/daftar/index.jsx';
import { Masuk } from './Admin/authadmin/masuk/index.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import Confirmation from './Components/Confirmation.jsx';

const clientId = '146868756018-p5t3qlatnf88tu657f899sthgicpq0ua.apps.googleusercontent.com';

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
    element: <ProtectedRoute element={<Service />} />,
  },
  {
    path: '/order',
    element: <ProtectedRoute element={<Order />} />,
  },
  {
    path: '/event',
    element: <ProtectedRoute element={<Event />} />,
  },
  {
    path: '/reservasi',
    element: <ProtectedRoute element={<Reservasi />} />,
  },
  {
    path: '/confirmation',
    element: <Confirmation />,
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
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={Router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
