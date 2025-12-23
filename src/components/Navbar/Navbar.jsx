// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css'; 
import SynapLogo from '../../assets/logos/synap-logo.png';

// Ícone do Sol (para o modo escuro)
const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

// Ícone da Lua (para o modo claro)
const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const Navbar = ({ theme, toggleTheme }) => {
  // Estado para controlar o menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu ao clicar num link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
      <div className="container">
        {/* 1. Logo */}
        <a className="navbar-brand" href="#" onClick={closeMenu}>
          <img src={SynapLogo} alt="Synap Technology Logo" className="navbar-logo" />
        </a>

        {/* 2. Botão Sanduíche (Controlado pelo React agora) */}
        <button 
          className={`navbar-toggler ${!isOpen ? 'collapsed' : ''}`} 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {/* Criamos nosso próprio ícone de hambúrguer com CSS para controle total da cor */}
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        {/* 3. Conteúdo do Menu (Links + Ações) */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#solucoes" onClick={closeMenu}>Soluções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={closeMenu}>Portfólio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre" onClick={closeMenu}>Sobre</a>
            </li>
          </ul>

          {/* 4. Ações à Direita */}
          <div className="d-flex align-items-center navbar-actions">
            <a 
              href="https://wa.me/5537996641413" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-primary me-3"
              onClick={closeMenu}
            >
              Entrar em Contato
            </a>
            
            <a href="#solucoes" className="btn btn-primary" onClick={closeMenu}>
              Nossos Serviços
            </a>
            
            {/* Botão de Tema */}
            <button className="btn theme-toggler ms-3" onClick={toggleTheme}>
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;