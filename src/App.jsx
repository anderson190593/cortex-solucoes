// src/App.jsx
import { useState } from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar'; 
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import ProjectControl from './components/ProjectControl/ProjectControl';
import Portfolio from './components/Portfolio/Portfolio';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <Features />
      <ProjectControl />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;