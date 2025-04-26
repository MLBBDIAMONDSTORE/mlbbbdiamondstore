import React from 'react';
import { getProducts } from '../utils/api';
import { useOrder } from '../context/OrderContext';

export default function ProductPage() {
  const { addItem } = useOrder();
  const products = getProducts();

  return (
    <main>
      <h2>Choose your Diamonds</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}${product.price}</h3>
            <button onClick={() => addItem(product)}>
              Add 💎
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}