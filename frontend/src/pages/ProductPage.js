import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { OrderContext } from '../context/OrderContext';
import { getProducts } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const products = getProducts();
  const { addToCart } = useContext(OrderContext);
  const navigate = useNavigate();

  return (
    <div className="page product-page">
      <h2>Diamondlar</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
      <button className="next-btn" onClick={() => navigate('/verify')}>
        View Order
      </button>
    </div>
  );
}