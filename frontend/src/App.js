import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: '56', price: 0.81 },
  { id: 2, name: '86', price: 1.07 },
  { id: 3, name: '112', price: 1.63 },
  { id: 4, name: '172', price: 2.12 },
  { id: 5, name: '257', price: 3.07 },
  { id: 6, name: '706', price: 8.33 },
  { id: 7, name: '2195', price: 25.23 },
  { id: 8, name: '2398', price: 32.53 },
  { id: 9, name: '3688', price: 42.09 }
];

function App() {
  const [cart, setCart] = useState({});
  const [showOrder, setShowOrder] = useState(false);

  const handleAdd = (id) => {
    setCart((prev) => ({ ...prev, [id]: 1 }));
  };

  const handleIncrement = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: qty };
    });
  };

  const totalItems = Object.keys(cart).length;

  return (
    <div className="app">
      <h1>Choose Your Product</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="emoji">💎</div>
            <div>{product.name}</div>
            <div>${product.price.toFixed(2)}</div>
            {cart[product.id] ? (
              <div className="counter">
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <span>{cart[product.id]}</span>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
            ) : (
              <button className="add" onClick={() => handleAdd(product.id)}>ADD</button>
            )}
          </div>
        ))}
      </div>

      {totalItems > 0 && (
        <button className="view-order" onClick={() => setShowOrder(true)}>
          VIEW ORDER
        </button>
      )}

      {showOrder && (
        <div className="order-modal">
          <h2>Your Order</h2>
          <ul>
            {Object.entries(cart).map(([id, qty]) => {
              const product = products.find(p => p.id === parseInt(id));
              return (
                <li key={id}>
                  {product.name} x {qty} = ${(product.price * qty).toFixed(2)}
                </li>
              );
            })}
          </ul>
          <button onClick={() => setShowOrder(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
