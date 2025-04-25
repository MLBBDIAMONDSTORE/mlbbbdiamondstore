// src/pages/PayPage.js
import React from 'react';
import { useOrder } from '../context/OrderContext';

const PayPage = () => {
  const { order, clearOrder } = useOrder();

  return (
    <div className="pay-page">
      <h1>Your Order</h1>
      <ul>
        {order.items.map((item, i) => (
          <li key={i}>
            {item.name} x{item.quantity} — ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${order.total.toFixed(2)}</p>
      <button onClick={() => {/* to‘lov funksiyasi */}}>Pay</button>
      <button onClick={clearOrder}>Cancel</button>
    </div>
  );
};

// **BU YERDA** `export` top-level bo‘lishi kerak
export default PayPage;