import React from 'react';
import { useOrder } from '../context/OrderContext';
import '../styles/main.css';

const OrderSummary = () => {
  const { cart } = useOrder();
  const total = cart
    .reduce((sum, p) => sum + p.price, 0)
    .toFixed(2);

  return (
    <div className="order-summary">
      <h2>Your Order</h2>
      {cart.map((p, i) => (
        <div key={i} className="item">
          <span>
            {p.emoji} {p.name}
          </span>
          <span>${p.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="total">Total: ${total}</div>
    </div>
  );
};

export default OrderSummary;