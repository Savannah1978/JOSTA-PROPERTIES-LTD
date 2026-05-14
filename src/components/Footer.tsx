import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Identity */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary-bright rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div className="flex flex-col text-white">
                <span className="font-bold text-xl leading-none">JOSTA</span>
                <span className="text-[10px] tracking-widest uppercase opacity-80">Properties Limited</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed italic">
              "Linking Land Sellers to Serious Buyers and Buyers to Serious Land Sellers."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary-bright hover:border-primary-bright transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Quick Links
              <div className="h-1 w-8 bg-primary-bright rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              {['Home', 'About Us', 'Featured Properties', 'Membership Info', 'Real Estate Blog'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-bright transition-colors flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Get in Touch
              <div className="h-1 w-8 bg-primary-bright rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-bright shrink-0" />
                <span>Amukura House RM 17, Busia, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-bright shrink-0" />
                <div className="flex flex-col">
                   <a href="tel:+254757728585" className="hover:text-white">+254 757 728 585</a>
                   <a href="tel:+254718944980" className="hover:text-white">+254 718 944 980</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-bright shrink-0" />
                <a href="mailto:info@jostaproperties.co.ke" className="hover:text-white truncate">info@jostaproperties.co.ke</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Newsletter
              <div className="h-1 w-8 bg-primary-bright rounded-full" />
            </h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Subscribe to get latest property listings and investment tips directly in your inbox.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary-bright transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-bright text-white px-3 py-1.5 rounded-md text-xs font-bold hover:bg-primary-bright/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Josta Properties Limited. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-bright/5 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </footer>
  );
}
