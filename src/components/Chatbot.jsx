import React, { useState, useRef, useEffect } from 'react';

const defaultMessages = [
  { from: 'bot', text: 'Hi! How can I help you with your car today?' },
];

const suggestions = [
  'What services do you offer?',
  'How do I book an appointment?',
  'Where are you located?',
  'What are your opening hours?',
];

const Chatbot = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open) chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = (msg) => {
    const userMsg = msg || input;
    if (!userMsg.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: userMsg }]);
    setInput('');
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: getBotReply(userMsg) },
      ]);
    }, 700);
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes('service')) return 'We offer diagnostics, brake repair, oil change, tires, AC, battery, and more!';
    if (msg.includes('book')) return 'You can book an appointment using the form on the homepage.';
    if (msg.includes('where') || msg.includes('location')) return 'We are at 123 Main St, City, Country.';
    if (msg.includes('hour')) return 'We are open Mon-Sat, 8am to 6pm.';
    if (msg.includes('contact')) return 'You can contact us at info@autocarrepair.com or +1 234 567 890.';
    return "I'm here to help! Please ask any question about our services.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-200 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-blue-100 bg-blue-500/80 rounded-t-2xl">
            <span className="font-bold text-white">AutoCar Chat</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-blue-200 text-xl">×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`my-1 flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${m.from === 'user' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-900'}`}>{m.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestions.map((s, i) => (
                <button key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs hover:bg-blue-200" onClick={() => handleSend(s)}>{s}</button>
              ))}
            </div>
            <form className="flex gap-2" onSubmit={e => { e.preventDefault(); handleSend(); }}>
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-blue-200 bg-white/80 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-400 transition">Send</button>
            </form>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl hover:bg-blue-400 transition"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
