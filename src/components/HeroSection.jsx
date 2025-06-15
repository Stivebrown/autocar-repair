import React from 'react';

const HeroSection = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white/60 via-blue-100/80 to-blue-400/90 relative overflow-hidden pt-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent pointer-events-none" />
    <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl p-10 max-w-2xl text-center border border-white/40">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg mb-6">Drive with Confidence</h1>
      <p className="text-lg md:text-2xl text-blue-700 mb-8">Professional auto repair services for a safer, smoother ride. Experience the future of car care today.</p>
      <a href="#cta" className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-400 transition text-lg backdrop-blur-md">Book an Appointment</a>
    </div>
  </section>
);

export default HeroSection;
