// src/components/Portfolio/Portfolio.jsx
import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    tag: "Saúde & Bem-estar",
    title: "Psi Sem Tabu",
    description: "Plataforma de acolhimento psicológico com foco em experiência do usuário. Transformamos um Linktree básico em uma máquina de conversão com design imersivo e agendamento direto.",
    techs: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://psi-sem-tabu.vercel.app/",
    image: "/case-psi.png", // Certifique-se que esta imagem existe na pasta public
    reverse: false // Texto na esquerda, Imagem na direita
  },
  {
    id: 2,
    tag: "E-commerce Premium",
    title: "Alpha Outfits",
    description: "Landing Page de alta conversão para moda masculina. Integração inteligente de carrinho de compras com checkout automático via WhatsApp, focado em fechar vendas rapidamente.",
    techs: ["HTML5 Semântico", "CSS3 Customizado", "JavaScript ES6+", "Bootstrap 5"],
    link: "https://www.alphaoltfits.me/",
    image: "/case-alpha.png", // A imagem que você vai salvar agora
    reverse: true // Imagem na esquerda, Texto na direita (Zig-Zag)
  },
  {
    id: 3,
    tag: "Personal Branding",
    title: "Anderson Roberto",
    description: "O hub digital do fundador. Um espaço minimalista que centraliza artigos, projetos e a visão técnica que guia a Cortex. Performance extrema e identidade visual marcante.",
    techs: ["React", "UX/UI Design", "SEO Técnico", "Blog"], // Ajuste as techs se necessário
    link: "https://www.andersonroberto.com.br/",
    image: "/case-anderson.png", // Não esqueça de salvar o print com este nome!
    reverse: false // Volta para Texto esquerda, Imagem direita
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-5">
          <div className="portfolio-header-tag">✦ Nossos Cases</div>
          <h2 className="section-title mb-3">Obras de Arte Digitais</h2>
          <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>
            Não entregamos apenas código. Entregamos resultados, performance e design que posiciona sua marca no topo.
          </p>
        </div>

        {/* Loop dos Projetos */}
        <div className="portfolio-list">
          {projects.map((project) => (
            <div key={project.id} className={`row align-items-center project-row ${project.reverse ? 'flex-row-reverse' : ''}`}>
              
              {/* Texto do Projeto */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="project-content">
                  <div className="portfolio-tag">{project.tag}</div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-subtitle">{project.description}</p>
                  
                  <ul className="portfolio-checks">
                    {project.techs.map((tech, index) => (
                      <li key={index}><span>✓</span> {tech}</li>
                    ))}
                  </ul>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-3">
                    Ver Projeto Online
                  </a>
                </div>
              </div>

              {/* Imagem do Projeto */}
              <div className="col-lg-6 offset-lg-1">
                <div className="portfolio-visual">
                  <div className="browser-mockup">
                    <div className="browser-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <img 
                      src={project.image} 
                      alt={`Case ${project.title}`} 
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;