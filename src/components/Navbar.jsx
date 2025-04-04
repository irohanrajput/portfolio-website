// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full py-4 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-900">tusharr</Link>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-purple-900 hover:text-purple-700">About</a>
          <a href="#experience" className="text-purple-900 hover:text-purple-700">Experience</a>
          <a href="#projects" className="text-purple-900 hover:text-purple-700">Projects</a>
          <a href="#skills" className="text-purple-900 hover:text-purple-700">Skills</a>
        </div>
        <a 
          href="https://card.tushar.wiki" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;