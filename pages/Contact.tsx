import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-neutral-900 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-neutral-300">Book your free home consultation today.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-6">Contact Information</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start p-4 bg-neutral-50 rounded-lg">
                <MapPin className="text-secondary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-bold text-neutral-900">Our Office</h3>
                  <p className="text-neutral-600">{COMPANY_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-neutral-50 rounded-lg">
                <Phone className="text-secondary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-bold text-neutral-900">Phone</h3>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-neutral-600 hover:text-primary transition-colors">{COMPANY_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-neutral-50 rounded-lg">
                <Mail className="text-secondary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-bold text-neutral-900">Email</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-neutral-600 hover:text-primary transition-colors">{COMPANY_INFO.email}</a>
                </div>
              </div>
            </div>

            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center bg-[#25D366] text-white font-bold py-4 rounded-lg hover:bg-[#128C7E] transition-colors shadow-lg">
              <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100">
            <h2 className="font-serif text-2xl font-bold text-neutral-800 mb-6">Send us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Your Phone" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-1">Email (Optional)</label>
                <input type="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-1">Service Interested In</label>
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-white">
                  <option>Curtains & Blinds</option>
                  <option>Wallpapers</option>
                  <option>Flooring</option>
                  <option>Mosquito Screens</option>
                  <option>Invisible Grills</option>
                  <option>Complete Interiors</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-teal-900 transition-colors">
                Book Free Consultation
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg border border-neutral-200 h-80 bg-neutral-200 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=HBR+Layout,Bangalore&zoom=14&size=800x400&sensor=false')] bg-cover bg-center opacity-50"></div>
          <div className="z-10 bg-white p-4 rounded-lg shadow-lg">
             <p className="font-bold text-neutral-800 text-center">Valuria Shades Location</p>
             <p className="text-xs text-neutral-600 text-center">HBR Layout, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
