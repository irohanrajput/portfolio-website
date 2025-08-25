

// components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "PHP", "C++", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django Rest Framework", "Flask", "FastAPI","Selenium", "BeautifulSoup", "Laravel", "React.js", "Express.js", "Node.js", "Next.js", "React Native", "TailwindCSS"]
    },
    {
      title: "Tools & Technologies",
      skills: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "Supabase", "Docker", "Linux", "Git", "GitHub", "AWS", "Postman"]
    },
    {
      title: "Blockchain",
      skills: ["Blockchain", "Solana"]
    }
    ];

  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-900 mb-12"
        >
          Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="px-4 py-2 bg-white border border-purple-200 rounded-md text-purple-900 shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;