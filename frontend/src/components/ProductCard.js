import React from 'react';
import { useOrder } from '../context/OrderContext';

const ProductCard = ({ product }) => {
  const { addProduct } = useOrder();

  const handleAdd = () => {
    addProduct(product);
  };

  return (
    <div className="product-card">
      <div className="product-emoji" onClick={handleAdd}>
        {product.emoji}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price} UZS</p>
      </div>
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  );
};

export default ProductCard;