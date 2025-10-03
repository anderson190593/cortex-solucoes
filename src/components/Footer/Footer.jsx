// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted mb-0">
          &copy; {currentYear} anderson.dev - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;