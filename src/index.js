import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import GlobalStyles from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Login/>
  </React.StrictMode>
);
