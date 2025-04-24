import React, { useState } from 'react';
import ProductList from './ProductList';
import OrderForm from './OrderForm';
import PaymentPage from './PaymentPage';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (items) => {
    setSelectedItems(items);
    setCurrentStep(2);
  };

  const handleOrderSubmit = (orderInfo) => {
    console.log('Order info:', orderInfo);
    setCurrentStep(3);
  };

  return (
    <div>
      {currentStep === 1 && <ProductList onNext={handleNext} />}
      {currentStep === 2 && <OrderForm items={selectedItems} onSubmit={handleOrderSubmit} />}
      {currentStep === 3 && <PaymentPage order={selectedItems} />}
    </div>
  );
}

export default App;
