import React, { useState } from 'react';
import '../styles/OrderView.css';

const products = [
  { name: '56', price: 0.81, emoji: '🧱' },
  { name: '86', price: 1.07, emoji: '⚔️' },
  { name: '112', price: 1.63, emoji: '🛡️' },
  { name: '172', price: 2.12, emoji: '🎯' },
  { name: '257', price: 3.07, emoji: '🔥' },
  { name: '706', price: 8.33, emoji: '🧨' },
  { name: '2195', price: 25.23, emoji: '💎' },
  { name: '2398', price: 32.53, emoji: '🚀' },
  { name: '3688', price: 42.09, emoji: '☄️' },
  { name: '5532', price: 63.55, emoji: '⚡' },
  { name: '6042', price: 81.32, emoji: '🏆' },
  { name: '9288', price: 105.56, emoji: '👑' },
  { name: 'Weekly Pass', price: 1.32, emoji: '📆' },
  { name: 'Twilight Pass', price: 6.99, emoji: '🌙' },
];

const OrderView = ({ onNext }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (product) => {
    setSelectedItems(prev => {
      const exists = prev.find(p => p.name === product.name);
      if (exists) {
        return prev.filter(p => p.name !== product.name);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <div className="order-view">
      <h2>Choose Your Product</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className={`product-card ${selectedItems.find(p => p.name === product.name) ? 'selected' : ''}`}
            onClick={() => toggleItem(product)}
          >
            <div className="emoji">{product.emoji}</div>
            <div className="name">{product.name}</div>
            <div className="price">${product.price.toFixed(2)}</div>
            <button className="add-btn">
              {selectedItems.find(p => p.name === product.name) ? 'ADDED' : 'ADD'}
            </button>
          </div>
        ))}
      </div>
      {selectedItems.length > 0 && (
        <button className="view-order-btn" onClick={() => onNext(selectedItems)}>
          VIEW ORDER
        </button>
      )}
    </div>
  );
};

export default OrderView;
 