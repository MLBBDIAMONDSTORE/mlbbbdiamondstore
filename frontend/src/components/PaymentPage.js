// src/components/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [gameID, setGameID] = useState('');
  const [zone, setZone] = useState('');
  const [nickname, setNickname] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [payType, setPayType] = useState('uzcard');

  const handleCheck = () => {
    // Simulyatsiya
    setNickname('MLBB_Gamer_123');
  };

  const handlePay = () => {
    // To‘lovni amalga oshirish va buyurtmani jo‘natish logikasi
    navigate('/status');
  };

  return (
    <div className="container">
      <h2>Payment Info</h2>
      <input placeholder="MLBB ID" value={gameID} onChange={(e) => setGameID(e.target.value)} />
      <input placeholder="Zone" value={zone} onChange={(e) => setZone(e.target.value)} />
      <button onClick={handleCheck}>CHECK</button>
      {nickname && <p className="nickname">Nickname: {nickname}</p>}
      <select value={payType} onChange={(e) => setPayType(e.target.value)}>
        <option value="uzcard">UzCard</option>
        <option value="humo">Humo</option>
      </select>
      <input placeholder="Card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <button className="pay-btn" onClick={handlePay}>CONFIRM PAYMENT</button>
    </div>
  );
};

export default PaymentPage;
