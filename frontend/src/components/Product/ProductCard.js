// src/components/Product/ProductCard.js

import React, { useState } from 'react';
import '../../styles/ProductCard.css';

const products = [
  { id: 1, name: '56 Diamonds', price: 0.81 },
  { id: 2, name: '86 Diamonds', price: 1.07 },
  { id: 3, name: '112 Diamonds', price: 1.63 },
  { id: 4, name: '172 Diamonds', price: 2.12 },
  { id: 5, name: '257 Diamonds', price: 3.07 },
  { id: 6, name: '706 Diamonds', price: 8.33 },
  { id: 7, name: '2195 Diamonds', price: 25.23 },
  { id: 8, name: '2398 Diamonds', price: 32.53 },
  { id: 9, name: '3688 Diamonds', price: 42.09 },
  { id: 10, name: '5532 Diamonds', price: 63.55 },
  { id: 11, name: '6042 Diamonds', price: 81.32 },
  { id: 12, name: '9288 Diamonds', price: 105.56 },
  { id: 13, name: 'Weekly Pass', price: 1.32 },
  { id: 14, name: 'Twilight Pass', price: 6.99 },
];

const ProductCard = ({ onAddToCart }) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleAdd = (product) => {
    setActiveProduct(product.id);
    onAddToCart(product);
    setTimeout(() => setActiveProduct(null), 500);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <span
            className={`diamond-emoji ${activeProduct === product.id ? 'wiggle' : ''}`}
          >
            💎
          </span>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              className={`add-button ${activeProduct === product.id ? 'scale-down' : ''}`}
              onClick={() => handleAdd(product)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;