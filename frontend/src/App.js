import React, { useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';
import OrderSummary from './OrderSummary';

const products = [
  { name: '56', price: 0.81, emoji: '💎' },
  { name: '86', price: 1.07, emoji: '💎' },
  { name: '112', price: 1.63, emoji: '💎' },
  { name: '172', price: 2.12, emoji: '💎' },
  { name: '257', price: 3.07, emoji: '💎' },
  { name: '706', price: 8.33, emoji: '💎' },
  { name: '2195', price: 25.23, emoji: '💎' },
  { name: '2398', price: 32.53, emoji: '💎' },
  { name: '3688', price: 42.09, emoji: '💎' },
  { name: '5532', price: 63.55, emoji: '💎' },
  { name: '6042', price: 81.32, emoji: '💎' },
  { name: '9288', price: 105.56, emoji: '💎' },
  { name: 'Weekly Pass', price: 1.32, emoji: '📅' },
  { name: 'Twilight Pass', price: 6.99, emoji: '🌆' },
];

function App() {
  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">
      <div className="product-grid">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} onAdd={handleAdd} />
        ))}
      </div>
      {cart.length > 0 && <OrderSummary cart={cart} />}
    </div>
  );
}

export default App;
