import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { validateMLBB } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function VerifyPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setGameId, setZoneId, setNickname } = useContext(OrderContext);
  const [gameId, setLocalGameId] = useState('');
  const [zoneId, setLocalZoneId] = useState('');
  const navigate = useNavigate();

  const handleCheck = async () => {
    try {
      setLoading(true);
      setError('');
      const name = await validateMLBB(gameId, zoneId);
      setNickname(name);
      setGameId(gameId);
      setZoneId(zoneId);
      navigate('/order');
    } catch {
      setError('Noto‘g‘ri ID yoki Zone');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page verify-page">
      <h2>Tekshirish</h2>
      <input
        type="text"
        placeholder="Game ID"
        value={gameId}
        onChange={(e) => setLocalGameId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zone ID"
        value={zoneId}
        onChange={(e) => setLocalZoneId(e.target.value)}
      />
      <button onClick={handleCheck} disabled={loading}>
        {loading ? 'Tekshirilmoqda...' : 'Tekshir'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}