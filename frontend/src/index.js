import React from 'react';
import ReactDOM from 'react-router-dom';
import App from './App';
import { OrderProvider } from './context/OrderContext';
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OrderProvider>
    <App />
  </OrderProvider>
);