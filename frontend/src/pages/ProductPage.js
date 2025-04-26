import React, { useContext } from 'react';
import { CartContext } from '../context/OrderContext';
import ProductCard from '../components/ProductCard';
import '../styles/main.css';

const products = [
    { id: 1, name: '86 Diamonds', price: 00000, emoji: '💎' },
  { id: 2, name: '172 Diamonds', price: 00000, emoji: '💎' },
  { id: 3, name: '257 Diamonds', price: 00000, emoji: '💎' },
  { id: 4, name: '706 Diamonds', price: 00000, emoji: '💎' },
  { id: 5, name: '2195 Diamonds', price: 00000, emoji: '💎' },
  { id: 6, name: '2398 Diamonds', price: 00000, emoji: '💎' },
  { id: 7, name: '3688 Diamonds', price: 00000, emoji: '💎' },
  { id: 8, name: '5532 Diamonds', price: 00000, emoji: '💎' },
  { id: 9, name: '6042 Diamonds', price: 00000, emoji: '💎' },
  { id: 10, name: '9288 Diamonds', price: 00000, emoji: '💎' },
  { id: 11, name: 'Weekly Pass', price: 00000, emoji: '💎' },
  { id: 12, name: 'Twilight Pass', price: 00000, emoji: '💎' },
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