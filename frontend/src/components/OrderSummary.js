import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

export default function OrderSummary() {
  const { cart, clearCart } = useOrder();
  const navigate = useNavigate();
  const total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);

  return (
    <div className="order-summary">
      <h1>Your Order</h1>
      {cart.map((p, i) => (
        <div key={i} className="item">
          <span>{p.emoji} {p.name}</span>
          <span>${p.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="total">Total: ${total}</div>
      <button onClick={() => navigate('/payment')}>PAY</button>
      <button className="cancel" onClick={() => { clearCart(); navigate('/'); }}>
        CANCEL
      </button>
    </div>
  );
}