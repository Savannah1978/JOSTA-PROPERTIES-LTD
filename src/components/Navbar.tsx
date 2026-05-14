import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Properties', href: '#featured-listings' },
    { name: 'Accommodation', href: '#accommodation' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Typographic Logo */}
        <div className="flex items-center gap-3">
           <div className="h-10 w-10 bg-primary-deep rounded-lg flex items-center justify-center shadow-lg">
             <span className="text-white font-bold text-2xl">J</span>
           </div>
           <div className={`flex flex-col ${isScrolled ? 'text-primary-deep' : 'text-white'}`}>
             <span className="font-bold text-xl leading-none">JOSTA</span>
             <span className="text-[10px] tracking-widest uppercase opacity-80">Properties Limited</span>
           </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-semibold hover:text-primary-bright transition-colors ${isScrolled ? 'text-primary-deep' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className={`flex items-center gap-2 font-bold ${isScrolled ? 'text-primary-deep' : 'text-white'}`}>
            <Phone className="w-5 h-5" />
            <span>+254 757 728 585</span>
          </button>
          <button className="btn-secondary py-2 flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Join Our Team
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white bg-primary-deep p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold text-primary-deep hover:text-primary-bright"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
                <button className="btn-primary w-full">Join Our Team</button>
                <button className="btn-outline w-full">Contact Support</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
