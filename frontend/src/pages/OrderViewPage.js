import React from 'react';
import OrderSummary from '../components/OrderSummary';
import { useNavigate } from 'react-router-dom';

export default function OrderViewPage() {
  const navigate = useNavigate();

  return (
    <div className="page order-page">
      <OrderSummary />
      <button className="next-btn" onClick={() => navigate('/pay')}>
        Buyurtmani tasdiqlash
      </button>
    </div>
  );
}