import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const IdForm = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useOrder();

  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!gameId || !zoneId) {
      alert('Please enter both Game ID and Zone ID');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://api.isan.eu.org/nickname/ml?id=${gameId}-${zoneId}`);
      const data = await response.json();

      if (data.nickname) {
        // Agar nickname kelsa, foydalanuvchi ma'lumotlarini saqlaymiz
        setUserInfo({ gameId, zoneId, nickname: data.nickname });
        navigate('/products'); // Mahsulotlar sahifasiga o'tamiz
      } else {
        alert('Invalid MLBB ID or Zone ID. Please check again.');
      }
    } catch (error) {
      console.error('Error verifying ID:', error);
      alert('An error occurred while verifying your ID. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="id-form-container">
      <h2>Enter your MLBB ID</h2>
      <form onSubmit={handleSubmit} className="id-form">
        <input
          type="text"
          placeholder="Game ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          required
        />
        <div className="zone-continue">
          <input
            type="text"
            placeholder="Zone ID"
            value={zoneId}
            onChange={(e) => setZoneId(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Checking...' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdForm;