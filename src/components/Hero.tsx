import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-deep">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
          alt="African Landscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-primary-bright mb-6 border border-white/10">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest text-white">Certified Land Agents in Kenya</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in <span className="text-primary-bright italic">Land Deals</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Linking land sellers to serious buyers and buyers to serious land sellers across Kenya. We ensure every transaction is genuine, transparent, and profitable for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#featured-listings" className="btn-secondary px-8 py-4 text-lg">
                View Properties
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-deep px-8 py-4 text-lg">
                Register as Member
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Properties Listed', val: '500+' },
                { label: 'Successful Deals', val: '250+' },
                { label: 'Registered Members', val: '1.2k' },
                { label: 'Trusted Clients', val: '5k+' }
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-bold text-white">{stat.val}</span>
                  <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -right-64 top-0 w-[800px] h-[800px] bg-primary-bright/10 rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}
