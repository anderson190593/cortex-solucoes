// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Importa o nosso CSS customizado
import CortexLogo from '../../assets/logos/logo-cortex-Photoroom.png';

// --- NOSSOS NOVOS ÍCONES SVG ---
// Ícone do Sol (para o modo escuro)
const IconSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" // <-- Pega a cor do CSS
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" // <-- Pega a cor do CSS
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);


const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
      <div className="container">
        {/* 1. Logo à Esquerda */}
        <a className="navbar-brand" href="#">
          <img src={CortexLogo} alt="Cortex Soluções Logo" className="navbar-logo" />
        </a>

        {/* 2. Botão Sanduíche (para mobile) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. Links Centrais e Ações à Direita */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links no Centro (usando mx-auto) */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#solucoes">Soluções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfólio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">Sobre</a>
            </li>
          </ul>

          {/* 4. Ações à Direita (botão e seletor de tema) */}
          <div className="d-flex align-items-center navbar-actions">
            <a 
              href="https://wa.me/5537996641413" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-primary me-3"
            >
              Entrar em Contato
            </a>
            
            <a href="#solucoes" className="btn btn-primary">
              Nossos Serviços
            </a>
            
            {/* === MUDANÇA AQUI === */}
            {/* Trocamos os emojis pelos componentes de ícone */}
            <button className="btn theme-toggler ms-3" onClick={toggleTheme}>
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>
            {/* === FIM DA MUDANÇA === */}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;