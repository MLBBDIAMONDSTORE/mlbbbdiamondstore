import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { getProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProductsPage() {
  const products = getProducts();
  const { cart } = useContext(OrderContext);
  const { t } = useTranslation();

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="products-page">
      <h2>{t('chooseYourDiamonds')}</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {totalItems > 0 && (
        <Link to="/order" className="view-order-btn">
          {t('viewOrder')} ({totalItems})
        </Link>
      )}
    </div>
  );
}