import React, { useState } from 'react';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import PaymentPage from './components/PaymentPage';
import OrderStatus from './components/OrderStatus';
import StatusPage from './components/StatusPage';
import AdminPanel from './components/AdminPanel';
import './styles/App.css';

function App() {
  const [step, setStep] = useState(1);
  const [orderItems, setOrderItems] = useState([]);
  const [orderInfo, setOrderInfo] = useState({});
  const [orderId, setOrderId] = useState(null);

  const goToNext = (items) => {
    setOrderItems(items);
    setStep(2);
  };

  const handleFormSubmit = (info) => {
    setOrderInfo(info);
    setStep(3);
  };

  const handlePayment = (id) => {
    setOrderId(id);
    setStep(4);
  };

  const goToStatusPage = () => {
    setStep(5);
  };

  return (
    <div className="App">
      {step === 1 && <ProductList onNext={goToNext} />}
      {step === 2 && <OrderForm items={orderItems} onSubmit={handleFormSubmit} />}
      {step === 3 && <PaymentPage order={orderInfo} onPay={handlePayment} />}
      {step === 4 && <OrderStatus orderId={orderId} onViewStatus={goToStatusPage} />}
      {step === 5 && <StatusPage orderId={orderId} />}
      {step === 999 && <AdminPanel />}
    </div>
  );
}

export default App;
