import React from 'react';
import ProductList from '../components/ProductList';
import products from '../data/products';
import '../styles/ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Diamonds Store</h1>
      <ProductList products={products} onAdd={() => {}} />
    </div>
  );
};

export default ProductPage;