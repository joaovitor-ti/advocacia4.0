import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientRegister from './pages/ClientRegister';
import GlobalStyles from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ClientRegister/>
  </React.StrictMode>
);
