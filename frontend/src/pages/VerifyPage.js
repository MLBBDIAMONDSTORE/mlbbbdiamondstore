import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateMLBB } from '../utils/api';
import { useOrder } from '../context/OrderContext';

export default function VerifyPage() {
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useOrder();
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const nickname = await validateMLBB(gameId, zoneId);
      setUser({ gameId, zoneId, nickname });
      navigate('/order');
    } catch {
      setError('Invalid ID or Zone');
    }
  };

  return (
    <div className="page">
      <h2>Verify Your MLBB Account</h2>
      <input placeholder="Game ID" value={gameId} onChange={(e) => setGameId(e.target.value)} />
      <input placeholder="Zone ID" value={zoneId} onChange={(e) => setZoneId(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}