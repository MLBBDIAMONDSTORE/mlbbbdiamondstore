import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import '../styles/OrderForm.css';

const OrderSummary = () => {
  const { orderItems } = useContext(OrderContext);
  const navigate = useNavigate();

  const totalPrice = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePay = () => {
    navigate('/pay');
  };

  return (
    <div className="order-summary">
      <h2>Buyurtma Tafsilotlari</h2>
      {orderItems.length === 0 ? (
        <p>Hech narsa tanlanmagan.</p>
      ) : (
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              <span>{item.emoji} {item.name}</span> x {item.quantity} — ${(
                item.price * item.quantity
              ).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <div className="summary-footer">
        <strong>Jami: ${totalPrice.toFixed(2)}</strong>
        <button className="pay-button" onClick={handlePay}>
          TO‘LASH
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
