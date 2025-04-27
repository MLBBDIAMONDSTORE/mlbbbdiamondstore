import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="product-card">
      <div className="emoji">{product.emoji}</div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price} so'm</div>
      </div>

      {quantity === 0 ? (
        <button className="add-button" onClick={handleAdd}>
          Buy Now
        </button>
      ) : (
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={handleDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncrement}>+</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;