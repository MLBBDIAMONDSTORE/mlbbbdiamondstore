import React, { useState } from 'react';
import '../styles/PaymentPage.css';

const PaymentPage = ({ order, onPay }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Uzcard');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mocking payment success
    const mockOrderId = 'ORDER123456';
    onPay(mockOrderId);
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <p>Game ID: {order.gameId}</p>
      <p>Zone ID: {order.zoneId}</p>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="Uzcard"
            checked={paymentMethod === 'Uzcard'}
            onChange={() => setPaymentMethod('Uzcard')}
          />
          Uzcard
        </label>
        <label>
          <input
            type="radio"
            value="Humo"
            checked={paymentMethod === 'Humo'}
            onChange={() => setPaymentMethod('Humo')}
          />
          Humo
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <button type="submit">PAY</button>
      </form>
    </div>
  );
};

export default PaymentPage;
