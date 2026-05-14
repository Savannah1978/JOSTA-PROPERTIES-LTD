import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Heart, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We maintain the highest standards of honesty in every transaction.' },
  { icon: Eye, title: 'Transparency', desc: 'No hidden fees. Every deal is open and verified for your peace of mind.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: 'Our clients are at the heart of everything we do.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Leveraging modern technology to simplify land ownership in Kenya.' }
];

const reasons = [
  'Genuine land connections',
  'Affordable membership opportunities',
  'Trusted and professional services',
  'Fast customer support',
  'Reliable property networking across Kenya'
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Company Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-bright/10 rounded-full blur-2xl" />
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern African Architecture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 text-primary-bright">Est. 2024</p>
                <h3 className="text-3xl font-bold">A Legacy of Trust</h3>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-bright font-bold uppercase tracking-wider mb-2 block">About Josta Properties</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-deep mb-6">
              Your Professional Real Estate Partner in Busia
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Josta Properties Limited is a trusted Kenyan real estate company based in Busia, connecting genuine land sellers with serious buyers through professionalism, honesty, and transparency.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We help clients find valuable property opportunities while building trusted relationships and empowering members through affordable real estate networking and referral opportunities across Kenya.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-bright/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary-bright" />
                  </div>
                  <span className="text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-deep p-10 rounded-3xl text-white relative group overflow-hidden"
          >
            <Target className="w-12 h-12 text-primary-bright mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To provide reliable, transparent, and professional real estate services that connect genuine buyers and sellers across Kenya.
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-accent p-10 rounded-3xl border border-primary-bright/10 relative group overflow-hidden"
          >
            <Eye className="w-12 h-12 text-primary-deep mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-3xl font-bold text-primary-deep mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become Kenya’s most trusted and leading land and property connection company.
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-bright/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-primary-deep mb-4">Our Core Values</h3>
            <div className="h-1.5 w-20 bg-primary-bright mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-bright transition-all group"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-bright group-hover:text-white transition-colors">
                  <val.icon className="w-7 h-7 text-primary-deep group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary-deep mb-3">{val.title}</h4>
                <p className="text-gray-500">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
