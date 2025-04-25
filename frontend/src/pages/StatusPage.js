import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const StatusPage = () => {
  const { order } = useContext(OrderContext);

  if (!order) return <p>No order found.</p>;

  return (
    <div>
      <h2>Order Status</h2>
      <p>Your order is currently: {order.status}</p>
    </div>
  );
};

export default StatusPage;