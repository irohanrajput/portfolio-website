

// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Tushar Singh</h3>
            <p className="text-purple-200">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="mailto:itusharsingh27@gmail.com" className="text-white hover:text-purple-200 transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://github.com/irohanrajput" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/irohanrajput" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://x.com/irohanrajput" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
          <p>&copy; {year} Tushar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;