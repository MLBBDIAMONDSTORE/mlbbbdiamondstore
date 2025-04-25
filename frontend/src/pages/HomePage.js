import React from 'react';
import Header from '../components/Header';
import NicknameInput from '../components/NicknameInput';
import ProductList from '../components/ProductList';
import OrderSummary from '../components/OrderSummary';
import OrderForm from '../components/OrderForm';
import { useOrder } from '../context/OrderContext';

const HomePage = () => {
  const { nickname } = useOrder();

  return (
    <div className="home-page">
      <Header />
      {!nickname ? (
        <NicknameInput />
      ) : (
        <>
          <ProductList />
          <OrderSummary />
          <OrderForm />
        </>
      )}
    </div>
  );
};

export default HomePage;