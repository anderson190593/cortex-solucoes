// src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Links Principais */}
        <div className="row footer-top">
          <div className="col-lg-4">
            <a className="footer-brand" href="#">
              anderson.dev
            </a>
          </div>
          <div className="col-lg-8">
            <ul className="footer-nav">
              <li><a href="#solucoes">Soluções</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
        
        {/* Linha Divisória e Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} anderson.dev. Todos os direitos reservados.
          </p>
          {/* No futuro, podemos adicionar ícones de redes sociais aqui */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;