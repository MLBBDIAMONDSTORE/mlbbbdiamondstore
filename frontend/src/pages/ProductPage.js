// src/pages/ProductPage.js
import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Choose Your Diamonds</h1>
      <ProductList />
      {/* Faqat buyurtma bo‘lsa ko‘rsatamiz */}
      {order.items.length > 0 && (
        <button
          className="view-order-btn"
          onClick={() => navigate('/verify')}
        >
          VIEW ORDER ({order.items.length})
        </button>
      )}
    </div>
  );
}
