import React from 'react';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
];

const Gallery = () => (
  <section id="gallery" className="py-16 bg-gradient-to-br from-blue-300/40 via-white/60 to-blue-100/80">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Portfolio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-lg group">
            <img src={src} alt={`Gallery ${i+1}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
