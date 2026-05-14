import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = '' }: CounterProps) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState('0');
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'Properties Listed', val: 500, suffix: '+' },
  { label: 'Successful Deals', val: 247, suffix: '' },
  { label: 'Registered Members', val: 1200, suffix: '+' },
  { label: 'Trusted Clients', val: 5000, suffix: '+' }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-primary-deep mb-2 flex items-center justify-center">
                <Counter value={stat.val} suffix={stat.suffix} />
              </div>
              <div className="h-1.5 w-12 bg-primary-bright rounded-full mb-4" />
              <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent z-[-1]" />
    </section>
  );
}
