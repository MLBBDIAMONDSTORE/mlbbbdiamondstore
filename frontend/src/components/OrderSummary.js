import React from 'react';
import '../styles/OrderSummary.css';

const OrderSummary = ({ cart, info, onNext, onBack }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <div className="summary-buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default OrderSummary;