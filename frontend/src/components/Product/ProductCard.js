import React from 'react';
import '../../styles/ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p>{product.price} UZS</p>
    </div>
  );
};

export default ProductCard;