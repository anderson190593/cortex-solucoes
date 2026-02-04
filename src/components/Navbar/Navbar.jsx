import { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="#" className="logo">
            <div className="logo-icon">S</div>
            <span className="logo-text">Synap <span className="text-primary">Tech</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links hidden lg:flex items-center">
            <a href="#fundamentos">Fundamentos</a>
            <a href="#identidade">Identidade</a>
            <a href="#anuncios">Anúncios</a>
            <a href="https://marca-de-elite.vercel.app" className="contact-btn">QUERO SER ELITE</a>
            <ThemeToggle />
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;