import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PayPage() {
  const { cart, clearCart, user } = useContext(OrderContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handlePay = () => {
    // real to‘lov integratsiyasi shu yerda
    clearCart();
    alert(t('paymentThanks', { name: user.nickname }));
    navigate('/');
  };

  return (
    <div className="pay-page">
      <h2>{t('pay')}</h2>
      <p>
        {t('total')}: ${total.toFixed(2)}
      </p>
      <button onClick={handlePay}>{t('pay')}</button>
      <button onClick={() => navigate('/order')}>{t('cancel')}</button>
    </div>
  );
}