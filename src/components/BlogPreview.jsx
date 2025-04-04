// components/BlogPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BlogPreview = ({ post }) => {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-4">
          <p className="text-sm text-purple-600 mb-1">{post.date}</p>
          <h4 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h4>
          <p className="text-gray-700 text-sm line-clamp-2">{post.brief}</p>
          <p className="mt-2 text-purple-900 text-sm font-medium">Read more →</p>
        </div>
      </div>
    </motion.a>
  );
};

export default BlogPreview;