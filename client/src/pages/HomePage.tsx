import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-slate to-brand-dark">
      <Header />
      <Hero />
      <Features />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;