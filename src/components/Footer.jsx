// components/Footer.jsx
import React from 'react';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaHackerrank,
  FaCodepen,
  FaMedium
} from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiHashnode } from 'react-icons/si';

const Footer = () => {
  const year = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { name: "Email", icon: <FaEnvelope size={24} />, url: "mailto:itusharsingh27@gmail.com" },
    { name: "LeetCode", icon: <SiLeetcode size={24} />, url: "https://leetcode.com/irohanrajput" },
    { name: "CodeForces", icon: <SiCodeforces size={24} />, url: "https://codeforces.com/profile/irohanrajput" },
    { name: "GitHub", icon: <FaGithub size={24} />, url: "https://github.com/irohanrajput" },
    { name: "LinkedIn", icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/irohanrajput" },
    { name: "Twitter", icon: <FaTwitter size={24} />, url: "https://x.com/irohanrajput" },
    // { name: "HackerRank", icon: <FaHackerrank size={24} />, url: "https://hackerrank.com/irohanrajput" },
    // { name: "CodePen", icon: <FaCodepen size={24} />, url: "https://codepen.io/irohanrajput" },
    { name: "Hashnode", icon: <SiHashnode size={24} />, url: "https://hashnode.com/@irohanrajput" },
    { name: "Medium", icon: <FaMedium size={24} />, url: "https://medium.com/@irohanrajput" }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-purple-800 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 relative inline-block">
              Connect With Me
              <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-purple-400 transform -translate-x-1/2 mt-2"></span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-purple-800/50 hover:bg-purple-700 backdrop-blur-sm transition-all duration-300 
                            flex flex-col items-center justify-center p-4 rounded-xl border border-purple-700/50
                            hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/30 transform hover:-translate-y-1"
                  title={social.name}
                >
                  <div className="mb-3 text-purple-300 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Simple copyright line */}
        <div className="text-center text-purple-300 text-sm pt-4 border-t border-purple-700/30">
          <p>&copy; {year} Tushar Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;