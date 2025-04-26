import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/OrderViewPage.css';

const taglines = {
  Fries: 'Po-ta-toes',
  Hotdog: '0% dog, 100% hot',
  Taco: 'Mucho más',
  Pizza: 'That’s amore',
  Donut: 'Hole included',
  Popcorn: 'Lights, camera, corn',
  Coke: 'Come of shame',
  Icecream: 'Cone of shame',
  Cookie: 'Milk’s favorite',
  Flan: 'Flan-tastic',
};

const OrderViewPage = () => {
  const { cart, getTotalPrice } = useContext(OrderContext);

  return (
    <div className="order-page">
      <h2 className="order-title">YOUR ORDER</h2>
      <div className="order-list">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <div className="order-left">
              <div className="order-emoji">{item.emoji}</div>
              <div>
                <div className="order-name">
                  {item.name} <span className="order-quantity">{item.quantity}x</span>
                </div>
                <div className="order-tagline">{taglines[item.name]}</div>
              </div>
            </div>
            <div className="order-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="pay-button-wrapper">
        <button className="pay-button">PAY ${getTotalPrice().toFixed(2)}</button>
      </div>
    </div>
  );
};

export default OrderViewPage;