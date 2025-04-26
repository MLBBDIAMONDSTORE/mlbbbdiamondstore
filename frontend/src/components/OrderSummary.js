// src/components/OrderSummary.js
import React, { useContext } from 'react';
import { CartContext } from '../context/OrderContext';
import '../styles/main.css';

const OrderSummary = () => {
  const { cartItems } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) return null;

  return (
    <div className="order-summary">
      <h3 className="summary-title">Tanlangan mahsulotlar:</h3>
      <div className="summary-list">
        {cartItems.map((item, index) => (
          <div key={index} className="order-item">
            <span className="order-emoji">{item.emoji}</span>
            <span className="order-name">{item.name}</span>
            <span className="order-price">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;