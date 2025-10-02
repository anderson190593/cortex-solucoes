// src/components/Navbar/Navbar.jsx

import React from 'react';
import './Navbar.css'; // Importa o CSS específico para este componente

// O componente recebe 'theme' e 'toggleTheme' como "props" (propriedades)
// vindas do componente principal (App.jsx)
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">anderson.dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#servicos">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfólio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>
          {/* Botão de troca de tema */}
          <button className="btn theme-toggler ms-lg-3" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;