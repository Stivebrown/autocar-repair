import React, { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  service: '',
  date: '',
};

const services = [
  'Engine Diagnostics',
  'Brake Repair',
  'Oil Change',
  'Tire Services',
  'AC & Heating',
  'Battery Replacement',
];

const CallToAction = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store booking in localStorage (demo)
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(form);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="cta" className="py-20 flex justify-center items-center bg-gradient-to-r from-blue-100/80 via-white/60 to-blue-300/90">
      <div className="backdrop-blur-lg bg-white/70 border border-blue-200 rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to get your car fixed?</h2>
        <p className="text-blue-700 mb-6">Book your appointment now and experience top-notch auto repair services!</p>
        {submitted ? (
          <div className="text-green-600 font-semibold text-lg">Thank you! Your booking has been received.</div>
        ) : (
          <form className="flex flex-col space-y-4 text-left" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-400 transition">Book Now</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
