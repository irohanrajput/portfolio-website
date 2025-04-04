// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-900 mb-6"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-lg text-gray-700 mb-4">
            I'm a Full Stack Developer with a passion for backend development and API architecture.
            While I enjoy creating intuitive user interfaces, my true enthusiasm lies in building
            robust server-side solutions, designing efficient database schemas, and crafting
            scalable RESTful APIs that power modern applications.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Currently pursuing my B.Tech in Computer Science at KIET Group of Institutions,
            I've worked on various freelance projects where I've implemented backend solutions using
            Django, Node.js, and Express. I find particular satisfaction in solving complex system
            design challenges and optimizing API performance.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I'm currently exploring blockchain technology and smart contract development, 
            fascinated by the potential of decentralized systems to transform digital interactions.
            Learning Solidity and building simple DApps has been my recent focus as I expand my
            technical repertoire.
          </p>
          <p className="text-lg text-gray-700">
            When not coding, I'm an active participant in the open-source community, contributing to
            projects and attending hackathons where I can collaborate with like-minded developers
            and continue to grow my skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;