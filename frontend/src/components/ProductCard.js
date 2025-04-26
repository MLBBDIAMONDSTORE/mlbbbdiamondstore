import React from 'react';
import '../styles/main.css';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <div className="product-emoji">{product.emoji}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-button" onClick={onAdd}>
        Qo'shish
      </button>
    </div>
  );
};

export default ProductCard;