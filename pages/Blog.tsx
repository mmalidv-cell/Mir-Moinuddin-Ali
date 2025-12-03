import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h1 className="font-serif text-4xl font-bold text-center mb-12">Interior Design Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-neutral-100">
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{post.category}</span>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mt-2 mb-3">{post.title}</h3>
                <div className="flex items-center text-neutral-500 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <button className="text-primary font-bold text-sm hover:text-teal-900 transition-colors">Read More &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
