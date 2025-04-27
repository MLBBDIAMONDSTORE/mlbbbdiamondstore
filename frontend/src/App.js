import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import './styles/Header.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;