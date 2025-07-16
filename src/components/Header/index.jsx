import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__left">
          <img src="" alt="Logo" className="header__logo" />
        </div>
        <div className="header__right">
          <ul className="header__nav-links">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/promocoes">Promoções</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link> {/* Se quiser criar depois */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
