import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderForm from './pages/OrderForm';
import OrderSummary from './pages/OrderSummary';
import PaymentPage from './pages/PaymentPage';
import StatusPage from './pages/StatusPage';
import AdminPanel from './pages/AdminPanel';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<OrderForm />} />
        <Route path="/summary" element={<OrderSummary />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;