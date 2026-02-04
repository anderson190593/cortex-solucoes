import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text-column">
            <div className="hero-content">
              <div className="hero-tag">
                <span>✦</span> ENGENHARIA DE SOFTWARE & IA
              </div>

              <h1 className="hero-title">
                Sua visão transformada em Engenharia de Elite e IA.
              </h1>

              <p className="hero-subtitle">
                Especialistas em criar ecossistemas digitais, sistemas robustos 
                e soluções de IA que posicionam sua marca no topo do mercado.
              </p>

              <div className="flex gap-4">
                <a href="#solucoes" className="btn btn-primary btn-lg">
                  Conheça Nossas Soluções
                </a>
                <a href="https://marca-de-elite.vercel.app" className="btn btn-outline-light btn-lg">
                  E-book Marca de Elite
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img src="/cortex-hero.png" alt="Synap IA" className="img-fluid hero-image" />
          </div>
        </div>

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