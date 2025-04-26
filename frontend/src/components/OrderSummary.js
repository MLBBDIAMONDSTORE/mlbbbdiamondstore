import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function OrderSummary() {
  const { cart } = useContext(OrderContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      <h3>Buyurtma tafsilotlari</h3>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.emoji} {item.name} — {item.price} so‘m
          </li>
        ))}
      </ul>
      <p><strong>Jami:</strong> {total} so‘m</p>
    </div>
  );
}