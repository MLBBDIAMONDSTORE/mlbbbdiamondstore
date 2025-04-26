// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import VerifyPage from './pages/VerifyPage';
import OrderViewPage from './pages/OrderViewPage';
import PayPage from './pages/PayPage';
import Header from './components/Header';
import { OrderProvider } from './context/OrderContext';
import './styles/main.css';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/order" element={<OrderViewPage />} />
          <Route path="/pay" element={<PayPage />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;