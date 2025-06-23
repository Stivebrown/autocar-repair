import React from 'react';

const reviews = [
  { name: 'Emily R.', text: 'Amazing service! My car feels brand new. Highly recommend AutoCar Repair.' },
  { name: 'Michael T.', text: 'Quick, professional, and transparent. Booking was easy and the team is friendly.' },
  { name: 'Sarah K.', text: 'The best auto repair experience I’ve had. The chatbot was super helpful too!' },
];

const Reviews = () => (
  <section id="reviews" className="py-16 bg-gradient-to-br from-blue-100/80 via-white/60 to-blue-300/90">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Customer Reviews</h2>
      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white/80 border border-blue-200 rounded-2xl p-6 shadow-xl flex flex-col items-center animate-fade-in-up min-w-[320px] md:min-w-[350px] max-w-full mx-auto">
            <span className="text-5xl mb-2">⭐️⭐️⭐️⭐️⭐️</span>
            <p className="text-blue-800 mb-4 italic">“{r.text}”</p>
            <span className="font-semibold text-blue-700">- {r.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
