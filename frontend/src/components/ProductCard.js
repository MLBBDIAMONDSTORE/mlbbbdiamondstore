import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/main.css';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(OrderContext);

  const handleAdd = () => {
    const btn = document.getElementById(`btn-${product.id}`);
    const emoji = document.getElementById(`emoji-${product.id}`);

    if (btn && emoji) {
      btn.classList.add('pressed');
      emoji.classList.add('wiggle');
      setTimeout(() => {
        btn.classList.remove('pressed');
        emoji.classList.remove('wiggle');
      }, 500);
    }

    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="emoji" id={`emoji-${product.id}`}>💎</div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button id={`btn-${product.id}`} onClick={handleAdd}>
        ADD
      </button>
    </div>
  );
}