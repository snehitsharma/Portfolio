// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from "./components/Home"
import './App.css'

const App = () => {
  const navbarLinks = [
    { url: '/about', title: 'About' },
    { url: '/contact', title: 'Contact' },
  ];

  return (
    <Router>
      <div>
        <Navbar navbarLinks={navbarLinks} />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render the MainContent component */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
