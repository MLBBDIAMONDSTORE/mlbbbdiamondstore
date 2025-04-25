import React from 'react';
import LanguageSelector from './LanguageSelector';
import { useOrder } from '../context/OrderContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { nickname } = useOrder();

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-name">MLBB Diamond Store</h1>
      </div>
      <div className="header-right">
        {nickname && <div className="nickname">{nickname}</div>}
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;