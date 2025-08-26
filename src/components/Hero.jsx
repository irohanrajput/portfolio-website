// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-purple-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-transparent opacity-30"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl text-purple-700 font-medium mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-6xl md:text-7xl font-extrabold text-purple-900 mb-4">
            Tushar Singh
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
            a full-stack web dev from India
          </h3>
          <h5 className="text-xl md:text-xl  text-gray-700 mb-6">
            I write APIs and build servers to buy guitars :D
          </h5>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:itusharsingh27@gmail.com"
              className="text-purple-900 hover:text-purple-700"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://github.com/irohanrajput"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-900 hover:text-purple-700"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/irohanrajput"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-900 hover:text-purple-700"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://x.com/irohanrajput"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-900 hover:text-purple-700"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://codilio.com/profile/irohanrajput"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-900 hover:text-purple-700"
            >
              <FaCode size={28} />
            </a>
          </div>
          <div className="space-x-4">
            <a
              href="#experience"
              className="px-6 py-3 bg-purple-900 text-white rounded-md shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              View Experience
            </a>
            <a
              href="https://resume.tushar.wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-900 text-purple-900 rounded-md hover:bg-purple-100 transition-transform transform hover:scale-105" 
            >
              Resume
            </a>
            <a
              href="https://card.tushar.wiki"
              className="px-6 py-3 bg-purple-900 text-white rounded-md shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              Profile Card
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
