// src/components/Product/ProductCard.js

import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAdd }) => {
  const handleAdd = (e) => {
    const card = e.currentTarget;
    const emoji = card.querySelector('.diamond-emoji');
    const button = card.querySelector('.add-button');

    emoji.classList.add('wiggle');
    button.classList.add('scale-down');

    setTimeout(() => {
      emoji.classList.remove('wiggle');
      button.classList.remove('scale-down');
    }, 500);

    onAdd(product);
  };

  return (
    <div className="product-card">
      <div className="diamond-emoji">💎</div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="add-button" onClick={handleAdd}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;