import React, { useEffect, useState } from 'react';
import { getProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import '../styles/main.css';

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="container">
      <h1>Diamondlar</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}