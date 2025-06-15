import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'autocar2025'; // Demo only, replace with env var/server in production

const demoRequests = [
  { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Need brake repair.' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Oil change appointment.' },
];

const Admin = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('requests');
  const [siteTitle, setSiteTitle] = useState('AutoCar Repair');
  const [siteDesc, setSiteDesc] = useState('Professional auto repair services for a safer, smoother ride.');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
      setBookings(stored);
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleSiteContentUpdate = (e) => {
    e.preventDefault();
    // In a real app, save to backend
    alert('Site content updated! (Demo)');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      setPasswordMsg('Passwords do not match.');
      return;
    }
    // In a real app, update password securely
    setPasswordMsg('Password changed! (Demo)');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white/60 via-blue-100/80 to-blue-400/90">
      <div className="backdrop-blur-lg bg-white/70 border border-blue-200 rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center mt-24">
        {!loggedIn ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Admin Login</h2>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-400 transition">Sign In</button>
          </form>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Admin Dashboard</h2>
            <div className="flex flex-wrap justify-center mb-6 gap-2">
              <button onClick={() => setTab('requests')} className={`px-4 py-2 rounded-lg font-semibold transition ${tab === 'requests' ? 'bg-blue-500 text-white' : 'bg-white/80 text-blue-700 border border-blue-200'}`}>Service Requests</button>
              <button onClick={() => setTab('appointments')} className={`px-4 py-2 rounded-lg font-semibold transition ${tab === 'appointments' ? 'bg-blue-500 text-white' : 'bg-white/80 text-blue-700 border border-blue-200'}`}>Appointments</button>
              <button onClick={() => setTab('content')} className={`px-4 py-2 rounded-lg font-semibold transition ${tab === 'content' ? 'bg-blue-500 text-white' : 'bg-white/80 text-blue-700 border border-blue-200'}`}>Site Content</button>
              <button onClick={() => setTab('settings')} className={`px-4 py-2 rounded-lg font-semibold transition ${tab === 'settings' ? 'bg-blue-500 text-white' : 'bg-white/80 text-blue-700 border border-blue-200'}`}>Settings</button>
            </div>
            <div className="bg-white/80 border border-blue-200 rounded-xl p-6 shadow text-left min-h-[220px]">
              {tab === 'requests' && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Service Requests</h3>
                  <table className="w-full text-blue-800 mb-2">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="py-1 text-left">Name</th>
                        <th className="py-1 text-left">Email</th>
                        <th className="py-1 text-left">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoRequests.map(req => (
                        <tr key={req.id} className="border-b border-blue-100">
                          <td className="py-1">{req.name}</td>
                          <td className="py-1">{req.email}</td>
                          <td className="py-1">{req.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-blue-500 text-sm">(Demo data)</p>
                </div>
              )}
              {tab === 'appointments' && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Appointments</h3>
                  {bookings.length === 0 ? (
                    <p className="text-blue-700">No bookings yet.</p>
                  ) : (
                    <table className="w-full text-blue-800 mb-2">
                      <thead>
                        <tr className="border-b border-blue-200">
                          <th className="py-1 text-left">Name</th>
                          <th className="py-1 text-left">Email</th>
                          <th className="py-1 text-left">Service</th>
                          <th className="py-1 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((b, i) => (
                          <tr key={i} className="border-b border-blue-100">
                            <td className="py-1">{b.name}</td>
                            <td className="py-1">{b.email}</td>
                            <td className="py-1">{b.service}</td>
                            <td className="py-1">{b.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
              {tab === 'content' && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Update Site Content</h3>
                  <form onSubmit={handleSiteContentUpdate} className="space-y-4">
                    <div>
                      <label className="block text-blue-700 mb-1">Site Title</label>
                      <input type="text" value={siteTitle} onChange={e => setSiteTitle(e.target.value)} className="w-full px-3 py-2 rounded border border-blue-200 bg-white/90 text-blue-900" />
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-1">Site Description</label>
                      <textarea value={siteDesc} onChange={e => setSiteDesc(e.target.value)} className="w-full px-3 py-2 rounded border border-blue-200 bg-white/90 text-blue-900" />
                    </div>
                    <button type="submit" className="py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition">Save</button>
                  </form>
                </div>
              )}
              {tab === 'settings' && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Settings</h3>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div>
                      <label className="block text-blue-700 mb-1">New Password</label>
                      <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-3 py-2 rounded border border-blue-200 bg-white/90 text-blue-900" />
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-1">Confirm Password</label>
                      <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 rounded border border-blue-200 bg-white/90 text-blue-900" />
                    </div>
                    {passwordMsg && <p className="text-blue-600 text-sm">{passwordMsg}</p>}
                    <button type="submit" className="py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition">Change Password</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
