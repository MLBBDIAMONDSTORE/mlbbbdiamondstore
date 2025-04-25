import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import '../styles/main.css';

const OrderForm = () => {
  const { clearCart } = useOrder();
  const navigate = useNavigate();

  return (
    <div className="order-form">
      <button onClick={() => navigate('/pay')}>PAY</button>
      <button
        className="cancel"
        onClick={() => {
          clearCart();
          navigate('/');
        }}
      >
        CANCEL
      </button>
    </div>
  );
};

export default OrderForm;