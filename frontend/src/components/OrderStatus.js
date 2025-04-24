import React from 'react';
import '../../styles/status.css';

function OrderStatus({ info }) {
  return (
    <div className="status-container">
      <h2>Order Status</h2>
      <p><strong>Nickname:</strong> {info.nickname}</p>
      <p><strong>ID:</strong> {info.id}</p>
      <p><strong>Zone:</strong> {info.zone}</p>
      <p><strong>Card:</strong> {info.cardType.toUpperCase()}</p>
      <p><strong>Total:</strong> ${info.total}</p>
      <p><strong>Status:</strong> Pending Approval</p>
    </div>
  );
}

export default OrderStatus;
