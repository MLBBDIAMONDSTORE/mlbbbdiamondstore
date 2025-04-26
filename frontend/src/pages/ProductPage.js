import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/ProductPage.css';

const products = [
  { id: 1, name: 'Hotdog', price: 3.49, emoji: '🌭' },
  { id: 2, name: 'Taco', price: 3.99, emoji: '🌮' },
  { id: 3, name: 'Pizza', price: 7.99, emoji: '🍕' },
  { id: 4, name: 'Donut', price: 1.49, emoji: '🍩' },
  { id: 5, name: 'Popcorn', price: 1.99, emoji: '🍿' },
  { id: 6, name: 'Coke', price: 1.49, emoji: '🥤' },
  { id: 7, name: 'Icecream', price: 5.99, emoji: '🍦' },
  { id: 8, name: 'Cookie', price: 3.99, emoji: '🍪' },
  { id: 9, name: 'Flan', price: 7.99, emoji: '🍮' },
];

const ProductPage = () => {
  const { cart, addItem, removeItem } = useContext(OrderContext);

  const getQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-page">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="emoji">{product.emoji}</div>
            <div className="name-price">
              {product.name} · <span className="price">${product.price.toFixed(2)}</span>
            </div>
            {getQuantity(product.id) === 0 ? (
              <button className="add-button" onClick={() => addItem(product)}>
                ADD
              </button>
            ) : (
              <div className="quantity-controls">
                <button className="quantity-button" onClick={() => removeItem(product.id)}>
                  –
                </button>
                <span className="quantity-count">{getQuantity(product.id)}</span>
                <button className="quantity-button" onClick={() => addItem(product)}>
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="view-order-button-wrapper">
        <a href="/order" className="view-order-button">VIEW ORDER</a>
      </div>
    </div>
  );
};

export default ProductPage;