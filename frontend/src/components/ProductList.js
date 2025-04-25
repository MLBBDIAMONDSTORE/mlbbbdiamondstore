import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import ProductCard from './ProductCard';
import '../styles/main.css';

const products = [
  { id: 1, name: '56 Diamonds', price: 0.81, emoji: '💎' },
  { id: 2, name: '86 Diamonds', price: 1.07, emoji: '💎' },
  { id: 3, name: '112 Diamonds', price: 1.63, emoji: '💎' },
  { id: 4, name: '172 Diamonds', price: 2.12, emoji: '💎' },
  { id: 5, name: '257 Diamonds', price: 3.07, emoji: '💎' },
  { id: 6, name: '706 Diamonds', price: 8.33, emoji: '💎' },
  { id: 7, name: '2195 Diamonds', price: 25.23, emoji: '💎' },
];

const ProductList = () => {
  const { addToCart, cart } = useOrder();
  const navigate = useNavigate();

  return (
    <div className="product-list">
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
      {cart.length > 0 && (
        <button
          className="view-order"
          onClick={() => navigate('/order')}
        >
          VIEW ORDER ({cart.length})
        </button>
      )}
    </div>
  );
};

export default ProductList;