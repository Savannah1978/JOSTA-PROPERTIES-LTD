import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-bright font-bold uppercase tracking-wider mb-2 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-deep mb-4"
          >
            Contact Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Have a question or a land deal you'd like to discuss? Our team is ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent p-6 rounded-2xl flex items-start gap-4 border border-primary-bright/5"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0 text-primary-bright">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary-deep mb-1">Our Office</h4>
                <p className="text-gray-600 text-sm">Amukura House RM 17, Busia Town, Kenya</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent p-6 rounded-2xl flex items-start gap-4 border border-primary-bright/5"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0 text-primary-bright">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary-deep mb-1">Call Us</h4>
                <div className="flex flex-col text-gray-600 text-sm">
                  <a href="tel:+254757728585" className="hover:text-primary-deep">+254 757 728 585</a>
                  <a href="tel:+254718944980" className="hover:text-white">+254 718 944 980</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-accent p-6 rounded-2xl flex items-start gap-4 border border-primary-bright/5"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0 text-primary-bright">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary-deep mb-1">Email Us</h4>
                <a href="mailto:info@jostaproperties.co.ke" className="text-gray-600 text-sm hover:text-primary-deep">info@jostaproperties.co.ke</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-primary-deep p-6 rounded-2xl text-white flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Working Hours</h4>
                <p className="text-gray-400 text-sm">Mon - Sat: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-400 text-sm">Sunday: Closed</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Buying Land</option>
                  <option>Selling Land</option>
                  <option>Membership Support</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all resize-none"
                />
              </div>

              <button className="btn-primary w-full py-4 text-lg">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
