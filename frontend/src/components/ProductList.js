import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const products = [
  { id:1, name:'56',   price:0.81, emoji:'💎' },
  { id:2, name:'86',   price:1.07, emoji:'💎' },
  { id:3, name:'112',  price:1.63, emoji:'💎' },
  { id:4, name:'172',  price:2.12, emoji:'💎' },
  { id:5, name:'257',  price:3.07, emoji:'💎' },
  { id:6, name:'706',  price:8.33, emoji:'💎' },
  { id:7, name:'2195', price:25.23,emoji:'💎' },
];

export default function ProductList() {
  const { addToCart, cart } = useOrder();
  const navigate = useNavigate();

  return (
    <div className="product-list">
      <h1>Choose Your Diamonds</h1>
      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <div className="emoji">{p.emoji}</div>
            <div className="name">{p.name}</div>
            <div className="price">${p.price.toFixed(2)}</div>
            <button onClick={() => addToCart(p)}>ADD</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <button className="view-order" onClick={() => navigate('/order')}>
          VIEW ORDER ({cart.length})
        </button>
      )}
    </div>
  );
}