import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-elite-black">
      {/* Efeito de Glow Spot de Fundo */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--color-elite-cyan)_0%,_transparent_70%)] opacity-10 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Coluna 1: Texto e Chamada de Elite */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-elite-cyan/30 bg-elite-cyan/5 text-elite-cyan text-xs font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
              <span className="mr-2">✦</span> ENGENHARIA DE SOFTWARE & IA
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 font-display bg-gradient-to-r from-elite-cyan to-elite-purple bg-clip-text text-transparent">
              Sua visão transformada em Engenharia de Elite e Inteligência Artificial.
            </h1>

            <p className="text-xl text-gray-400 font-light max-w-xl mb-10 border-l-2 border-elite-purple pl-6 mx-auto lg:mx-0">
              Especialistas em criar ecossistemas digitais, sistemas robustos e soluções de IA que posicionam sua marca no topo do mercado.
            </p>

            {/* Grupo de CTAs Estratégicos */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#solucoes" 
                className="px-8 py-4 bg-elite-cyan text-black font-bold rounded-lg hover:scale-105 transition-transform text-center"
              >
                Conheça Nossas Soluções
              </a>
              <a 
                href="https://marca-de-elite.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-center"
              >
                E-book Marca de Elite
              </a>
            </div>
          </div>

          {/* Coluna 2: Visual Impactante */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-elite-cyan/20 blur-[100px] rounded-full" />
              <img
                src="/cortex-hero.png"
                alt="Synap Technology IA"
                className="relative z-10 max-w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-bounce-slow"
              />
            </div>
          </div>
        </div>

        {/* --- Seção de Estatísticas (Prova Social Glass) --- */}
        <div className="mt-20 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="block text-4xl font-bold text-elite-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">500+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Projetos Entregues</span>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
            <span className="block text-4xl font-bold text-elite-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">100%</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Clientes Satisfeitos</span>
          </div>
          <div>
            <span className="block text-4xl font-bold text-elite-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">5+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Anos de Experiência</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;