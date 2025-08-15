import React from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-transparent to-brand-turquoise/10 animate-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-brand-cyan opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-8 h-8 text-brand-purple opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-4 h-4 text-brand-turquoise opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-purple/20 backdrop-blur-sm border border-brand-purple/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm text-gray-300">Tecnología de IA Avanzada</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Transforma tu</span>
            <br />
            <span className="text-gradient">Atención Telefónica</span>
            <br />
            <span className="text-white">con IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nuestra recepcionista virtual con inteligencia artificial revoluciona tu servicio al cliente 
            con voz humana realista, disponibilidad 24/7 y capacidad para múltiples conversaciones simultáneas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button 
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 text-lg group"
            >
              <span>Solicitar Demo Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Ver Demo en Vivo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-cyan mb-2">24/7</div>
              <div className="text-gray-400">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-purple mb-2">∞</div>
              <div className="text-gray-400">Llamadas Simultáneas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-turquoise mb-2">95%</div>
              <div className="text-gray-400">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;