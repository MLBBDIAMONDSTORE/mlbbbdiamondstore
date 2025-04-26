import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/main.css';

export default function OrderSummary() {
  const { cart } = useContext(OrderContext);

  return (
    <div className="order-summary">
      <h3>Buyurtma:</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}