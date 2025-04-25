import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';
import { OrderProvider } from './context/OrderContext';

const App = () => (
  <OrderProvider>
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/order" element={<OrderViewPage />} />
        <Route path="/pay" element={<PayPage />} />
      </Routes>
    </Router>
  </OrderProvider>
);

export default App;