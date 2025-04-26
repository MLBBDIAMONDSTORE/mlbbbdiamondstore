import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const products = [
    { id: 1, name: '86 Diamonds', price: 10, emoji: '💎' },
    { id: 2, name: '172 Diamonds', price: 10, emoji: '💎' },
    { id: 3, name: '257 Diamonds', price: 10, emoji: '💎' },
    { id: 4, name: '706 Diamonds', price: 10, emoji: '💎' },
    { id: 5, name: '2195 Diamonds', price: 10, emoji: '💎' },
    { id: 6, name: '2398 Diamonds', price: 10, emoji: '💎' },
    { id: 7, name: '3688 Diamonds', price: 10, emoji: '💎' },
    { id: 8, name: '5532 Diamonds', price: 10, emoji: '💎' },
    { id: 9, name: '6042 Diamonds', price: 10, emoji: '💎' },
    { id: 10, name: '9288 Diamonds', price: 10, emoji: '💎' },
    { id: 11, name: 'Weekly Pass', price: 10, emoji: '💎' },
    { id: 12, name: 'Twilight Pass', price: 10, emoji: '💎' },
  ];

  const addToCart = (product) => {
    console.log('Added to cart:', product);
    // Later we'll navigate to the order page
  };

  return (
    <div className="product-page">
      <h1>Select Your Diamond Pack</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;