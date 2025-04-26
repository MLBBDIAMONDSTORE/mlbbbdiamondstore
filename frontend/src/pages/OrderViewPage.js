import React from 'react';
import OrderSummary from '../components/OrderSummary';
import { useNavigate } from 'react-router-dom';

export default function OrderViewPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Buyurtmangiz</h1>
      <OrderSummary />
      <button className="confirm-btn" onClick={() => navigate('/pay')}>
        Buyurtmani tasdiqlash
      </button>
    </div>
  );
}