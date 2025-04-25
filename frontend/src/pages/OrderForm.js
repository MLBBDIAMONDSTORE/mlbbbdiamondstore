import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import './styles/OrderForm.css';

const OrderForm = () => {
  const { setOrder } = useContext(OrderContext);
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ gameId, zoneId });
  };

  return (
    <div className="order-form-container">
      <h2>Enter your MLBB ID</h2>
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
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default OrderForm;