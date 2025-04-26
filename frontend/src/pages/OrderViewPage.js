// src/pages/OrderViewPage.js
import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export default function OrderViewPage() {
  const { order, nickname } = useContext(OrderContext);
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Your Order</h1>
      <p>Welcome, {nickname}!</p>
      <div className="order-summary">
        {order.items.map((item, i) => (
          <div key={i} className="order-item">
            💎 {item.amount} x {item.price.toFixed(2)}
          </div>
        ))}
      </div>
      <h2>Total: ${order.total.toFixed(2)}</h2>
      <button onClick={() => navigate('/pay')}>PAY</button>
      <button onClick={() => navigate('/')}>CANCEL</button>
    </div>
  );
}