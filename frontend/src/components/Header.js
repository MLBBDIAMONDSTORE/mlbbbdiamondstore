import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/logo.png';

export default function Header() {
  const { nickname } = useContext(OrderContext);

  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-title">MLBB Diamond Store</span>
      </div>
      <div className="right">
        {nickname && <span className="nickname">{nickname}</span>}
        <LanguageSelector />
      </div>
    </header>
  );
}