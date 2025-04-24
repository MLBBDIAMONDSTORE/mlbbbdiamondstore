// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartView from './components/CartView';
import PaymentPage from './components/PaymentPage';
import OrderStatus from './components/OrderStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CartView />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<OrderStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
