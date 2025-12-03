import React from 'react';

const IMAGES = [
  { id: 1, src: "https://picsum.photos/id/1056/800/1000", cat: "Living Room" },
  { id: 2, src: "https://picsum.photos/id/1081/800/600", cat: "Balcony" },
  { id: 3, src: "https://picsum.photos/id/129/800/1200", cat: "Curtains" },
  { id: 4, src: "https://picsum.photos/id/133/800/600", cat: "Flooring" },
  { id: 5, src: "https://picsum.photos/id/201/800/800", cat: "Workspace" },
  { id: 6, src: "https://picsum.photos/id/250/800/1000", cat: "Details" },
  { id: 7, src: "https://picsum.photos/id/319/800/600", cat: "Blinds" },
  { id: 8, src: "https://picsum.photos/id/364/800/800", cat: "Dining" },
  { id: 9, src: "https://picsum.photos/id/401/800/1000", cat: "Bedroom" },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-neutral-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project Gallery</h1>
          <p className="text-neutral-600">Explore our portfolio of completed projects across Bangalore.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={img.src} alt={img.cat} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif text-xl border-b-2 border-secondary pb-1">{img.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
