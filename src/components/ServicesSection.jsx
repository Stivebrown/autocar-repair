import React from 'react';

const services = [
  { title: 'Engine Diagnostics', desc: 'Advanced computer diagnostics for all car models.' },
  { title: 'Brake Repair', desc: 'Safe and reliable brake system repairs and upgrades.' },
  { title: 'Oil Change', desc: 'Premium oil and filter change for optimal performance.' },
  { title: 'Tire Services', desc: 'Tire rotation, balancing, and replacement.' },
  { title: 'AC & Heating', desc: 'Climate control repairs for year-round comfort.' },
  { title: 'Battery Replacement', desc: 'Fast and efficient battery testing and replacement.' },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-gradient-to-br from-blue-100/80 via-white/60 to-blue-200/90">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center drop-shadow-lg">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="backdrop-blur-lg bg-white/60 border border-blue-200 rounded-2xl p-8 shadow-xl text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h3>
            <p className="text-blue-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
