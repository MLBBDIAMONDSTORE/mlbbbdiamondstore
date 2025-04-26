import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import '../styles/main.css';

const products = [
  { id: 1, name: '86 Diamonds', price: 1.2, emoji: '💎' },
  { id: 2, name: '172 Diamonds', price: 2.3, emoji: '✨' },
  { id: 3, name: '257 Diamonds', price: 3.5, emoji: '⚡' },
  { id: 4, name: '344 Diamonds', price: 4.7, emoji: '🔥' },
];

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="page-container">
      <h2 className="page-title">Diamond Tanlang</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={() => addToCart(product)} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;