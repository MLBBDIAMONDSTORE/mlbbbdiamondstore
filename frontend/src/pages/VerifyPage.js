// src/pages/VerifyPage.js
import React, { useState, useContext } from 'react';
import { verifyMLBB } from '../utils/api';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export default function VerifyPage() {
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [error, setError] = useState('');
  const { setNickname } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const data = await verifyMLBB(gameId, zoneId);
      setNickname(data.nickname);
      navigate('/order');
    } catch (e) {
      setError('ID yoki Zone noto‘g‘ri');
    }
  };

  return (
    <div className="page-container">
      <h1>Enter your MLBB ID</h1>
      <input
        placeholder="Game ID"
        value={gameId}
        onChange={e => setGameId(e.target.value)}
      />
      <input
        placeholder="Zone ID"
        value={zoneId}
        onChange={e => setZoneId(e.target.value)}
      />
      <button onClick={handleVerify}>Continue</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}