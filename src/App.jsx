// src/App.jsx
import { useState } from 'react';
import './App.css'; // Este é o caminho relativo correto
import Navbar from './components/Navbar/Navbar'; // Este é o caminho relativo correto
import HeroSection from './components/HeroSection/HeroSection'; // Este é o caminho relativo correto

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
    </div>
  );
}

export default App;