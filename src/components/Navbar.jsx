import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 fixed w-full z-30 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-2xl font-bold text-cyan-400 tracking-widest drop-shadow-lg" style={{ fontFamily: 'Arial, sans-serif' }}>AutoCar Repair</span>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-cyan-400 transition font-medium">Home</a>
          <a href="#services" className="text-white hover:text-cyan-400 transition font-medium">Services</a>
          <a href="#contact" className="text-white hover:text-cyan-400 transition font-medium">Contact</a>
          <a href="/admin" className="text-cyan-400 hover:text-white transition font-semibold">Admin</a>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-1 bg-cyan-400 rounded mb-1 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
          <span className={`block w-7 h-1 bg-cyan-400 rounded mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className="block w-7 h-1 bg-cyan-400 rounded transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-b border-white/30 px-4 py-4 flex flex-col items-center space-y-4 shadow-lg animate-fade-in">
          <a href="/" className="text-cyan-700 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" className="text-cyan-700 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" className="text-cyan-700 font-medium w-full text-center" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/admin" className="text-blue-700 font-semibold w-full text-center" onClick={() => setMenuOpen(false)}>Admin</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
