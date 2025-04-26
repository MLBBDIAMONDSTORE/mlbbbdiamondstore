import React, { useContext } from 'react';
import { CartContext } from '../context/OrderContext';
import LanguageSelector from './LanguageSelector';
import '../styles/main.css';
import logo from '../assets/logo.png';

const Header = () => {
  const { nickname } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-title">MLBB Diamond Store</h1>
      </div>
      <div className="header-right">
        {nickname && <span className="nickname">{nickname}</span>}
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;