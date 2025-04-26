import React from 'react';
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { user } = useOrder();
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>MLBB Diamond Store</h1>
      <div className="nickname">{user?.nickname || ''}</div>
    </header>
  );
}
