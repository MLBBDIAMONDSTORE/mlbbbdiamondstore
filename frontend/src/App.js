import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderView from './components/OrderView';
import PaymentPage from './components/PaymentPage';
import StatusPage from './components/StatusPage';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderView />} />
      <Route path="/pay" element={<PaymentPage />} />
      <Route path="/status/:orderId" element={<StatusPage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
