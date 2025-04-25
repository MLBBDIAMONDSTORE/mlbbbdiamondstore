import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function ProductCard({ product }) {
  const { addItem } = useContext(OrderContext);
  return (
    <div className="product-card">
      <div className="icon">💎</div>
      <div className="info">
        <strong>{product.name}</strong>
        <span>${product.price.toFixed(2)}</span>
      </div>
      <button onClick={() => addItem(product)}>
        ADD
      </button>
    </div>
  );
}