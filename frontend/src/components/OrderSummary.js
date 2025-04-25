import React from 'react';
import { useOrder } from '../context/OrderContext';
import { useTranslation } from 'react-i18next';

const OrderSummary = () => {
  const { products } = useOrder();
  const { t } = useTranslation();

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="order-summary">
      <h2>{t('order_summary')}</h2>
      {products.map((product, index) => (
        <div key={index} className="summary-item">
          {product.name} - {product.price} UZS
        </div>
      ))}
      <div className="summary-total">
        {t('total')}: {total} UZS
      </div>
    </div>
  );
};

export default OrderSummary;