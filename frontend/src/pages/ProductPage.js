import React from 'react';
import { getProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import '../styles/main.css';

export default function ProductPage() {
  const products = getProducts();

  return (
    <div className="page product-page">
      <h1 className="page-title">Diamond To‘plamni Tanlang</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}