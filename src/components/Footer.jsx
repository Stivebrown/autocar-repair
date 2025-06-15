import React from 'react';

const Footer = () => (
  <footer className="py-8 bg-gradient-to-r from-blue-200/80 via-white/60 to-blue-300/90 text-center text-blue-700 border-t border-blue-200">
    <div className="max-w-7xl mx-auto px-4">
      <p className="mb-2">&copy; {new Date().getFullYear()} AutoCar Repair. All rights reserved.</p>
      <p className="text-xs">Designed with <span className="text-blue-500">Glassmorphism</span> & Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
