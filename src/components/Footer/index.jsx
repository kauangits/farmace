import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">

        {/* Coluna 1 - Logo e texto */}
        <div className="footer__section">
          <img
            className="footer__logo"
            src="/logo.png"
            alt="Logo da Farmácia"
          />
          <p className="footer__text">
            Cuidamos da sua saúde com os melhores produtos e atendimento personalizado.
          </p>
        </div>

        {/* Coluna 3 - Redes Sociais */}
        <div className="footer__section">
          <h4 className="footer__title">Nos siga</h4>
          <div className="footer__social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/icons8-instagram.svg" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/icons8-facebook.svg" alt="Facebook" />
            </a>
            <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="/icons8-whatsapp.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Farmácia Exemplo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
