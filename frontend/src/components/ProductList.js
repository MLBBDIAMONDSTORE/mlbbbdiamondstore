import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: '56', price: 0.81, emoji: '💎' },
  { id: 2, name: '86', price: 1.07, emoji: '💎' },
  { id: 3, name: '112', price: 1.63, emoji: '💎' },
  { id: 4, name: '172', price: 2.12, emoji: '💎' },
  { id: 5, name: '257', price: 3.07, emoji: '💎' },
  { id: 6, name: '706', price: 8.33, emoji: '💎' },
  { id: 7, name: '2195', price: 25.23, emoji: '💎' },
  { id: 8, name: '2398', price: 32.53, emoji: '💎' },
  { id: 9, name: '3688', price: 42.09, emoji: '💎' },
  { id: 10, name: '5532', price: 63.55, emoji: '💎' },
  { id: 11, name: '6042', price: 81.32, emoji: '💎' },
  { id: 12, name: '9288', price: 105.56, emoji: '💎' },
  { id: 13, name: 'Weekly Pass', price: 1.32, emoji: '📅' },
  { id: 14, name: 'Twilight Pass', price: 6.99, emoji: '🌅' },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;