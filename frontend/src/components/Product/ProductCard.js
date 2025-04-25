import React, { useState } from 'react';
import '../../styles/ProductCard.css';

const ProductCard = ({ product, addToOrder }) => {
  const [isWiggling, setIsWiggling] = useState(false);

  const handleAddClick = () => {
    setIsWiggling(true);
    addToOrder(product);

    setTimeout(() => {
      setIsWiggling(false);
    }, 500);
  };

  return (
    <div className="product-card">
      <div className="emoji-container">
        <span className={`emoji ${isWiggling ? 'wiggle' : ''}`}>💎</span>
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-button" onClick={handleAddClick}>ADD</button>
    </div>
  );
};

export default ProductCard;