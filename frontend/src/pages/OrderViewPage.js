import React from 'react';
import Header from '../components/Header';
import OrderSummary from '../components/OrderSummary';
import OrderForm from '../components/OrderForm';

const OrderViewPage = () => (
  <div>
    <Header />
    <OrderSummary />
    <OrderForm />
  </div>
);

export default OrderViewPage;