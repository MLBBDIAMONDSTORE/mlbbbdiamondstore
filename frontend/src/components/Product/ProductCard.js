import React from 'react';

const ProductCard = ({ product, onSelect }) => (
  <div className="product-card" onClick={() => onSelect(product)}>
    <h3>{product.name}</h3>
    <p>{product.price} UZS</p>
  </div>
);

export default ProductCard;