import React from 'react';
import '../styles/OrderStatus.css';

const StatusPage = () => {
  return (
    <div className="status-page">
      <h2>Order Status</h2>
      <p>Order ID: <strong>#123456</strong></p>
      <p>Status: Pending (waiting for admin approval)</p>
    </div>
  );
};

export default StatusPage;