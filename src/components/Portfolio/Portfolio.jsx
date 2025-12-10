// src/components/Portfolio/Portfolio.jsx

import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-lg-5">
            <div className="portfolio-tag">✦ Case de Sucesso</div>
            <h2 className="portfolio-title">
              De um Linktree básico a uma{" "}
              <span style={{ color: "var(--primary)" }}>
                Máquina de Conversão
              </span>
              .
            </h2>
            <p className="portfolio-subtitle">
              O projeto <strong>Psi Sem Tabu</strong> precisava transmitir
              acolhimento e profissionalismo. Criamos uma experiência imersiva
              com React e Framer Motion que aumentou a percepção de valor da
              profissional instantaneamente.
            </p>
            <ul className="portfolio-checks">
              <li>
                <span>✓</span> Design Responsivo e Animações Fluidas
              </li>
              <li>
                <span>✓</span> Otimização SEO para Divinópolis/MG
              </li>
              <li>
                <span>✓</span> Integração Direta com WhatsApp
              </li>
            </ul>
            <a
              href="https://psi-sem-tabu.vercel.app/"
              target="_blank"
              className="btn btn-primary mt-3"
            >
              Ver Projeto Online
            </a>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="portfolio-visual">
              {/* Aqui vai o print real do site dela */}
              <img
                src="./case-psi.png"
                alt="Case Psi Sem Tabu"
                className="img-fluid rounded"
                style={{ border: "2px solid var(--border-active)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
