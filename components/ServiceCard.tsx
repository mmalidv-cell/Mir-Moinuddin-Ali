import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';
import { ArrowRight, Upload } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onImageUpdate?: (id: string, newUrl: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onImageUpdate }) => {
  const Icon = service.icon;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageUpdate) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onImageUpdate(service.id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = ''; // Reset to allow re-uploading same file
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col h-full relative">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <Icon size={28} className="mb-2 text-secondary" />
        </div>

        {/* Upload Button */}
        {onImageUpdate && (
          <label 
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-neutral-700 hover:text-primary p-2 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer z-10 transform translate-y-0"
            title="Replace Service Image"
            onClick={(e) => e.stopPropagation()}
          >
            <Upload size={18} />
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-neutral-800 mb-2">{service.title}</h3>
        <p className="text-neutral-600 mb-4 text-sm flex-grow leading-relaxed">
          {service.shortDescription}
        </p>
        
        <Link 
          to="/services" 
          className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wide group-hover:text-secondary transition-colors"
        >
          View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;