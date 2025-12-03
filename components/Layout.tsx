import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-neutral-100' : 'bg-white py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-wide">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide uppercase hover:text-secondary transition-colors ${
                  location.pathname === link.path ? 'text-secondary' : 'text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-teal-900 transition-colors shadow-lg shadow-teal-900/20"
            >
              Consult Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-neutral-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium px-4 py-2 rounded-lg ${
                  location.pathname === link.path ? 'bg-neutral-50 text-secondary' : 'text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
             <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-center px-5 py-3 bg-primary text-white font-bold rounded-lg hover:bg-teal-900 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-16">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white font-bold">{COMPANY_INFO.name}</h3>
            <p className="leading-relaxed">{COMPANY_INFO.tagline}</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-white transition-colors">Curtains & Blinds</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Wallpapers</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Flooring</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mosquito Screens</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p>{COMPANY_INFO.address}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-neutral-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
