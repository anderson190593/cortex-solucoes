// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar'; 
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import ProjectControl from './components/ProjectControl/ProjectControl';
import Portfolio from './components/Portfolio/Portfolio';
import AboutSection from './components/AboutSection/AboutSection';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  // Lê o tema do sistema ou usa 'dark' como padrão
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // --- CORREÇÃO DO MODO CLARO ---
  // Este efeito roda toda vez que o 'theme' muda.
  // Ele aplica o atributo data-theme diretamente no corpo do HTML (body),
  // garantindo que o fundo do site inteiro mude de cor.
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    // Removemos o data-theme daqui, pois agora ele está no body
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <Features />
      <ProjectControl />
      <Portfolio />
      <AboutSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;