// src/pages/OrderViewPage.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import OrderSummary from '../components/OrderSummary';

const OrderViewPage = () => {
  const { cart, user } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/pay');
  };

  return (
    <div className="page">
      <h2>Buyurtma Tafsilotlari</h2>
      <div className="order-info">
        <p><strong>Nickname:</strong> {user.nickname}</p>
        <p><strong>Game ID:</strong> {user.gameId}</p>
        <p><strong>Zone ID:</strong> {user.zoneId}</p>
      </div>

      <OrderSummary cart={cart} />

      <button className="confirm-button" onClick={handleConfirm}>
        Buyurtmani Tasdiqlash
      </button>
    </div>
  );
};

export default OrderViewPage;