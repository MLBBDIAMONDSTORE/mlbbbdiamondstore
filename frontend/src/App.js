import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { OrderProvider, OrderContext } from './context/OrderContext';
import Header from './components/Header';

import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';

function App() {
  return (
    <OrderProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Agar user tekshiruvi o‘tilmagan bo‘lsa, login sahifasiga qaytar */}
        <Route
          path="/products"
          element={
            <RequireAuth>
              <ProductsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequireAuth>
              <OrderViewPage />
            </RequireAuth>
          }
        />
        <Route
          path="/pay"
          element={
            <RequireAuth>
              <PayPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </OrderProvider>
  );
}

// router guard
function RequireAuth({ children }) {
  const { user } = React.useContext(OrderContext);
  return user ? children : <Navigate to="/" />;
}

export default App;