import React, { useState } from 'react';
import '../styles/OrderForm.css';

const OrderForm = ({ items, onSubmit }) => {
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ items, gameId, zoneId });
  };

  return (
    <div className="order-form">
      <h2>Enter MLBB ID and Zone</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Zone ID"
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          required
        />
        <button type="submit">CHECK</button>
      </form>
    </div>
  );
};

export default OrderForm;
