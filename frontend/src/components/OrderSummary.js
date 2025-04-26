import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/main.css';

export default function OrderSummary() {
  const { cart } = useContext(OrderContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      <h2>Tanlangan Mahsulotlar</h2>
      {cart.length === 0 ? (
        <p>Hech narsa tanlanmagan.</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <hr />
      <p>Jami: ${total.toFixed(2)}</p>
    </div>
  );
}