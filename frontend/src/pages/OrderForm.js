import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderForm.css';

function OrderForm() {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (gameId.trim() && zoneId.trim()) {
      setLoading(true);

      // Codashop style tekshiruv
      setTimeout(() => {
        if (gameId === '715242574') {
          setLoading(false);
          navigate('/orderview');
        } else {
          setLoading(false);
          alert('❌ Kiritilgan Game ID yoki Zone ID noto‘g‘ri! Iltimos tekshirib, qayta urinib ko‘ring.');
        }
      }, 2000); // 2 soniya loading
    } else {
      alert('Iltimos, Game ID va Zone ID ni to‘liq kiriting.');
    }
  };

  return (
    <div className="order-form-container">
      <h2>Enter your MLBB ID</h2>
      <input
        type="text"
        placeholder="Game ID"
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Zone ID"
        value={zoneId}
        onChange={(e) => setZoneId(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleContinue} disabled={loading}>
        {loading ? (
          <div className="spinner"></div> // Loading animatsiya
        ) : (
          'Continue'
        )}
      </button>
    </div>
  );
}

export default OrderForm;