// src/components/Portfolio/Portfolio.jsx

import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Clientes que Confiam em Nosso Trabalho</h2>
          <p className="lead-muted">Projetos entregues com qualidade e foco no resultado.</p>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Logos de exemplo - no futuro, trocaremos pelos logos reais */}
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <img src="https://via.placeholder.com/200x100.png?text=Cliente+1" alt="Logo Cliente Exemplo 1" className="client-logo" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <img src="https://via.placeholder.com/200x100.png?text=Cliente+2" alt="Logo Cliente Exemplo 2" className="client-logo" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <img src="https://via.placeholder.com/200x100.png?text=Cliente+3" alt="Logo Cliente Exemplo 3" className="client-logo" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <img src="https://via.placeholder.com/200x100.png?text=Cliente+4" alt="Logo Cliente Exemplo 4" className="client-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;