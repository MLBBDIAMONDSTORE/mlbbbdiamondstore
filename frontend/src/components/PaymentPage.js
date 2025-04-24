import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import './PaymentPage.css';

const PaymentPage = () => {
  const { orderItems } = useContext(OrderContext);
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [nickname, setNickname] = useState('');
  const [paymentType, setPaymentType] = useState('HUMO');
  const [cardNumber, setCardNumber] = useState('');
  const [nicknameFetched, setNicknameFetched] = useState(false);

  const handleCheck = () => {
    if (gameId && zoneId) {
      // TEST uchun nickname yaratamiz
      setNickname(`nickname_${gameId}`);
      setNicknameFetched(true);
    }
  };

  const handlePayment = () => {
    if (!nicknameFetched) {
      alert("Iltimos avval nickname tekshiring.");
      return;
    }

    if (!cardNumber) {
      alert("Karta raqamini kiriting.");
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

    console.log('To‘lov yuborilmoqda:', orderData);
    // BACKENDga yuborish uchun fetch() yoki axios() yoziladi bu yerda
  };

  return (
    <div className="payment-page">
      <h2>To‘lov sahifasi</h2>

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
        <label>To‘lov turi:</label>
        <div className="payment-types">
          <button
            className={paymentType === 'HUMO' ? 'active' : ''}
            onClick={() => setPaymentType('HUMO')}
          >
            HUMO
          </button>
          <button
            className={paymentType === 'UZCARD' ? 'active' : ''}
            onClick={() => setPaymentType('UZCARD')}
          >
            UZCARD
          </button>
        </div>
      </div>

      <div className="input-group">
        <label>Karta raqami:</label>
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
