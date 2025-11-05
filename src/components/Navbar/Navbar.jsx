// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Importa o nosso CSS customizado

// Recebemos as props para o tema (embora nosso foco seja o dark)
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
      <div className="container">
        {/* 1. Logo à Esquerda */}
        <a className="navbar-brand" href="#">
          anderson.dev
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
          </ul>

          {/* 4. Ações à Direita (botão e seletor de tema) */}
          <div className="d-flex align-items-center navbar-actions">
            {/* O botão "Secure login" da imagem, adaptado para "Contato" */}
            <a href="#contato" className="btn btn-outline-primary me-3">
              Entrar em Contato
            </a>
            {/* O botão "Get Started" da imagem */}
            <a href="#solucoes" className="btn btn-primary">
              Nossos Serviços
            </a>
            
            {/* Manteremos nosso seletor de tema, estilizado */}
            <button className="btn theme-toggler ms-3" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;