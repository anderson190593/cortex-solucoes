import { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import synapLogo from '../../assets/logos/synap-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* LOGO ÚNICA LINKADA AO INÍCIO */}
          <a href="/" className="logo">
            <img src={synapLogo} alt="Synap Logo" className="logo-img" />
            <span className="logo-text">Synap <span className="text-primary">Tech</span></span>
          </a>

          <div className="nav-links">
            <a href="#fundamentos">Fundamentos</a>
            <a href="#identidade">Identidade</a>
            <a href="#anuncios">Anúncios</a>
            <a href="https://marca-de-elite.vercel.app" className="contact-btn">
              QUERO SER ELITE
            </a>
            {/* Botão de Troca de Tema */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;