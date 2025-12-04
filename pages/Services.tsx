import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [servicesList, setServicesList] = useState(SERVICES);

  const handleImageUpload = (id: string, subCategoryTitle?: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setServicesList(prev => prev.map(service => {
            if (service.id === id) {
              if (subCategoryTitle && service.subCategories) {
                 return {
                   ...service,
                   subCategories: service.subCategories.map(sub => 
                     sub.title === subCategoryTitle ? { ...sub, image: reader.result as string } : sub
                   )
                 };
              }
              return { ...service, image: reader.result as string };
            }
            return service;
          }));
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-neutral-900 text-white pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            From luxurious drapery to durable safety screens, explore our comprehensive range of home interior solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-8">
        <div className="space-y-20">
          {servicesList.map((service, index) => (
            <div 
              id={service.id} 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-start pt-16`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-10">
                    <service.icon size={32} className="text-primary" />
                  </div>

                  {/* Upload Button Main Image */}
                  <label 
                    className="absolute top-4 left-4 bg-white/90 hover:bg-white text-neutral-700 hover:text-primary p-2 rounded-full shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer z-20"
                    title="Replace Service Image"
                  >
                    <Upload size={20} />
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageUpload(service.id)}
                    />
                  </label>
                </div>
                
                {/* Subcategories Thumbnails */}
                {service.subCategories && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {service.subCategories.map((sub, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100 group relative">
                        <div className="h-24 rounded-md overflow-hidden mb-2 relative">
                           <img src={sub.image} alt={sub.title} className="w-full h-full object-cover" />
                           {/* Upload Button Sub Image */}
                           <label 
                              className="absolute top-2 right-2 bg-white/90 hover:bg-white text-neutral-700 hover:text-primary p-1.5 rounded-full shadow-sm backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer z-20"
                              title="Replace Image"
                            >
                              <Upload size={14} />
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={handleImageUpload(service.id, sub.title)}
                              />
                            </label>
                        </div>
                        <h4 className="font-bold text-sm">{sub.title}</h4>
                        <p className="text-xs text-neutral-500">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                <div className="w-20 h-1.5 bg-secondary mb-6"></div>
                
                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <h3 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">Features & Types</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <CheckCircle2 size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-block px-8 py-3 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Get a Quote for {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;