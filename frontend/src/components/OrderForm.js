import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderForm.css';

const OrderForm = () => {
  const { orderItems } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="order-form-container">
      <h1>Your Order</h1>
      {orderItems.length === 0 ? (
        <p>No products selected.</p>
      ) : (
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default OrderForm;