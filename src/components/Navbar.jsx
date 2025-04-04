// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    <nav className={`fixed w-full py-3 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-900">tusharr</Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-purple-900 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-purple-900 hover:text-purple-700 transition-colors">About</a>
          <a href="#experience" className="text-purple-900 hover:text-purple-700 transition-colors">Experience</a>
          <a href="#projects" className="text-purple-900 hover:text-purple-700 transition-colors">Projects</a>
          <a href="#skills" className="text-purple-900 hover:text-purple-700 transition-colors">Skills</a>
          {/* <a href="#contact" className="text-purple-900 hover:text-purple-700 transition-colors">More about me ??</a> */}
          <a 
            href="#contact" 
            className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Connect with me
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col px-6 py-4 space-y-3">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-purple-900 hover:text-purple-700 transition-colors py-2"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-purple-900 hover:text-purple-700 transition-colors py-2"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-purple-900 hover:text-purple-700 transition-colors py-2"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-purple-900 hover:text-purple-700 transition-colors py-2"
          >
            Skills
          </a>
         
          <a 
            href="#contact" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)} 
            className="px-4 py-2 bg-purple-900 text-white rounded text-center hover:bg-purple-700 transition-colors"
          >
            Connect with me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;