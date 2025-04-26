// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import VerifyPage from './pages/VerifyPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 1) Boshlang‘ich sahifa — mahsulotlar */}
        <Route path="/" element={<ProductPage />} />

        {/* 2) Faqat View Order tugmasiga bosilganda… */}
        <Route path="/verify" element={<VerifyPage />} />

        {/* 3) Tekshiruv o‘tganidan keyin buyurtma ko‘rinishi */}
        <Route path="/order" element={<OrderViewPage />} />

        {/* 4) Oxirgi to‘lov sahifasi */}
        <Route path="/pay" element={<PayPage />} />
      </Routes>
    </Router>
  );
}

export default App;