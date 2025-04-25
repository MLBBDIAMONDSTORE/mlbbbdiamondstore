import React from 'react';
import LanguageSelector from './LanguageSelector';

function Navbar({ nickname }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">MLBB Diamond Store</div>
      <div className="navbar-right">
        <span>{nickname}</span>
        <LanguageSelector />
      </div>
    </nav>
  );
}

export default Navbar;