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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <RouterProvider router={router}/>
  </React.StrictMode>
);
