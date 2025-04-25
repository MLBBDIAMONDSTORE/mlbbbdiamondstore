import React, { useState } from 'react';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import OrderSummary from './components/OrderSummary';
import PaymentPage from './components/PaymentPage';
import './styles/App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([]);
  const [orderInfo, setOrderInfo] = useState(null);

  const handleNext = (data) => {
    if (step === 1) {
      setCart(data);
      setStep(2);
    } else if (step === 2) {
      setOrderInfo(data);
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="app-container">
      {step === 1 && <ProductList onNext={handleNext} />}
      {step === 2 && <OrderForm onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <OrderSummary cart={cart} info={orderInfo} onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <PaymentPage cart={cart} info={orderInfo} />}
    </div>
  );
};

export default App;