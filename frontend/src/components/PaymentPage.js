import React, { useState } from 'react';
import '../styles/PaymentPage.css';

const PaymentPage = ({ selectedItems, onSubmit }) => {
  const [gameId, setGameId] = useState('');
  const [zone, setZone] = useState('');
  const [nickname, setNickname] = useState('');
  const [cardType, setCardType] = useState('uzcard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMode, setCardMode] = useState('standard');

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleCheck = () => {
    if (gameId && zone) {
      // MOCK nickname fetch
      setNickname(`Player_${gameId.slice(-3)}${zone}`);
    }
  };

  const handlePay = () => {
    const orderData = {
      gameId,
      zone,
      nickname,
      cardType,
      cardMode,
      cardNumber,
      products: selectedItems,
      total,
    };
    onSubmit(orderData);
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <div className="form">
        <input
          type="text"
          placeholder="MLBB ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zone"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        />
        <button className="check-btn" onClick={handleCheck}>CHECK</button>

        {nickname && <div className="nickname">Nickname: {nickname}</div>}

        <div className="payment-type">
          <label>
            <input
              type="radio"
              value="uzcard"
              checked={cardType === 'uzcard'}
              onChange={(e) => setCardType(e.target.value)}
            />
            Uzcard
          </label>
          <label>
            <input
              type="radio"
              value="humo"
              checked={cardType === 'humo'}
              onChange={(e) => setCardType(e.target.value)}
            />
            Humo
          </label>
        </div>

        <div className="card-mode">
          <label>
            <input
              type="radio"
              value="standard"
              checked={cardMode === 'standard'}
              onChange={(e) => setCardMode(e.target.value)}
            />
            Oddiy
          </label>
          <label>
            <input
              type="radio"
              value="transit"
              checked={cardMode === 'transit'}
              onChange={(e) => setCardMode(e.target.value)}
            />
            Tranzit
          </label>
        </div>

        <input
          type="text"
          placeholder="Karta raqami"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <div className="total">Total: ${total}</div>
        <button className="pay-btn" onClick={handlePay}>PAY</button>
      </div>
    </div>
  );
};

export default PaymentPage;
