import React from 'react';
import '../styles/PaymentPage.css';

const PaymentPage = () => {
  const handlePayment = () => {
    alert('Payment processed!');
  };

  return (
    <div className="payment-page-container">
      <h2>Choose Payment Method</h2>
      <button onClick={handlePayment}>Pay with Card</button>
      <button onClick={handlePayment}>Pay with PayPal</button>
    </div>
  );
};

export default PaymentPage;