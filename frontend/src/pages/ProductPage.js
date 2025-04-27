import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductPage.css';
import { products } from '../data/products';

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="title">Select Your Diamonds</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;