import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import LanguageSelector from './LanguageSelector';


export default function Header() {
  const { user } = useContext(OrderContext);
  return (
    <header className="header">
      <h1>MLBB Diamond Store</h1>
      <div className="header-right">
        {user && <span className="nickname">{user.nickname}</span>}
        <LanguageSelector />
      </div>
    </header>
  );
}