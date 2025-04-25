import React, { useState } from 'react';
import Header from '../components/Header';
import { useOrder } from '../context/OrderContext';
import { validateMLBB } from '../utils/api';
import '../styles/main.css';

const PayPage = () => {
  const { mlbbId, setMlbbId, zoneId, setZoneId, setNickname } =
    useOrder();
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheck = async () => {
    setError('');
    const username = await validateMLBB(mlbbId, zoneId);
    if (username) {
      setNickname(username);
      setChecked(true);
    } else {
      setError('ID yoki Zone noto‘g‘ri');
    }
  };

  const handlePay = () => {
    if (!checked) {
      setError('Avval tekshirish tugmasini bosing');
      return;
    }
    alert(`To‘lov amalga oshirildi! Nickname: ${mlbbId}`);
  };

  return (
    <div>
      <Header nickname={mlbbId && `${mlbbId} (${zoneId})`} />
      <div className="payment-page">
        <input
          type="text"
          placeholder="MLBB ID"
          value={mlbbId}
          onChange={(e) => setMlbbId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zone Code"
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
        />
        <button onClick={handleCheck}>CHECK</button>
        {error && <div className="error">{error}</div>}
        {checked && (
          <button className="confirm-pay" onClick={handlePay}>
            CONFIRM & PAY
          </button>
        )}
      </div>
    </div>
);

export default PayPage;