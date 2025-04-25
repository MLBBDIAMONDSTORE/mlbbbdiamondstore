// src/pages/OrderForm.js
import React from 'react';
import '../styles/OrderForm.css';

function OrderForm() {
  return (
    <div className="order-form-container">
      <div className="order-form-box">
        <h2>Enter your MLBB ID</h2>
        <input type="text" placeholder="Game ID" />
        <input type="text" placeholder="Zone ID" />
        <button>Continue</button>
      </div>
      <div className="footer-text">© 2025 MLBB Diamond Store</div>
    </div>
  );
}

export default OrderForm;