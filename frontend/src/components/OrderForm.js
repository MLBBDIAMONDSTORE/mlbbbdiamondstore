import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import NicknameInput from './NicknameInput';

const OrderForm = () => {
  const { selectedProducts } = useContext(OrderContext);
  const [mlbbId, setMlbbId] = useState('');
  const [zone, setZone] = useState('');

  return (
    <div className="order-form">
      <NicknameInput />
      <input
        type="text"
        placeholder="MLBB ID"
        value={mlbbId}
        onChange={(e) => setMlbbId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zone Code"
        value={zone}
        onChange={(e) => setZone(e.target.value)}
      />
    </div>
  );
};

export default OrderForm;