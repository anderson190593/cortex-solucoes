// src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';
import SynapLogo from '../../assets/logos/synap-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Links Principais */}
        <div className="row footer-top">
          <div className="col-lg-4">
            {/* 2. USAR A IMAGEM DA LOGO AQUI */}
            <a className="footer-brand" href="#">
              <img src={SynapLogo} alt="Synap Technology Logo" className="footer-logo" />
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
            {/* 3. ATUALIZAR NOME DA EMPRESA */}
            &copy; {currentYear} Synap Technology. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;