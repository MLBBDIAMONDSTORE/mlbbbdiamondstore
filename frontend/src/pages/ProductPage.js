import React from 'react';
import { getProducts } from '../utils/api';
import { useOrder } from '../context/OrderContext';

export default function ProductPage() {
  const { addItem } = useOrder();
  const products = getProducts();

  return (
    <div className="page">
      <h2>Choose your Diamonds</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => addItem(product)}>Add 💎</button>
          </div>
        ))}
      </div>
    </div>
  );
}