// src/components/Features/Features.jsx

import React from 'react';
import './Features.css';

// Ícones (SVGs) - Coloquei eles aqui para simplificar
const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Features = () => {
  return (
    <section id="solucoes" className="features-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da Esquerda: Texto */}
          <div className="col-lg-5">
            <h2 className="features-title">
              Você foca no seu negócio. Nós cuidamos da tecnologia.
            </h2>
            <p className="features-subtitle">
              Construímos experiências digitais que resolvem problemas reais. Da ideia ao lançamento, garantimos que sua visão se torne uma realidade funcional e otimizada.
            </p>
            <a href="#contato" className="btn btn-primary btn-lg mt-3">
              Iniciar um Projeto
            </a>
          </div>
          
          {/* Coluna da Direita: Lista de Features */}
          <div className="col-lg-6 offset-lg-1">
            <ul className="features-list">
              {/* Feature 1 */}
              <li className="feature-item">
                <div className="feature-icon-wrapper">
                  <DesignIcon />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Design Sob Medida</h4>
                  <p className="feature-description">
                    Interfaces UI/UX desenhadas para engajar seus usuários e refletir a identidade única da sua marca.
                  </p>
                </div>
              </li>
              {/* Feature 2 */}
              <li className="feature-item">
                <div className="feature-icon-wrapper">
                  <CodeIcon />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Código Otimizado</h4>
                  <p className="feature-description">
                    Desenvolvimento limpo, rápido e otimizado para SEO, garantindo a melhor performance no Google.
                  </p>
                </div>
              </li>
              {/* Feature 3 */}
              <li className="feature-item">
                <div className="feature-icon-wrapper">
                  <SupportIcon />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Suporte Contínuo</h4>
                  <p className="feature-description">
                    Estamos ao seu lado após o lançamento, garantindo que seu sistema esteja sempre atualizado e seguro.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;