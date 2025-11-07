// src/components/ProjectControl/ProjectControl.jsx

import React from 'react';
import './ProjectControl.css';

const ProjectControl = () => {
  return (
    <section className="control-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da Esquerda: Imagem/Visual */}
          <div className="col-lg-6">
            {/* Placeholder para o 'dashboard' */}
            <div className="dashboard-visual">
              <img 
                src="/dashboard-cortex.png" 
                alt="Dashboard do Projeto" 
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Coluna da Direita: Texto */}
          <div className="col-lg-5 offset-lg-1">
            <h2 className="control-title">
              Acompanhe seu projeto em tempo real.
            </h2>
            <p className="control-subtitle">
              Acreditamos na transparência total. Oferecemos um painel exclusivo 
              onde você pode acompanhar o progresso, validar entregas e 
              se comunicar diretamente com nossa equipe.
            </p>
            {/* Adaptamos os botões da app store para nossos links */}
            <div className="control-buttons">
              <a href="#contato" className="btn btn-primary me-3">
                Agendar Reunião
              </a>
              <a href="#solucoes" className="btn btn-outline-primary">
                Ver Soluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectControl;