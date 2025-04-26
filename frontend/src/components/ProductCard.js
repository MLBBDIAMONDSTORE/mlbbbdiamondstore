import React from 'react';
import '../styles/main.css';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <div className="product-emoji">💎</div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <button
        className="add-button"
        onClick={() => {
          onAdd(product);
          const emoji = document.querySelector('.product-emoji');
          emoji.classList.add('wiggle');
          setTimeout(() => emoji.classList.remove('wiggle'), 500);
        }}
      >
        ADD
      </button>
    </div>
  );
}