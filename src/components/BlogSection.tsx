
import React from 'react';
import { Calendar, ArrowUp } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for architecting large-scale React applications with proper state management and component organization.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
    },
    {
      title: 'Modern CSS Techniques for Better UX',
      excerpt: 'Exploring advanced CSS features like Grid, Flexbox, and custom properties to create stunning user interfaces.',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['CSS', 'UI/UX', 'Frontend'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop'
    },
    {
      title: 'Node.js Performance Optimization',
      excerpt: 'Tips and techniques for optimizing Node.js applications for better performance and scalability.',
      date: '2024-01-01',
      readTime: '10 min read',
      tags: ['Node.js', 'Performance', 'Backend'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">
                  <span>Read More</span>
                  <ArrowUp className="transform rotate-45" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
