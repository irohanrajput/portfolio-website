

// components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-900 mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 relative pl-8 border-l-2 border-purple-300"
            >
              <span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-900 transform -translate-x-1/2"></span>
              <div className="flex flex-wrap items-center mb-1 gap-2">
                <h3 className="text-xl font-bold text-purple-900">{exp.role}</h3>
                <span className="px-2 py-0.5 bg-purple-200 text-purple-800 text-xs rounded-full">
                  {exp.roleType}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors">
                  {exp.company}
                </a>
                <span className="text-sm text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-gray-600 mb-2">{exp.location}</p>
              <div className="mb-3">
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <ul className="list-disc list-inside text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;