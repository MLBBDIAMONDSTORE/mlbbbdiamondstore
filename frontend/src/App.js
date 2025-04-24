import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import PaymentPage from './components/PaymentPage';
import AdminPanel from './components/AdminPanel';
import OrderSummary from './components/OrderSummary';
import StatusPage from './components/StatusPage';
import { OrderProvider } from './context/OrderContext';
import './styles/App.css';

const App = () => {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/order" element={<OrderForm />} />
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
