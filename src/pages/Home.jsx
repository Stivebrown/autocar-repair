import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CallToAction from '../components/CallToAction';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ContactSection = () => (
  <section id="contact" className="py-24 flex flex-col items-center justify-center bg-white/40 backdrop-blur-lg rounded-3xl mx-4 my-8 shadow-xl">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
    <p className="text-blue-700 mb-6 text-center max-w-xl">Have questions or need to book a service? Fill out the form below or reach us directly at <a href="mailto:info@autocarrepair.com" className="text-blue-500 underline">info@autocarrepair.com</a>.</p>
    <form className="w-full max-w-md flex flex-col space-y-4">
      <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <textarea placeholder="Your Message" rows="4" className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button type="submit" className="py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-400 transition">Send Message</button>
    </form>
  </section>
);

const Home = () => (
  <div className="bg-gradient-to-br from-white/60 via-blue-100/80 to-blue-400/90 min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <CallToAction />
    <Reviews />
    <Gallery />
    <FAQ />
    <ContactSection />
    <Footer />
    <Chatbot />
  </div>
);

export default Home;
