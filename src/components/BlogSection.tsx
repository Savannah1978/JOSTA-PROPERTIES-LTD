import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: '5 Tips for First-Time Land Buyers in Busia',
    excerpt: 'Navigate the local land market with confidence. Learn about title verification and zoning laws.',
    date: 'May 12, 2026',
    author: 'Josta Admin',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Why Busia is the Next Big Real Estate Hub',
    excerpt: 'With increasing cross-border trade, land values in Busia are projected to grow by 20% this year.',
    date: 'May 10, 2026',
    author: 'Investment Desk',
    image: 'https://images.unsplash.com/photo-1449156003053-c306a04719e8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Modern Farming: Land Selection Guide',
    excerpt: 'Choosing the right soil and location for your agricultural projects in Western Kenya.',
    date: 'May 05, 2026',
    author: 'Agri-Expert',
    image: 'https://images.unsplash.com/photo-1523348830342-d01f9fa59b19?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-accent/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
          <div>
            <span className="text-primary-bright font-bold uppercase tracking-wider mb-2 block">Insights & Tips</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-deep">Real Estate Blog</h2>
          </div>
          <button className="btn-outline border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white px-6 py-2 text-sm">
            Read All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <Calendar className="w-3 h-3 text-primary-bright" />
                  <span className="text-[10px] font-bold text-gray-700">{post.date}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary-bright mb-3">
                  <User className="w-3 h-3" />
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-deep mb-4 group-hover:text-primary-bright transition-colors line-clamp-2 min-h-[56px]">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-primary-deep font-bold hover:gap-4 transition-all cursor-pointer">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
