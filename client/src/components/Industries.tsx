import React from 'react';
import { Stethoscope, Home, Scale, GraduationCap, Wrench, Car } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: 'Clínicas Dentales',
      description: 'Gestiona citas, recordatorios y consultas médicas con profesionalismo.',
      benefits: ['Programación de citas', 'Recordatorios automáticos', 'Consultas básicas']
    },
    {
      icon: Home,
      title: 'Inmobiliarias',
      description: 'Atiende consultas sobre propiedades y agenda visitas las 24 horas.',
      benefits: ['Información de propiedades', 'Agendamiento de visitas', 'Calificación de leads']
    },
    {
      icon: Scale,
      title: 'Servicios Legales',
      description: 'Maneja consultas iniciales y programa citas con abogados especializados.',
      benefits: ['Consultas iniciales', 'Programación legal', 'Información de servicios']
    },
    {
      icon: GraduationCap,
      title: 'Educación',
      description: 'Asiste a estudiantes y padres con información académica y administrativa.',
      benefits: ['Información académica', 'Soporte estudiantil', 'Gestión administrativa']
    },
    {
      icon: Wrench,
      title: 'HVAC',
      description: 'Programa servicios de mantenimiento y atiende emergencias de climatización.',
      benefits: ['Servicios de emergencia', 'Mantenimiento programado', 'Soporte técnico']
    },
    {
      icon: Car,
      title: 'Automotriz',
      description: 'Gestiona citas de servicio, consultas de repuestos y soporte técnico.',
      benefits: ['Citas de servicio', 'Consultas técnicas', 'Información de repuestos']
    }
  ];

  return (
    <section id="industrias" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-turquoise to-brand-cyan"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluciones para
            <span className="text-gradient block">Cada Industria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestra IA se adapta perfectamente a las necesidades específicas de tu sector, 
            proporcionando respuestas precisas y profesionales.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="feature-card glass-effect rounded-2xl p-8 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-turquoise/20 mb-6 group-hover:scale-110 transition-transform">
                <industry.icon className="w-8 h-8 text-brand-cyan" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                {industry.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {industry.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {industry.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-turquoise mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿No ves tu industria? No te preocupes.
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestra IA es altamente personalizable y puede adaptarse a cualquier sector empresarial. 
              Contáctanos para una solución a medida.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-3 rounded-full text-white font-semibold"
            >
              Consultar Personalización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;