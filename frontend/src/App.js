// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import VerifyPage from './pages/VerifyPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';
import { OrderContext } from './context/OrderContext';

function ProtectedRoute({ children }) {
  const { nickname } = React.useContext(OrderContext);
  // agar tekshiruvdan o‘tmagan bo‘lsa, Verify sahifasiga yubor
  return nickname ? children : <Navigate to="/verify" replace />;
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 1) Har doim birinchi ochiladigan sahifa — mahsulotlar */}
        <Route path="/" element={<ProductPage />} />

        {/* 2) Faqat View Order tugmasi bosilganda yoki ProtectedRoute chaqirilganda */}
        <Route path="/verify" element={<VerifyPage />} />

        {/* 3) Nickname bor bo‘lsa ko‘rinadi, aks holda /verify ga qaytaradi */}
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <OrderViewPage />
            </ProtectedRoute>
          }
        />

        {/* 4) To‘lov sahifasi ham himoyalangan */}
        <Route
          path="/pay"
          element={
            <ProtectedRoute>
              <PayPage />
            </ProtectedRoute>
          }
        />

        {/* Boshqa URL bo‘lsa hamma yo‘lni mahsulotlarda yakunlaymiz */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}