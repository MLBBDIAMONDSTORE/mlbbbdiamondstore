import React from 'react';
import '../styles/OrderStatus.css';

const StatusPage = ({ orderId }) => {
  return (
    <div className="status-page">
      <h2>Order Status</h2>
      <p>Order ID: <strong>{orderId}</strong></p>
      <p>Status: Pending (waiting for admin approval)</p>
    </div>
  );
};

export default StatusPage; 