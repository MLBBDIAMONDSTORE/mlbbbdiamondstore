import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function OrderViewPage() {
  const { cart } = useContext(OrderContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="order-view-page">
      <h2>{t('yourOrder')}</h2>
      <div className="order-list">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <span>💎</span>
            <span>
              {item.name} x{item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="order-total">
        {t('total')}: ${total.toFixed(2)}
      </div>
      <div className="order-actions">
        <button onClick={() => navigate('/pay')}>{t('pay')}</button>
        <button onClick={() => navigate('/products')}>{t('cancel')}</button>
      </div>
    </div>
  );
}