import React from 'react';
import '../styles/main.css';

export default function OrderSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      <h3>Buyurtma</h3>
      {cart.map((item, i) => (
        <div key={i} className="order-item">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
      <hr />
      <div className="order-total">
        <strong>Jami:</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}