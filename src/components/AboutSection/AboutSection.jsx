// src/components/AboutSection/AboutSection.jsx

import React from "react";
import "./AboutSection.css";

// NÃO VAMOS MAIS IMPORTAR A FOTO AQUI. VAMOS USÁ-LA DIRETAMENTE.

const AboutSection = () => {
  // --- COLOQUE O CAMINHO DA SUA FOTO AQUI ---
  // Por enquanto, usaremos o placeholder.
  // Se você salvar sua foto na pasta 'public/', o caminho será "/sua-foto.png"
  const suaFotoUrl = "/foto-anderson.png";

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna da Esquerda: Imagem */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img
                // --- MUDANÇA AQUI ---
                src={suaFotoUrl} // Usamos a variável de URL diretamente
                alt="Anderson - Fundador da Synap Technology"
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
              A Synap Technology nasceu para ser mais do que uma agência.
              Queremos ser o seu parceiro estratégico de tecnologia.
            </p>
            <p className="about-text">
              Fundada por Anderson, nossa missão é traduzir suas metas de
              negócio em soluções digitais que funcionam. Não se trata apenas de
              escrever código; trata-se de construir o caminho mais eficiente
              para o seu sucesso.
            </p>
            <p className="about-text">
              Acreditamos na transparência total, no código de alta qualidade e
              em relacionamentos de longo prazo. Quando você cresce, nós
              crescemos juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
