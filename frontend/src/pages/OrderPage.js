import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import products from '../data/products';
import formatPrice from '../utils/formatPrice'; // ✅ to‘g‘ri default import
import '../styles/OrderPage.css';

const OrderPage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="order-page">
      <h1>Diamonds Store</h1>
      <ProductList products={products} onAdd={handleAddToCart} />
      <div className="cart-summary">
        <h2>Savat:</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {formatPrice(item.price)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderPage;