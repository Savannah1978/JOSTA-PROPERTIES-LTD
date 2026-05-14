import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Landmark, ArrowRightLeft } from 'lucide-react';

export default function CommissionSection() {
  return (
    <section className="py-24 bg-primary-deep text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Deals, <br />
              <span className="text-primary-bright">Exceptional Value</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              We believe in fair trade. Our commission structure is simple and transparent, ensuring both buyers and sellers get the best value from every land transaction.
            </p>
            <div className="flex items-center gap-4 text-primary-bright font-bold text-xl">
              <ArrowRightLeft className="w-8 h-8" />
              <span>Direct connections. Zero hidden fees.</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-primary-bright rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-bright/20">
                <Landmark className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">FOR SELLERS</h3>
              <p className="text-gray-400 mb-6">List your land with the most trusted agency in Busia.</p>
              <div className="text-4xl font-extrabold text-white">
                10% <span className="text-sm font-normal text-gray-400 block uppercase tracking-widest mt-1">Selling Price</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <UserCheck className="text-primary-deep w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">FOR BUYERS</h3>
              <p className="text-gray-400 mb-6">Acquire your dream plot with legal and verified documentation.</p>
              <div className="text-4xl font-extrabold text-primary-bright">
                10% <span className="text-sm font-normal text-gray-400 block uppercase tracking-widest mt-1">Buying Price</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-bright/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
