// src/components/Portfolio/Portfolio.jsx

import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da Esquerda: Texto */}
          <div className="col-lg-5">
            <div className="portfolio-tag">✦ Case de Sucesso</div>
            <h2 className="portfolio-title">
              Website Corporativo e Sistema de Leads
            </h2>
            <p className="portfolio-subtitle">
              Para o "Cliente X", desenvolvemos um novo portal corporativo focado 
              em performance e UI/UX, resultando em um aumento de 40% na geração 
              de leads qualificados.
            </p>
            <ul className="portfolio-checks">
              <li><span>✓</span> Design UI/UX moderno e responsivo</li>
              <li><span>✓</span> Otimização SEO para ranking no Google</li>
              <li><span>✓</span> Integração com CRM para gestão de leads</li>
            </ul>
            <a href="#contato" className="btn btn-outline-primary mt-3">
              Ver todos os projetos
            </a>
          </div>

          {/* Coluna da Direita: Imagem/Visual */}
          <div className="col-lg-6 offset-lg-1">
            {/* Placeholder para o "case" */}
            <div className="portfolio-visual">
              <img 
                src="https://via.placeholder.com/500x450.png?text=Mockup+do+Projeto+Cliente+X" 
                alt="Projeto Cliente X" 
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;