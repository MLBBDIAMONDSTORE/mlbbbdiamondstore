import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import './styles/OrderSummary.css';

const OrderSummary = () => {
  const { order, selectedProduct } = useContext(OrderContext);

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <p><strong>Game ID:</strong> {order?.gameId}</p>
      <p><strong>Zone ID:</strong> {order?.zoneId}</p>
      <p><strong>Selected Product:</strong> {selectedProduct?.title}</p>
      <p><strong>Price:</strong> ${selectedProduct?.price}</p>
    </div>
  );
};

export default OrderSummary;