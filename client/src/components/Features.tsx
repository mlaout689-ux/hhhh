import React from 'react';
import { Clock, Users, Mic, Brain, Shield, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Disponible 24/7',
      description: 'Tu recepcionista virtual nunca duerme. Atiende llamadas las 24 horas del día, los 7 días de la semana.',
      color: 'text-brand-cyan'
    },
    {
      icon: Users,
      title: 'Múltiples Conversaciones',
      description: 'Maneja cientos de llamadas simultáneamente sin perder calidad en el servicio.',
      color: 'text-brand-purple'
    },
    {
      icon: Mic,
      title: 'Voz Humana Realista',
      description: 'Tecnología de síntesis de voz avanzada que suena completamente natural y profesional.',
      color: 'text-brand-turquoise'
    },
    {
      icon: Brain,
      title: 'IA Conversacional',
      description: 'Comprende el contexto y mantiene conversaciones naturales adaptadas a tu negocio.',
      color: 'text-brand-cyan'
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Protección de datos de nivel empresarial con encriptación end-to-end.',
      color: 'text-brand-purple'
    },
    {
      icon: BarChart3,
      title: 'Análisis Detallado',
      description: 'Reportes completos sobre llamadas, satisfacción del cliente y métricas de rendimiento.',
      color: 'text-brand-turquoise'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Características que
            <span className="text-gradient block">Revolucionan tu Negocio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestra tecnología de IA puede transformar completamente 
            la experiencia de atención al cliente en tu empresa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card glass-effect rounded-2xl p-8 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}-500/20 to-${feature.color.split('-')[1]}-600/20 flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform"
          >
            Descubre Todas las Características
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;