// src/pages/PayPage.js
import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export default function PayPage() {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>To‘lov</h1>
      <p>Jami: ${order.total.toFixed(2)}</p>
      {/* Bu yerda haqiqiy to‘lov logikasini qo‘shasiz */}
      <button onClick={() => alert('To‘lov amalga oshirildi!')}>To‘lov</button>
      <button onClick={() => navigate('/')}>Bekor qilish</button>
    </div>
  );
}