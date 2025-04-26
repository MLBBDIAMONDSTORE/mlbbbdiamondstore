import React from 'react';
import { useOrder } from '../context/OrderContext';

export default function PayPage() {
  const { cart, user } = useOrder();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="page">
      <h2>Payment</h2>
      <p>MLBB ID: {user.gameId} ({user.zoneId})</p>
      <p>Nickname: {user.nickname}</p>
      <p>Diamonds: {cart.length}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <button>Proceed to Payment</button>
    </div>
  );
}