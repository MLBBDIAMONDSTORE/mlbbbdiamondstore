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

      // Fake server tekshiruvi (Codashop style)
      setTimeout(() => {
        // Bu yerda haqiqiy tekshiruv qilishga o'xshash kod
        if (gameId === '715242574') {
          setLoading(false);
          navigate('/orderview');
        } else {
          setLoading(false);
          alert('Kiritilgan Game ID yoki Zone ID xato. Iltimos, tekshirib qayta urinib ko‘ring.');
        }
      }, 2000); // 2 sekund loading ko‘rsatadi
    } else {
      alert('Iltimos, Game ID va Zone ID ni to‘ldiring.');
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
      />
      <input
        type="text"
        placeholder="Zone ID"
        value={zoneId}
        onChange={(e) => setZoneId(e.target.value)}
      />
      <button onClick={handleContinue} disabled={loading}>
        {loading ? 'Tekshirilmoqda...' : 'Continue'}
      </button>
    </div>
  );
}

export default OrderForm;