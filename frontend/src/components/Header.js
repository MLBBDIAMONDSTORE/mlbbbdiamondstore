import React from 'react';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/logo.png';
import '../styles/main.css';

const Header = ({ nickname }) => {
  return (
    <header className="header">
      <div className="logo-name">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-name">MLBB Diamond Store</h1>
      </div>
      <div className="right-side">
        {nickname && <span className="nickname">{nickname}</span>}
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;