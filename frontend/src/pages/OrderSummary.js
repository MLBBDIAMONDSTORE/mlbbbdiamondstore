import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  if (!order) return <p>No order found.</p>;

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Order ID: {order._id}</p>
      <p>Amount: {order.amount} UZS</p>
      <p>Status: {order.status}</p>
      <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
    </div>
  );
};

export default OrderSummary;