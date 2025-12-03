import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1056/1920/1080" 
          alt="Luxury Living Room Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Transform Your Home with <span className="text-secondary">Valuria Shades</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-8 font-light">
            Premium Interiors • Tailor-Made Designs • Professional Installation
            <br/>
            <span className="italic text-neutral-300 mt-2 block opacity-90">{COMPANY_INFO.tagline}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-secondary text-neutral-900 font-bold text-center rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-lg"
            >
              Explore Products
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-center rounded-lg hover:bg-white hover:text-neutral-900 transition-all shadow-lg backdrop-blur-sm"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
