// App.jsx - Main component with Contact
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'; // Updated Footer now serves as Contact section too
import './App.css';

// Custom Loader Component
const Loader = () => {
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.25
      }
    })
  };

  const letters = "tusharr".split("");

  return (
    <div className="flex items-center justify-center h-screen bg-purple-50">
      <div className="text-center">
        <div className="flex space-x-2">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-5xl font-bold text-purple-900"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4"
        >
          <div className="w-64 h-2 bg-purple-200 rounded-full overflow-hidden mx-auto mt-6">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              className="h-full bg-purple-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

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
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </Router>
  );
};

export default App;