import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyMLBBID } from '../services/codashopApi';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await verifyMLBBID(gameId, zoneId);

    if (response.success) {
      localStorage.setItem('nickname', response.nickname);
      navigate('/products');
    } else {
      setError('Invalid Game ID or Zone ID');
    }
  };

  return (
    <div className="home-container">
      <h2>{t('enterID')}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t('gameID')}
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder={t('zoneID')}
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          required
        />
        <button type="submit">{t('continue')}</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default HomePage;