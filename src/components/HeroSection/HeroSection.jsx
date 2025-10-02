// src/components/HeroSection/HeroSection.jsx

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Tecnologia que Impulsiona o seu Negócio.</h1>
        <p className="lead my-4">
          Criamos sites institucionais, landing pages de alta conversão e sistemas de agendamento sob medida que geram resultados reais para sua empresa.
        </p>
        <a href="#contato" className="btn btn-primary btn-lg">Fale com um Especialista</a>
      </div>
    </section>
  );
};

export default HeroSection;