import React, { useContext } from 'react';
import { CartContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const OrderViewPage = () => {
  const { cartItems, nickname } = useContext(CartContext);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/pay');
  };

  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <h2 className="page-title">Buyurtma topilmadi</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2 className="page-title">Buyurtmani Tasdiqlang</h2>
      <div className="order-summary">
        <p><strong>Nickname:</strong> {nickname}</p>
        <p><strong>Mahsulot:</strong> {cartItems[0].name}</p>
        <p><strong>Narx:</strong> ${cartItems[0].price.toFixed(2)}</p>
      </div>
      <button onClick={handleContinue} className="confirm-button">
        To‘lovga o‘tish
      </button>
    </div>
  );
};

export default OrderViewPage;