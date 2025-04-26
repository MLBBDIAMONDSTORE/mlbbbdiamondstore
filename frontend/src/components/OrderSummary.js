import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/main.css';

const OrderSummary = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) return null;

  return (
    <div className="order-summary">
      <h3>Tanlangan mahsulotlar:</h3>
      {cartItems.map((item, index) => (
        <div key={index} className="order-item">
          {item.emoji} {item.name} - ${item.price.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;