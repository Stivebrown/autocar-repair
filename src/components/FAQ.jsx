import React, { useState } from 'react';

const faqs = [
  { q: 'How do I book an appointment?', a: 'Use the booking form on our homepage or chat with our bot for help.' },
  { q: 'What services do you offer?', a: 'We offer diagnostics, brake repair, oil change, tires, AC, battery, and more.' },
  { q: 'Can I pay online?', a: 'Yes! We support secure online payments.' },
  { q: 'Where are you located?', a: 'Tarred Malingo Buea, Cameroon.' },
  { q: 'Do you offer warranty?', a: 'Yes, all repairs come with a warranty. Ask us for details.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-blue-100/80 via-white/60 to-blue-300/90">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-blue-200 rounded-xl bg-white/80 shadow">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-blue-800 focus:outline-none flex justify-between items-center"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="ml-2 text-blue-500">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && <div className="px-6 pb-4 text-blue-700 animate-fade-in">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
