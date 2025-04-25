import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { useTranslation } from 'react-i18next';

const OrderForm = () => {
  const { products, nickname, clearOrder } = useOrder();
  const { t } = useTranslation();
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (products.length === 0) {
      setMessage(t('no_products'));
      return;
    }
    // TODO: Send order to backend
    setMessage(t('order_success'));
    clearOrder();
  };

  return (
    <div className="order-form">
      <h2>{t('order_summary')}</h2>
      <button onClick={handleOrder}>{t('place_order')}</button>
      {message && <div className="order-message">{message}</div>}
    </div>
  );
};

export default OrderForm;