import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderViewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedProduct, nickname, mlbbId, zoneId } = location.state || {};

  if (!selectedProduct || !nickname || !mlbbId || !zoneId) {
    return (
      <div className="page-container">
        <p className="error-message">Order data is missing. Please start again.</p>
      </div>
    );
  }

  const handleConfirm = () => {
    navigate('/pay', {
      state: {
        selectedProduct,
        nickname,
        mlbbId,
        zoneId,
      },
    });
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Order Summary</h2>
      <div className="order-summary">
        <div className="order-item"><strong>Nickname:</strong> {nickname}</div>
        <div className="order-item"><strong>MLBB ID:</strong> {mlbbId}</div>
        <div className="order-item"><strong>Zone ID:</strong> {zoneId}</div>
        <div className="order-item"><strong>Product:</strong> {selectedProduct.name}</div>
        <div className="order-item"><strong>Price:</strong> ${selectedProduct.price}</div>
        <div className="order-item"><strong>Emoji:</strong> {selectedProduct.emoji}</div>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderViewPage;