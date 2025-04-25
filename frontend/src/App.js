import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import OrderSummary from './components/OrderSummary';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <Routes>
      <Route path="/"         element={<ProductList />}   />
      <Route path="/order"    element={<OrderSummary />} />
      <Route path="/payment"  element={<PaymentPage />}  />
    </Routes>
  );
}

export default App;