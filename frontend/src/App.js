import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import OrderSummary from './components/OrderSummary';
import PaymentPage from './components/PaymentPage';
import AdminPanel from './components/AdminPanel';
import StatusPage from './components/StatusPage';
import { OrderProvider } from './context/OrderContext';
import './styles/App.css';

const App = () => {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
};

export default App;