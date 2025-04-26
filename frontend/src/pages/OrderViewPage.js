import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import OrderSummary from '../components/OrderSummary';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

export default function OrderViewPage() {
  const { cart } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/pay');
  };

  return (
    <div className="page order-view-page">
      <h1 className="page-title">Buyurtmani Ko‘rish</h1>
      <OrderSummary />
      <button onClick={handleConfirm} className="confirm-button">
        Buyurtmani Tasdiqlash
      </button>
    </div>
  );
}