import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, TESTIMONIALS, COMPANY_INFO } from '../constants';
import { Star, Truck, ShieldCheck, Ruler, Clock, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* Expertise Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-neutral-800 mb-4">Our Expertise</h2>
            <p className="text-neutral-600 text-lg">
              We specialize in creating bespoke interior solutions that blend functionality with aesthetic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section className="py-20 bg-neutral-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mb-2">Featured Projects</h2>
              <p className="text-neutral-600">A glimpse into homes we've transformed.</p>
            </div>
            <Link to="/gallery" className="hidden md:flex items-center px-6 py-3 border border-neutral-300 rounded-full hover:bg-neutral-800 hover:text-white transition-all">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
            <div className="md:col-span-2 h-full relative group rounded-2xl overflow-hidden cursor-pointer">
               <img src="https://picsum.photos/id/1070/1200/800" alt="Master Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <h3 className="text-white text-2xl font-serif font-bold">Modern Living Room</h3>
                 <p className="text-neutral-300">Custom Drapery & Wall Paneling</p>
               </div>
            </div>
            <div className="grid grid-rows-2 gap-6 h-full">
              <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://picsum.photos/id/129/600/400" alt="Kitchen Blinds" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://picsum.photos/id/133/600/400" alt="Wooden Flooring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/gallery" className="inline-block px-6 py-3 border border-neutral-800 rounded-full text-neutral-800 font-bold">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Why Choose Valuria Shades?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Ruler, title: "Free On-Site Visit", text: "We bring samples to you and take precise measurements." },
              { icon: ShieldCheck, title: "Premium Quality", text: "Curated materials that last long and look luxurious." },
              { icon: Truck, title: "Fast Delivery", text: "Timely execution and professional installation." },
              { icon: Star, title: "3000+ Designs", text: "Huge catalog of fabrics, wallpapers, and blinds." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <item.icon className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mb-2">Client Testimonials</h2>
            <div className="flex justify-center items-center text-secondary space-x-1 mb-2">
              <span className="text-neutral-800 font-bold mr-2 text-2xl">4.9</span>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                <div className="flex space-x-1 text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} fill={i < Math.floor(review.rating) ? "currentColor" : "none"} size={16} />
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 italic">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-neutral-900">{review.name}</h4>
                    <p className="text-xs text-neutral-500 uppercase">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
            Book a free home consultation today. Our experts will visit your place with catalogs and provide an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-secondary text-neutral-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              Get Free Consultation
            </Link>
            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors">
              <MessageCircle className="mr-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
