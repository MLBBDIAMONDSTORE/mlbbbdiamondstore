import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const OrderSummary = () => {
  const { selectedProducts, nickname } = useContext(OrderContext);
  const total = selectedProducts.reduce((sum, p) => sum + p.price, 0).toFixed(2);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {selectedProducts.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total:</strong> ${total}
      </div>
      {nickname && <button className="pay-btn">PAY</button>}
    </div>
  );
};

export default OrderSummary;