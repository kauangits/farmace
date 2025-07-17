import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__left">
          <Link to="/">
            <img src="/logo.png" alt="Logo da Farmácia" className="header__logo" />
          </Link>
        </div>

        <button className="header__hamburger" onClick={toggleMenu} aria-label="Abrir menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <ul className={`header__nav-links ${menuAberto ? 'ativo' : ''}`}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/promocoes">Promoções</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/carrinho">Carrinho <span className="cart-icon">🛒</span></Link></li>
          <li><Link to="/login">Login <span className="login-icon">👤</span></Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>

        <div className="header__actions">
          <Link to="/carrinho" className="header__action-btn">🛒</Link>
          <Link to="/login" className="header__action-btn">👤</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;