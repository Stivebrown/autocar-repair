import React from "react";

const Footer = () => (
  <footer className="backdrop-blur bg-white/40 border-t border-blue-200 mt-16">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-blue-900">
      {/* Brand & Tagline */}
      <div>
        <h2 className="text-2xl font-bold font-sans tracking-tight mb-2">AutoCar-Repair</h2>
        <p className="text-sm opacity-80 mb-4">
          Driving you forward with trust, technology, and transparency.
        </p>
        <div className="flex space-x-3 mt-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33V21.877C18.343 21.128 22 16.991 22 12"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.342 2.393 1.322 3.373.98.98 2.092 1.263 3.373 1.322C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.373-1.322.98-.98 1.263-2.092 1.322-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.342-2.393-1.322-3.373-.98-.98-2.092-1.263-3.373-1.322C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
      {/* Navigation */}
      <div>
        <h3 className="font-semibold mb-3">Navigation</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          <li><a href="/admin" className="hover:text-blue-500 transition">Admin</a></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-sm">
          <li><span className="font-medium">Phone:</span> <a href="tel:+2376500000000" className="hover:text-blue-500 transition">+237 650 000 000</a></li>
          <li><span className="font-medium">Email:</span> <a href="mailto:info@autocarrepair.com" className="hover:text-blue-500 transition">info@autocarrepair.com</a></li>
          <li><span className="font-medium">Address:</span> Tarred Malingo Buea, Cameroon</li>
        </ul>
      </div>
      {/* Newsletter */}
      <div>
        <h3 className="font-semibold mb-3">Newsletter</h3>
        <form className="flex flex-col space-y-2">
          <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-white/80 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-400 transition">Subscribe</button>
        </form>
        <p className="text-xs opacity-70 mt-2">Get the latest updates and offers.</p>
      </div>
    </div>
    <div className="border-t border-blue-100 py-4 px-6 text-center text-xs text-blue-700 bg-white/60">
      <span>&copy; {new Date().getFullYear()} AutoCar Repair. All rights reserved.</span>
      <span className="mx-2">|</span>
      <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
      <span className="mx-2">|</span>
      <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
      <span className="mx-2">|</span>
      <span>Designed with <span className="text-blue-500">Glassmorphism</span> & Tailwind CSS</span>
    </div>
  </footer>
);

export default Footer;
