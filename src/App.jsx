// App.jsx - Main component with Contact
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'; // Updated Footer now serves as Contact section too
import './App.css';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      <div className="app">
        
          <>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    {/* Footer now serves as Contact section too */}
                  </>
                } 
              />
            </Routes>
            <Footer />
          </>
        
      </div>
    </Router>
  );
};

export default App;