import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const posts = [
  {
    title: '5 Tips for Keeping Your Car in Top Shape',
    date: '2025-06-01',
    excerpt: 'Regular maintenance and a few simple habits can keep your car running smoothly for years. Here are our top 5 tips...',
    content: '1. Check your oil regularly. 2. Keep tires inflated. 3. Replace air filters. 4. Listen for unusual noises. 5. Schedule regular inspections.',
    author: 'Admin',
    tags: ['Maintenance', 'Tips'],
  },
  {
    title: 'How to Spot Brake Problems Early',
    date: '2025-05-20',
    excerpt: 'Brake issues can be dangerous. Learn the early warning signs and what to do if you notice them...',
    content: 'If you hear squealing, grinding, or feel vibrations when braking, get your brakes checked immediately. Early detection saves money and lives.',
    author: 'Jane Smith',
    tags: ['Brakes', 'Safety'],
  },
  {
    title: 'Why Choose Professional Diagnostics?',
    date: '2025-05-10',
    excerpt: 'Modern cars need modern solutions. Discover why professional diagnostics save you money and stress...',
    content: 'Professional diagnostics use advanced tools to pinpoint issues quickly, saving you time and preventing unnecessary repairs.',
    author: 'Michael T.',
    tags: ['Diagnostics', 'Technology'],
  },
];

const categories = ['All', 'Maintenance', 'Tips', 'Brakes', 'Safety', 'Diagnostics', 'Technology'];

const Blog = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.tags.includes(filter));

  return (
    <div className="bg-gradient-to-br from-blue-100/80 via-white/60 to-blue-300/90 min-h-screen">
      <Navbar />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 mb-8 md:mb-0">
            <div className="bg-white/80 border border-blue-200 rounded-2xl p-6 shadow-xl mb-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      className={`text-left w-full px-2 py-1 rounded hover:bg-blue-100 transition ${filter === cat ? 'bg-blue-200 text-blue-900 font-semibold' : 'text-blue-700'}`}
                      onClick={() => { setFilter(cat); setSelected(null); }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 border border-blue-200 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Recent Posts</h3>
              <ul className="space-y-2">
                {posts.slice(0, 3).map((p, i) => (
                  <li key={i}>
                    <button className="text-blue-700 hover:underline text-left" onClick={() => setSelected(i)}>{p.title}</button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Main Content */}
          <main className="md:col-span-3">
            {!selected && (
              <div className="space-y-6">
                {filteredPosts.map((p, i) => (
                  <div key={i} className="bg-white/80 border border-blue-200 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform">
                    <h3 className="text-xl font-bold text-blue-800 mb-1 cursor-pointer" onClick={() => setSelected(posts.indexOf(p))}>{p.title}</h3>
                    <div className="text-xs text-blue-400 mb-2">{p.date} &middot; By {p.author}</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.tags.map((tag, j) => (
                        <span key={j} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                    <p className="text-blue-700 mb-2">{p.excerpt}</p>
                    <button className="text-blue-500 font-semibold hover:underline" onClick={() => setSelected(posts.indexOf(p))}>Read More</button>
                  </div>
                ))}
              </div>
            )}
            {selected !== null && (
              <div className="bg-white/90 border border-blue-200 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
                <button className="text-blue-500 hover:underline mb-4" onClick={() => setSelected(null)}>&larr; Back to all posts</button>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">{posts[selected].title}</h2>
                <div className="text-xs text-blue-400 mb-2">{posts[selected].date} &middot; By {posts[selected].author}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {posts[selected].tags.map((tag, j) => (
                    <span key={j} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{tag}</span>
                  ))}
                </div>
                <p className="text-blue-800 mb-4 whitespace-pre-line">{posts[selected].content}</p>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Blog;
