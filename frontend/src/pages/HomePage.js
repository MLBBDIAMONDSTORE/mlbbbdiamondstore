import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import OrderForm from '../components/OrderForm';
import OrderSummary from '../components/OrderSummary';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <ProductList />
      <OrderForm />
      <OrderSummary />
    </div>
  );
};

export default HomePage;