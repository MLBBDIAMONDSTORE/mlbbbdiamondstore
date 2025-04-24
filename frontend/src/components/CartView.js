import React, { useState } from 'react';
import '../../styles/cart.css';

const products = [
  { emoji: '56', desc: 'Po-ta-toes', price: 0.81 },
  { emoji: '86', desc: 'Hot and ready', price: 1.07 },
  { emoji: '112', desc: 'Más XP', price: 1.63 },
  { emoji: '172', desc: 'Rank up', price: 2.12 },
  { emoji: '257', desc: 'Epic tier', price: 3.07 },
  { emoji: '706', desc: 'Diamond blast', price: 8.33 },
  { emoji: '2195', desc: 'Mega top-up', price: 25.23 },
  { emoji: '2398', desc: 'Special offer', price: 32.53 },
  { emoji: '3688', desc: 'Big deal', price: 42.09 },
  { emoji: '5532', desc: 'Monster pack', price: 63.55 },
  { emoji: '6042', desc: 'Max stack', price: 81.32 },
  { emoji: '9288', desc: 'Ultimate boost', price: 105.56 },
  { emoji: 'Weekly Pass', desc: '7 days value', price: 1.32 },
  { emoji: 'Twilight Pass', desc: 'Mystery box', price: 6.99 }
];

function CartView({ onNext }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(p => p.emoji === product.emoji);
    if (existing) {
      existing.qty += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, p) => sum + p.qty * p.price, 0).toFixed(2);

  return (
    <div className="cart-container">
      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card" onClick={() => addToCart(p)}>
            <div className="product-emoji">{p.emoji}</div>
            <div className="product-desc">{p.desc}</div>
            <button className="add-button">ADD</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button className="view-order" onClick={() => onNext(cart)}>
          VIEW ORDER (${total})
        </button>
      )}
    </div>
  );
}

export default CartView;
