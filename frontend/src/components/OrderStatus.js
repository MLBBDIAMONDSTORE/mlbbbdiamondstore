import React from 'react';
import '../styles/OrderStatus.css';

const OrderStatus = ({ orderId, onViewStatus }) => {
  return (
    <div className="order-status">
      <h2>Order Submitted!</h2>
      <p>Your order ID: <strong>{orderId}</strong></p>
      <button onClick={onViewStatus}>View Status</button>
    </div>
  );
};

export default OrderStatus;