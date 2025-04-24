import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/App.css';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import PaymentPage from './components/PaymentPage';
import OrderStatus from './components/OrderStatus';
import StatusPage from './components/StatusPage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<OrderStatus />} />
        <Route path="/order-status/:orderId" element={<StatusPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
