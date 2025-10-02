// src/components/Services/Services.jsx

import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossas Soluções</h2>
          <p className="lead-muted">Soluções completas para sua presença e operação digital.</p>
        </div>
        <div className="row">
          {/* Card 1: Sites Institucionais */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-window-desktop" viewBox="0 0 16 16"><path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9ZM12 1H4a1 1 0 0 0-1 1v8h10V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z"/><path d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/></svg>
                </div>
                <h3 className="card-title h4">Sites Institucionais</h3>
                <p className="card-text">Criamos a identidade digital da sua empresa com sites profissionais, responsivos e otimizados para o Google, garantindo a melhor primeira impressão.</p>
              </div>
            </div>
          </div>
          {/* Card 2: Landing Pages */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bullseye" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
                </div>
                <h3 className="card-title h4">Landing Pages de Alta Conversão</h3>
                <p className="card-text">Desenvolvemos páginas focadas em um único objetivo: transformar visitantes em clientes e maximizar o retorno sobre seu investimento em marketing.</p>
              </div>
            </div>
          </div>
          {/* Card 3: Sistemas de Agendamento */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
                </div>
                <h3 className="card-title h4">Sistemas de Agendamento</h3>
                <p className="card-text">Automatize seus processos com sistemas de agendamento online, facilitando a vida dos seus clientes e otimizando a gestão do seu tempo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;