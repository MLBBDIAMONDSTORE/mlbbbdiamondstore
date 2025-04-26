import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      navigate('/order', { state: { product } });
    }, 500); // animatsiya tugashi uchun vaqt
  };

  return (
    <div className="product-card">
      <div className={`emoji ${isAnimating ? 'wiggle' : ''}`}>{product.emoji}</div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        className={`add-btn ${isAnimating ? 'scale' : ''}`}
        onClick={handleAdd}
        disabled={isAnimating}
      >
        ADD
      </button>
    </div>
  );
};

export default ProductCard;