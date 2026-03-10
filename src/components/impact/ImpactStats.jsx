import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Students We Aim to Help', sublabel: 'starting at Bryant Middle School' },
  { number: '100%', label: 'Goes to the Cause', sublabel: 'no profit, ever' },
  { number: '∞', label: 'Schools in Our Future', sublabel: 'this is just the beginning' },
];

export default function ImpactStats() {
  return (
    <section className="py-24 md:py-32 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Small Donations,
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Big Differences
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We believe in transparency and direct impact. Here's what we're working toward together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}