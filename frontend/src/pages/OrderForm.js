import React, { useState, useContext } from 'react';
import { createOrder } from '../api/orders';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const [form, setForm] = useState({ gameId: '', userId: '', amount: 0, paymentMethod: 'card' });
  const { setOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createOrder(form);
    setOrder(res.data);
    navigate('/summary');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="gameId" placeholder="Game ID" onChange={handleChange} required />
      <input name="userId" placeholder="User ID" onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
      <select name="paymentMethod" onChange={handleChange}>
        <option value="card">Card</option>
        <option value="click">Click</option>
      </select>
      <button type="submit">Buy</button>
    </form>
  );
};

export default OrderForm;