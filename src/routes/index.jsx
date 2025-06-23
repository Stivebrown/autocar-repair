import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Blog from '../pages/Blog';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
);

export default AppRoutes;
