import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(OrderContext);

  const handleAdd = () => {
    addToCart(product);
    const emoji = document.getElementById(`emoji-${product.id}`);
    const button = document.getElementById(`btn-${product.id}`);
    emoji.classList.add('wiggle');
    button.classList.add('pressed');
    setTimeout(() => {
      emoji.classList.remove('wiggle');
      button.classList.remove('pressed');
    }, 500);
  };

  return (
    <div className="product-card">
      <div id={`emoji-${product.id}`} className="emoji">{product.emoji}</div>
      <h4>{product.name}</h4>
      <p>{product.price} so‘m</p>
      <button id={`btn-${product.id}`} onClick={handleAdd}>Qo‘shish</button>
    </div>
  );
}