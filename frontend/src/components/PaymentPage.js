import React, { useState } from 'react';
import '../../styles/payment.css';

function PaymentPage({ order, onStatus }) {
  const [id, setId] = useState('');
  const [zone, setZone] = useState('');
  const [nickname, setNickname] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const total = order.reduce((sum, p) => sum + p.qty * p.price, 0).toFixed(2);

  const checkNickname = () => {
    // Fake nickname for now
    setNickname('MLBB_Player');
  };

  const submitOrder = () => {
    const info = {
      id,
      zone,
      nickname,
      cardType,
      cardNumber,
      total,
      products: order
    };
    onStatus(info);
  };

  return (
    <div className="payment-container">
      <h2>Enter MLBB Info</h2>
      <input placeholder="Game ID" value={id} onChange={e => setId(e.target.value)} />
      <input placeholder="Zone" value={zone} onChange={e => setZone(e.target.value)} />
      <button className="check-btn" onClick={checkNickname}>CHECK</button>
      {nickname && <p className="nickname">Nickname: {nickname}</p>}

      <h2>Select Payment</h2>
      <select onChange={(e) => setCardType(e.target.value)} defaultValue="">
        <option value="" disabled>Select Card</option>
        <option value="humo">Humo</option>
        <option value="uzcard">Uzcard</option>
      </select>
      <input placeholder="Card Number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />

      <button className="confirm-pay" onClick={submitOrder}>CONFIRM & PAY ${total}</button>
    </div>
  );
}

export default PaymentPage;
