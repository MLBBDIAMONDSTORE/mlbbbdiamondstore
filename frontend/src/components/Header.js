import React from 'react';
import '../styles/Header.css';

const Header = ({ nickname }) => {
  return (
    <header className="header">
      <div className="header-left">MLBB Diamond Store</div>
      <div className="header-right">{nickname}</div>
    </header>
  );
};

export default Header;