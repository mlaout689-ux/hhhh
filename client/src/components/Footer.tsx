import React from 'react';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark/95 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="w-8 h-8 text-brand-purple" />
                <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-md"></div>
              </div>
              <span className="text-2xl font-bold text-gradient">Bravix AI</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Revolucionamos la atención al cliente con tecnología de IA avanzada, 
              proporcionando soluciones de recepcionista virtual 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:bg-brand-purple/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:bg-brand-purple/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-slate flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:bg-brand-purple/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-brand-cyan transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('caracteristicas')}
                  className="text-gray-300 hover:text-brand-cyan transition-colors"
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('industrias')}
                  className="text-gray-300 hover:text-brand-cyan transition-colors"
                >
                  Industrias
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="text-gray-300 hover:text-brand-cyan transition-colors"
                >
                  Testimonios
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-cyan transition-colors">
                  Recepcionista Virtual
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-cyan transition-colors">
                  Integración Personalizada
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-cyan transition-colors">
                  Soporte 24/7
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-cyan transition-colors">
                  Análisis y Reportes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-turquoise" />
                <span className="text-gray-300">contacto@bravixai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-turquoise" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-turquoise" />
                <span className="text-gray-300">Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bravix AI. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;