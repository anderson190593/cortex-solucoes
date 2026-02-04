import { useState, useEffect } from 'react';
import './Navbar.css';

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
          <div className="logo">
            <img src="/src/assets/logos/synap-logo.png" alt="Synap Logo" className="logo-img" style={{height: '40px'}} />
            <span className="logo-text">Synap <span className="text-primary">Tech</span></span>
          </div>
          
          <div className="nav-links">
            <a href="#fundamentos">Fundamentos</a>
            <a href="#identidade">Identidade</a>
            <a href="#anuncios">Anúncios</a>
            <a href="https://marca-de-elite.vercel.app" className="contact-btn">QUERO SER ELITE</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;