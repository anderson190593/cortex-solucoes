// src/components/Portfolio/Portfolio.jsx

import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Coluna da Esquerda: Texto ATUALIZADO */}
          <div className="col-lg-5">
            {/* Tag atualizada */}
            <div className="portfolio-tag">✦ Nossos Projetos de Destaque</div>
            
            {/* Título atualizado */}
            <h2 className="portfolio-title">
              Construindo Soluções Digitais que Geram Resultados Reais
            </h2>
            
            {/* Subtítulo atualizado */}
            <p className="portfolio-subtitle">
              Transformamos ideias complexas em plataformas intuitivas e eficientes. 
              Veja como nossa abordagem estratégica impulsiona o sucesso de cada parceiro.
            </p>
            
            {/* Lista de tópicos atualizada */}
            <ul className="portfolio-checks">
              <li><span>✓</span> Desenvolvimento Ágil e Inovador</li>
              <li><span>✓</span> Foco em Performance e Escalabilidade</li>
              <li><span>✓</span> Parceria Estratégica e Suporte Contínuo</li>
            </ul>
            
            {/* Botão atualizado */}
            <a href="#contato" className="btn btn-outline-primary mt-3">
              Fale Conosco sobre Seu Projeto
            </a>
          </div>

          {/* Coluna da Direita: Imagem (sem alteração) */}
          <div className="col-lg-6 offset-lg-1">
            <div className="portfolio-visual">
              <img 
                src="/portfolio-case-study.png" 
                alt="Mockup de um case de sucesso - Cortex Soluções" 
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