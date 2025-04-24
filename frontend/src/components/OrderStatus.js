// src/components/OrderStatus.js
import React from 'react';
import './style.css';

const OrderStatus = () => {
  return (
    <div className="container">
      <h2>Order Status</h2>
      <p className="pending">Your order is pending confirmation by admin.</p>
      {/* Admin tomonidan tasdiqlanganda yoki rad etilganda bu yer yangilanadi */}
    </div>
  );
};

export default OrderStatus;
