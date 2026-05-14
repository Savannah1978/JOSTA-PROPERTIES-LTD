import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Wallet, Gift, Network, CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'Become part of the official Josta Properties team',
  'Ability to upload referrals and leads via your dashboard',
  'Exclusive referral rewards and commissions',
  'Access to a network of serious land buyers and sellers',
  'Regular updates on prime land investment opportunities'
];

export default function MembershipSection() {
  return (
    <section id="membership" className="py-24 bg-accent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-bright font-bold uppercase tracking-wider mb-2 block">Grow With Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-deep mb-6">
              Become a Josta <br />
              <span className="text-primary-bright">Property Connector</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join our network and start earning through professional real estate networking. We empower our members with the tools and opportunities to thrive in the Kenyan land market.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary-deep flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary-deep">
                   <Wallet className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-500 uppercase">Joining Fee</p>
                   <p className="text-xl font-bold text-primary-deep">KES 100</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary-bright">
                   <Gift className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-500 uppercase">Referral Earns</p>
                   <p className="text-xl font-bold text-primary-bright">Rewards</p>
                 </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-none shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-bright rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl shrink-0 z-10">
              Join For<br/>KES 100
            </div>
            
            <h3 className="text-2xl font-bold text-primary-deep mb-8">Registration Form</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+254 7..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Location (County)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Busia"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Payment Method</label>
                <div className="flex gap-4">
                  <div className="flex-1 p-4 border-2 border-primary-bright bg-primary-bright/5 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">M</div>
                    <span className="font-bold text-primary-deep">MPESA STK Push</span>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full py-4 text-lg">
                Pay KES 100 & Register
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-center text-gray-500 text-xs">
                By registering, you agree to our Membership Terms and Conditions.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
