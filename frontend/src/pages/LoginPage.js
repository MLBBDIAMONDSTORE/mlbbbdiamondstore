import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { validateMLBB } from '../utils/api';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nickname = await validateMLBB(gameId, zoneId);
      setUser({ gameId, zoneId, nickname });
      navigate('/products');
    } catch {
      setError(t('invalidCredentials'));
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>{t('enterMLBB')}</h2>
        <input
          type="text"
          placeholder={t('gameId')}
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder={t('zoneId')}
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          required
        />
        <button type="submit">{t('continue')}</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}