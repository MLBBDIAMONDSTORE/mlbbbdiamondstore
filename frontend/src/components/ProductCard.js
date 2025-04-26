import React from 'react';
import '../styles/main.css';

export default function ProductCard({ product, onAdd }) {
  const handleClick = () => {
    onAdd(product);
    const emoji = document.getElementById(`emoji-${product.id}`);
    const btn = document.getElementById(`btn-${product.id}`);
    if (emoji && btn) {
      emoji.classList.add('wiggle');
      btn.classList.add('scale');
      setTimeout(() => {
        emoji.classList.remove('wiggle');
        btn.classList.remove('scale');
      }, 500);
    }
  };

  return (
    <div className="product-card">
      <span id={`emoji-${product.id}`} className="diamond-emoji">💎</span>
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
      <button id={`btn-${product.id}`} className="add-btn" onClick={handleClick}>
        ADD
      </button>
    </div>
  );
}