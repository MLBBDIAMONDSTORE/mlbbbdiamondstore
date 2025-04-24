import React, { useState } from 'react';
import '../styles/App.css';

const products = [
  { name: '56', price: 0.81 },
  { name: '86', price: 1.07 },
  { name: '112', price: 1.63 },
  { name: '172', price: 2.12 },
  { name: '257', price: 3.07 },
  { name: '706', price: 8.33 },
  { name: '2195', price: 25.23 },
  { name: '2398', price: 32.53 },
  { name: '3688', price: 42.09 },
  { name: '5532', price: 63.55 },
  { name: '6042', price: 81.32 },
  { name: '9288', price: 105.56 },
  { name: 'Weekly Pass', price: 1.32 },
  { name: 'Twilight Pass', price: 6.99 },
];

const ProductList = ({ onNext }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      <h1>Choose Your Product</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="emoji">💎</div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <button className="add-button" onClick={() => addToCart(product)}>
              ADD
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <button className="view-order-button" onClick={() => onNext(cart)}>
          VIEW ORDER
        </button>
      )}
    </div>
  );
};

export default ProductList;
