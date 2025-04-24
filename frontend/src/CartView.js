// src/components/CartView.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const mockCart = [
  { emoji: "🍟", name: "Fries", desc: "Po-ta-toes", qty: 2, price: 2.98 },
  { emoji: "🌭", name: "Hotdog", desc: "0% dog, 100% hot", qty: 1, price: 3.49 },
  { emoji: "🌮", name: "Taco", desc: "Mucho más", qty: 3, price: 11.97 },
  { emoji: "🍕", name: "Pizza", desc: "That's amore", qty: 3, price: 23.97 },
  { emoji: "🍩", name: "Donut", desc: "Hole included", qty: 1, price: 1.49 },
  { emoji: "🍿", name: "Popcorn", desc: "Lights, camera, corn", qty: 1, price: 1.99 },
  { emoji: "🍦", name: "Icecream", desc: "Cone of shame", qty: 1, price: 5.99 },
  { emoji: "🍪", name: "Cookie", desc: "Milk’s favorite", qty: 6, price: 23.94 },
  { emoji: "🍮", name: "Flan", desc: "Flan-tastic", qty: 2, price: 15.98 }
];

const CartView = () => {
  const navigate = useNavigate();
  const total = mockCart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <h2>YOUR ORDER</h2>
      {mockCart.map((item, index) => (
        <div className="item" key={index}>
          <span className="emoji">{item.emoji}</span>
          <div className="info">
            <strong>{item.name} <span className="qty">{item.qty}x</span></strong>
            <p>{item.desc}</p>
          </div>
          <span className="price">${item.price.toFixed(2)}</span>
        </div>
      ))}
      <button className="pay-btn" onClick={() => navigate('/payment')}>
        PAY ${total}
      </button>
    </div>
  );
};

export default CartView;
