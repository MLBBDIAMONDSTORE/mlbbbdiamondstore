import React, { useEffect, useState } from 'react';
import '../styles/OrderStatus.css';

const OrderStatus = ({ orderId }) => {
  const [status, setStatus] = useState('Pending');
  const [refundCard, setRefundCard] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // MOCK: backenddan statusni olib kelish (realtime uchun WebSocket ishlatiladi backendda)
    const interval = setInterval(() => {
      // Hozircha random status
      const statuses = ['Pending', 'Approved', 'Rejected', 'Refunded'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setStatus(randomStatus);
    }, 5000);
    return () => clearInterval(interval);
  }, [orderId]);

  const handleRefundSubmit = () => {
    // TODO: backendga refund card yuborish
    console.log('Karta yuborildi:', refundCard);
    setSubmitted(true);
  };

  return (
    <div className="order-status-page">
      <h2>Buyurtma holati</h2>
      <div className={`status-box ${status.toLowerCase()}`}>
        {status === 'Pending' && 'Buyurtma qabul qilindi. Tasdiqlanishi kutilmoqda.'}
        {status === 'Approved' && 'Buyurtma tasdiqlandi. Mahsulotingiz tez orada yetkaziladi.'}
        {status === 'Rejected' && 'Buyurtma bekor qilindi. Pulni qaytarib olish uchun karta raqamingizni yuboring.'}
        {status === 'Refunded' && 'Pul qaytarildi. Bosh sahifaga qayting.'}
      </div>

      {status === 'Rejected' && !submitted && (
        <div className="refund-form">
          <input
            type="text"
            placeholder="Karta raqamingiz"
            value={refundCard}
            onChange={(e) => setRefundCard(e.target.value)}
          />
          <button onClick={handleRefundSubmit}>Yuborish</button>
        </div>
      )}

      {status === 'Rejected' && submitted && (
        <div className="thank-you-msg">Karta raqamingiz qabul qilindi. Pul tez orada qaytariladi.</div>
      )}
    </div>
  );
};

export default OrderStatus;
