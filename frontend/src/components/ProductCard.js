import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const ProductCard = ({ product }) => {
  const { addToOrder } = useContext(OrderContext);

  return (
    <div className="product-card">
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="add-btn" onClick={() => addToOrder(product)}>
        ADD
      </button>
    </div>
  );
};

export default ProductCard;