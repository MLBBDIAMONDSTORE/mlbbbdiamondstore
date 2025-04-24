import React from 'react';

const OrderSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="view-order-button">
      VIEW ORDER (${total.toFixed(2)})
    </div>
  );
};

export default OrderSummary;
