import React from 'react';
import '../styles/main.css';

const ProductCard = ({ product, onAdd }) => (
  <div className="card">
    <div className="emoji">{product.emoji}</div>
    <div className="name">{product.name}</div>
    <div className="price">${product.price.toFixed(2)}</div>
    <button onClick={() => onAdd(product)}>ADD</button>
  </div>
);

export default ProductCard;