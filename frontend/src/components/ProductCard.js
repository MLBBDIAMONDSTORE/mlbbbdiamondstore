import React from 'react';
import '../styles/ProductCard.css';
import formatPrice from '../utils/formatPrice';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)} so'm</p>
      <button onClick={() => onAdd(product)}>Sotib olish</button>
    </div>
  );
};

export default ProductCard;