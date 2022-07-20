import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRoutes from './PageRoutes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>
);
