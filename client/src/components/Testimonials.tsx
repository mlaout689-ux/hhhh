import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. María González',
      position: 'Directora, Clínica Dental Sonrisa',
      content: 'Desde que implementamos Bravix AI, nuestros pacientes están más satisfechos y nunca perdemos una llamada. La IA maneja las citas perfectamente y suena completamente natural.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Carlos Mendoza',
      position: 'CEO, Inmobiliaria Premium',
      content: 'Increíble cómo la IA puede calificar leads y agendar visitas automáticamente. Hemos aumentado nuestras conversiones en un 40% desde que la implementamos.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ana Rodríguez',
      position: 'Socia, Bufete Jurídico R&A',
      content: 'La profesionalidad de la IA es impresionante. Nuestros clientes no pueden distinguir si están hablando con una persona real. Ha revolucionado nuestra atención inicial.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonios" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que Dicen
            <span className="text-gradient block">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas de todos los sectores han transformado su atención al cliente 
            con nuestra tecnología de IA. Descubre sus experiencias.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="feature-card glass-effect rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-brand-cyan" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-cyan mb-2">500+</div>
            <div className="text-gray-400">Empresas Satisfechas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-purple mb-2">1M+</div>
            <div className="text-gray-400">Llamadas Procesadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-turquoise mb-2">98%</div>
            <div className="text-gray-400">Tasa de Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-cyan mb-2">24/7</div>
            <div className="text-gray-400">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;