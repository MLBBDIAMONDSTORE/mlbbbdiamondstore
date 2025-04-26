import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import VerifyPage from './pages/VerifyPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';
import { OrderProvider } from './context/OrderContext';
import './styles/main.css';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/order" element={<OrderViewPage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;