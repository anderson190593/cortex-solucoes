// src/App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services'; // 1. Importa o Services

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <Services /> {/* 2. Adiciona o componente aqui */}
    </div>
  );
}

export default App;