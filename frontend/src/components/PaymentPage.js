import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/PaymentPage.css';

const PaymentPage = () => {
  const { orderItems } = useContext(OrderContext);
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [nickname, setNickname] = useState('');
  const [paymentType, setPaymentType] = useState('HUMO');
  const [cardNumber, setCardNumber] = useState('');

  const handleCheck = () => {
    if (gameId && zoneId) {
      setNickname(`nickname_${gameId}`);
    }
  };

  const handlePayment = () => {
    if (!nickname) {
      alert("Please check nickname first!");
      return;
    }
    if (!cardNumber) {
      alert("Enter card number!");
      return;
    }

    const orderData = {
      gameId,
      zoneId,
      nickname,
      paymentType,
      cardNumber,
      products: orderItems,
    };

    console.log('Sending payment:', orderData);
    alert("Payment sent! (Check console)");
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>

      <div className="input-group">
        <label>Game ID:</label>
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Zone ID:</label>
        <input
          type="text"
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
        />
      </div>

      <button className="check-button" onClick={handleCheck}>
        CHECK
      </button>

      {nickname && (
        <div className="nickname-display">
          Nickname: <strong>{nickname}</strong>
        </div>
      )}

      <div className="input-group">
        <label>Payment Type:</label>
        <div className="payment-types">
          <button className={paymentType === 'HUMO' ? 'active' : ''} onClick={() => setPaymentType('HUMO')}>HUMO</button>
          <button className={paymentType === 'UZCARD' ? 'active' : ''} onClick={() => setPaymentType('UZCARD')}>UZCARD</button>
        </div>
      </div>

      <div className="input-group">
        <label>Card Number:</label>
        <input
          type="text"
          placeholder="8600 xxxx xxxx xxxx"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>

      <button className="pay-button" onClick={handlePayment}>
        PAY
      </button>
    </div>
  );
};

export default PaymentPage;