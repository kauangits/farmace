import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__left">
          <img src="" alt="Logo" className="header__logo"/>
        </div>
        <div className="header__right">
          <ul className="header__nav-links">
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Entrar</Link>
            </li>
            <li>
              <Link to="/">Cadastre-se</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
