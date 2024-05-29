import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Menu from './pages/Menu';
import Login from './pages/Login';
import ClientRegister from './pages/ClientRegister';
import Schedule from './pages/Schedule';
import Clients from './pages/Clients';
import Users from './pages/Users';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Menu/>
    },
    {
      path: "/client/register",
      element: <ClientRegister/>
    },
    {
      path: "/client",
      element: <Clients/>
    },
    {
      path: "/schedule",
      element: <Schedule/>
    },
    {
      path: "/user",
      element: <Users/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </React.StrictMode>
);
