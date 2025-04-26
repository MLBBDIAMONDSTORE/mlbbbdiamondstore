import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/main.css';

export default function PayPage() {
  const { cart, user } = useContext(OrderContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="page pay-page">
      <h1 className="page-title">To‘lov Sahifasi</h1>
      <p className="summary-text">Foydalanuvchi: {user.nickname}</p>
      <ul className="pay-list">
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="total-text">Umumiy: ${totalPrice}</p>
      <button className="pay-button">To‘lovni amalga oshirish</button>
    </div>
  );
}