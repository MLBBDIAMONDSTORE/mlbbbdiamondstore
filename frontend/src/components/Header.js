import React, { useContext } from 'react';
import LanguageSelector from './LanguageSelector';
import { OrderContext } from '../context/OrderContext';
import '../styles/main.css';

export default function Header() {
  const { nickname } = useContext(OrderContext);

  return (
    <header className="header">
      <div className="logo">MLBB Diamond Store</div>
      <div className="nickname">{nickname}</div>
      <LanguageSelector />
    </header>
  );
}