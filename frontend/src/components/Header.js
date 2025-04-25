import React, { useContext } from 'react';
import LanguageSelector from './LanguageSelector';
import { OrderContext } from '../context/OrderContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { nickname } = useContext(OrderContext);

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header-info">
        <span className="nickname">{nickname}</span>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;