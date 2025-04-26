import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { verifyNickname } from '../utils/api';

export default function VerifyPage() {
  const { setGameId, setZoneId, setNickname } = useContext(OrderContext);
  const [id, setId] = useState('');
  const [zone, setZone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCheck = async () => {
    setLoading(true);
    setError('');
    try {
      const name = await verifyNickname(id, zone);
      setGameId(id);
      setZoneId(zone);
      setNickname(name);
      navigate('/order');
    } catch (err) {
      setError('ID yoki zona noto‘g‘ri.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Hisobni tekshirish</h1>
      <input
        type="text"
        placeholder="Game ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="red-border-input"
      />
      <input
        type="text"
        placeholder="Zone ID"
        value={zone}
        onChange={(e) => setZone(e.target.value)}
        className="red-border-input"
      />
      <button className="red-border-btn" onClick={handleCheck} disabled={loading}>
        {loading ? 'Tekshirilmoqda...' : 'Tekshirish'}
      </button>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}