// src/App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'; // 1. Importa o Contact
import Footer from './components/Footer/Footer';   // 2. Importa o Footer

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <Services />
      <Portfolio />
      <Contact /> {/* 3. Adiciona o Contact */}
      <Footer />  {/* 4. Adiciona o Footer */}
    </div>
  );
}

export default App;