import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { OrderContext } from '../contexts/OrderContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { cart } = useContext(OrderContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="product-page">
      <Header />
      <div className="cart-counter">
        🛒 {totalItems}
      </div>
      <ProductList products={products} />
      <button className="view-order-btn" onClick={() => navigate('/order')}>
        {language === 'uz' ? 'Buyurtmani ko‘rish' : language === 'ru' ? 'Просмотр заказа' : 'View Order'}
      </button>
    </div>
  );
};

export default ProductPage;