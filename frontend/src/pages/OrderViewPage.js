import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

export default function OrderViewPage() {
  const { cart, removeItem, clearCart } = useOrder();
  const navigate = useNavigate();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="page">
      <h2>Your Order</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity}
                <button onClick={() => removeItem(item.id)}>-</button>
              </li>
            ))}
          </ul>
          <div>Total: ${total.toFixed(2)}</div>
          <button onClick={() => navigate('/pay')}>Pay</button>
          <button onClick={clearCart}>Clear</button>
        </>
      )}
    </div>
  );
}