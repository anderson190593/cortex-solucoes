// src/components/CTA/CTA.jsx

import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contato" className="cta-section">
      <div className="container text-center">
        <h2 className="cta-title">
          Pronto para levar seu negócio ao próximo nível?
        </h2>
        <p className="cta-subtitle">
          Vamos conversar sobre sua ideia. Agende uma consultoria gratuita 
          de 30 minutos.
        </p>
        <a href="#contato" className="btn btn-primary btn-lg mt-3">
          Vamos construir algo incrível juntos
        </a>
      </div>
    </section>
  );
};

export default CTA;