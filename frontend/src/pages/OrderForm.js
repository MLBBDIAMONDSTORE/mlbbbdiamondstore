// src/pages/OrderForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderForm.css';

function OrderForm() {
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (gameId.trim() && zoneId.trim()) {
      navigate('/orderview');
    } else {
      alert('Iltimos, Game ID va Zone ID ni to\'ldiring.');
    }
  };

  return (
    <div className="order-form-container">
      <div className="order-form-box">
        <h2>Enter your MLBB ID</h2>
        <input
          type="text"
          placeholder="Game ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zone ID"
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
        />
        <button onClick={handleContinue}>Continue</button>
      </div>
      <div className="footer-text">© 2025 MLBB Diamond Store</div>
    </div>
  );
}

export default OrderForm;