import React from 'react';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();
  const nickname = localStorage.getItem('nickname');

  return (
    <div className="products-container">
      <header className="header">
        <div className="site-name">MLBB Diamond Store</div>
        <div className="header-right">
          <span className="nickname">{nickname}</span>
          <LanguageSelector />
        </div>
      </header>
      <h1>{t('welcome')} {nickname}!</h1>
      {/* Mahsulotlar bu yerga joylanadi */}
    </div>
  );
};

export default ProductsPage;