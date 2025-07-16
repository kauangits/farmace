import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <img className="footer__logo" src="/Captura de tela 2025-06-15 194643.png" alt="" />
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
            elit, sed do eiusmod tempor incididunt ut labore et<br/>
            dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="footer__links-wrapper">
            <ul className="footer__links">
              <li><a href="#">Cadastre-se</a></li>
              <li><a href="#">login</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          <p className="footer__social-label">NOS SIGA</p>
          <div className="footer__icon">
            <img className="footer__icon--instagram" src="/icons8-instagram.svg" alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;