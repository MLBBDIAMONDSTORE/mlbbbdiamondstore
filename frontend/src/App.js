import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { OrderProvider } from './contexts/OrderContext';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage'; 

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <OrderProvider>
          <Router>
            <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
          </Router>
        </OrderProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;