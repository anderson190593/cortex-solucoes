// src/components/HeroSection/HeroSection.jsx
import './HeroSection.css'; // Importa nosso CSS customizado

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container ">
        <div className="row align-items-center">
          {/* Coluna 1: Texto e Chamada */}
          <div className="col-lg-6 hero-text-column">
            <div className="hero-content">
              {/* A "Tag" de destaque (adaptada) */}
              <div className="hero-tag">
                <span>✦</span> SOLUÇÕES EM TECNOLOGIA
              </div>

              {/* Título Principal (adaptado) */}
              <h1 className="hero-title">
                Inovação Digital Sob Medida.
              </h1>

              {/* Subtítulo (adaptado) */}
              <p className="hero-subtitle">
                Somos especialistas em criar sites, landing pages de alta conversão
                e sistemas web que impulsionam o seu negócio.
              </p>

              {/* Botão de Ação */}
              <a href="#solucoes" className="btn btn-primary btn-lg mt-3 mb-3">
                Conheça Nossas Soluções
              </a>
            </div>
          </div>

          {/* Coluna 2: Imagem/Visual */}
          <div className="col-lg-6 text-center">
            {/* Usaremos um placeholder. No futuro, trocamos por uma imagem 3D/tech */}
            <img
              src="../../../images/hero-image.png"
              alt="Soluções Tecnológicas"
              className="img-fluid hero-image"
            />
          </div>
        </div>

        {/* --- Seção de Estatísticas (Prova Social) --- */}
        <div className="row hero-stats">
          <div className="col-lg-4 col-md-4">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projetos Entregues</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;