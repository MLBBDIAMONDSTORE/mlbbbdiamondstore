import React, { useState } from 'react';
import CartView from './components/CartView';
import PaymentPage from './components/PaymentPage';
import OrderStatus from './components/OrderStatus';

function App() {
  const [page, setPage] = useState('cart');
  const [order, setOrder] = useState([]);
  const [orderInfo, setOrderInfo] = useState(null);

  const goToPayment = (cart) => {
    setOrder(cart);
    setPage('payment');
  };

  const showStatus = (info) => {
    setOrderInfo(info);
    setPage('status');
  };

  return (
    <>
      {page === 'cart' && <CartView onNext={goToPayment} />}
      {page === 'payment' && <PaymentPage order={order} onStatus={showStatus} />}
      {page === 'status' && <OrderStatus info={orderInfo} />}
    </>
  );
}

export default App;
