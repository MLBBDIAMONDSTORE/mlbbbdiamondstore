import React, { useState, useContext } from 'react';
import { validateMLBB } from '../utils/api';
import { OrderContext } from '../context/OrderContext';
import '../styles/main.css';

export default function VerifyPage() {
  const { setUser } = useContext(OrderContext);
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!gameId || !zoneId) {
      setError('Iltimos, ID va ZONE ni to‘ldiring');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const nickname = await validateMLBB(gameId, zoneId);
      setUser({ gameId, zoneId, nickname });
    } catch (err) {
      setError('ID yoki ZONE xato!');
    }
    setLoading(false);
  };

  return (
    <div className="page verify-page">
      <h1 className="page-title">MLBB ID Tekshiruvi</h1>
      <div className="verify-form">
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
        <button onClick={handleVerify} disabled={loading}>
          {loading ? 'Tekshirilmoqda...' : 'Tekshirish'}
        </button>
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
}