import React, { useContext, useState } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { formatPrice } from '../utils/formatPrice';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, getQuantity } = useContext(OrderContext);
  const { language } = useContext(LanguageContext);
  const quantity = getQuantity(product.id);
  const [animate, setAnimate] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    triggerAnimation();
  };

  const handleRemove = () => {
    removeFromCart(product);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="product-card">
      <div className={`product-emoji ${animate ? 'wiggle' : ''}`}>
        {product.emoji}
      </div>
      <div className="product-name">
        {product.name[language]} · {formatPrice(product.price, language)}
      </div>
      {quantity === 0 ? (
        <button className="add-btn" onClick={handleAdd}>
          ADD
        </button>
      ) : (
        <div className="counter">
          <button className="counter-btn" onClick={handleRemove}>-</button>
          <span className="quantity-badge">{quantity}</span>
          <button className="counter-btn" onClick={handleAdd}>+</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;