import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';

export default function PaymentPage() {
  const { mlbbId, setMlbbId, zone, setZone, setNickname, clearCart } = useOrder();
  const [checked, setChecked] = useState(false);
  const [error, setError]     = useState('');

  const handleCheck = async () => {
    if (!mlbbId || !zone) {
      setError('ID va Zone to‘ldirilishi kerak');
      return;
    }
    setError('');
    try {
      // Postman API talab qilinadigan format bo‘yicha:
      const param = encodeURIComponent(`${mlbbId}(${zone})`);
      const res = await fetch(`https://api.isan.eu.org/nickname/ml?id=${param}`);
      const data = await res.json();
      if (data.username) {
        setNickname(data.username);
        setChecked(true);
      } else {
        setError('ID yoki Zone noto‘g‘ri');
      }
    } catch {
      setError('Server bilan bog‘lanishda xato');
    }
  };

  const handlePay = () => {
    if (!checked) {
      setError('Avvalo tekshirish bosing');
      return;
    }
    // TODO: backendga yuborish
    alert(`To‘lov muvaffaqiyatli! Nick: ${mlbbId}`);
    clearCart();
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <input
        type="text"
        placeholder="MLBB ID"
        value={mlbbId}
        onChange={e => setMlbbId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zone Code"
        value={zone}
        onChange={e => setZone(e.target.value)}
      />
      <button onClick={handleCheck}>CHECK</button>
      {error && <div className="error">{error}</div>}
      {checked && <button onClick={handlePay}>CONFIRM & PAY</button>}
    </div>
  );
}