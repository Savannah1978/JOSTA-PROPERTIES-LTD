import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Samuel Okello',
    role: 'Real Estate Investor',
    content: 'Josta Properties helped me acquire a prime plot in Busia with zero stress. Their transparency regarding Title Deeds is unmatched in the region.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Mary Wanjiku',
    role: 'Home Owner',
    content: 'I joined as a member for just 100 bob and managed to refer a buyer. The referral reward was processed quickly as promised!',
    image: 'https://images.unsplash.com/photo-1548273515-edcb6a40076a?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Brian Maloba',
    role: 'Land Seller',
    content: 'Selling my inherited land was difficult until I met the Josta team. They found a serious buyer within two weeks at a great price.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-bright font-bold uppercase tracking-wider mb-2 block"
          >
            Client Success
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-deep mb-4"
          >
            Trusted by Thousands
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-accent p-8 rounded-3xl relative border border-gray-100 hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary-bright/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary-bright text-primary-bright" />)}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
                <div>
                  <h4 className="font-bold text-primary-deep">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
