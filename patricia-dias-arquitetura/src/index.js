import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Global.css'; // Importação do CSS global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);