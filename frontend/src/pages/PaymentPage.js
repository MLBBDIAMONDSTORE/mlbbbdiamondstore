import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate('/status');
    }, 1000);
  };

  if (!order) return <p>No order found.</p>;

  return (
    <div>
      <h2>Payment</h2>
      <p>Pay {order.amount} UZS for Order ID: {order._id}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;