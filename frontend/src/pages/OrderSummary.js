import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/OrderSummary.css';

const OrderSummary = () => {
  const { order } = useContext(OrderContext);

  const totalAmount = order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="order-summary">
      <h2>Buyurtma Tafsilotlari</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.emoji} {item.name} x {item.quantity} = {item.price * item.quantity} UZS
          </li>
        ))}
      </ul>
      <h3>Jami: {totalAmount} UZS</h3>
    </div>
  );
};

export default OrderSummary;