import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import OrderForm from './pages/OrderForm';
import OrderSummary from './pages/OrderSummary';
import PaymentPage from './pages/PaymentPage';
import StatusPage from './pages/StatusPage';
import AdminPanel from './pages/AdminPanel';
import { OrderProvider } from './context/OrderContext';
import './styles/App.css';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Header />
        <main style={{ paddingBottom: '80px' }}>
          <Routes>
            <Route path="/" element={<OrderForm />} />
            <Route path="/summary" element={<OrderSummary />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/status/:orderId" element={<StatusPage />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </OrderProvider>
  );
}

export default App;
