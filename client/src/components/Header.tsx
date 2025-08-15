import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Bot } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bot className="w-8 h-8 text-brand-purple animate-pulse-glow" />
              <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-md"></div>
            </div>
            <span className="text-2xl font-bold text-gradient">Bravix AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-brand-cyan transition-colors duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('caracteristicas')}
              className="text-gray-300 hover:text-brand-cyan transition-colors duration-300"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection('industrias')}
              className="text-gray-300 hover:text-brand-cyan transition-colors duration-300"
            >
              Industrias
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-gray-300 hover:text-brand-cyan transition-colors duration-300"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn-primary px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contactar</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-brand-cyan transition-colors duration-300 text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('caracteristicas')}
                className="text-gray-300 hover:text-brand-cyan transition-colors duration-300 text-left"
              >
                Características
              </button>
              <button 
                onClick={() => scrollToSection('industrias')}
                className="text-gray-300 hover:text-brand-cyan transition-colors duration-300 text-left"
              >
                Industrias
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-300 hover:text-brand-cyan transition-colors duration-300 text-left"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="btn-primary px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2 w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Contactar</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;