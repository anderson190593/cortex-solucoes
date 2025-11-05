// src/components/AboutSection/AboutSection.jsx

import React from 'react';
import './AboutSection.css';

// --- ATUALIZE O CAMINHO DA SUA FOTO AQUI ---
// Ex: import SuaFoto from '../../assets/sua-foto.png';
import SuaFoto from 'https://via.placeholder.com/500x500.png?text=Foto+Anderson';

const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da Esquerda: Imagem */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img 
                // --- E ATUALIZE AQUI ---
                src={SuaFoto} 
                alt="Anderson - Fundador da Cortex Soluções" 
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Coluna da Direita: Texto */}
          <div className="col-lg-5 offset-lg-1">
            <h2 className="about-title">
              Nossa Missão: Tecnologia com Propósito
            </h2>
            <p className="about-subtitle">
              A Cortex Soluções nasceu para ser mais do que uma agência. 
              Queremos ser o seu parceiro estratégico de tecnologia.
            </p>
            <p className="about-text">
              Fundada por Anderson, nossa missão é traduzir suas metas de negócio 
              em soluções digitais que funcionam. Não se trata apenas de 
              escrever código; trata-se de construir o caminho mais eficiente 
              para o seu sucesso.
            </p>
            <p className="about-text">
              Acreditamos na transparência total, no código de alta qualidade 
              e em relacionamentos de longo prazo. Quando você cresce, 
              nós crescemos juntos.
            </p>
            {/* Opcional: Adicionar um link para o LinkedIn */}
            {/* <a href="SEU_LINKEDIN_AQUI" className="btn btn-outline-primary mt-3" target="_blank" rel="noopener noreferrer">
              Conheça meu LinkedIn
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;