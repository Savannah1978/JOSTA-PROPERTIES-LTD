import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/254757728585"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+254718944980"
        initial={{ opacity: 0, scale: 0, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="bg-primary-deep text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <PhoneCall className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
