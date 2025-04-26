import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/logo.png';
import '../styles/main.css';

export default function Header() {
  const { nickname } = useContext(OrderContext);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="MLBB Logo" className="logo" />
        <span className="site-title">MLBB Diamond Store</span>
      </div>
      <div className="header-right">
        {nickname && <span className="nickname">{nickname}</span>}
        <LanguageSelector />
      </div>
    </header>
  );
}