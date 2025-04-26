import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import VerifyPage from './pages/VerifyPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';
import { OrderContext } from './context/OrderContext';

function ProtectedRoute({ children }) {
  const { user } = React.useContext(OrderContext);
  return user?.nickname ? children : <Navigate to="/verify" replace />;
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/order" element={<ProtectedRoute><OrderViewPage /></ProtectedRoute>} />
        <Route path="/pay" element={<ProtectedRoute><PayPage /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
