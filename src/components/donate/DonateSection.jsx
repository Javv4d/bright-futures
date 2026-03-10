import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink, Shield, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const suggestedAmounts = [
  { amount: '$5', description: 'Pencils & notebooks for a student' },
  { amount: '$15', description: 'A new book for the classroom' },
  { amount: '$25', description: 'Art supplies for a class' },
  { amount: '$50', description: 'Technology resources' },
  { amount: '$100', description: 'Classroom improvement fund' },
  { amount: 'Any', description: 'Every dollar makes a difference' },
];

export default function DonateSection() {
  const cashAppTag = '$SaintGrav';

  return (
    <section id="donate" className="py-24 md:py-32 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Make a Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Ready to Help?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            We're students doing this from the heart, no middlemen, no overhead. Donations go directly to students in need, starting with Bryant Middle School 
            and growing to more schools as we go. 🎓
          </p>
        </motion.div>

        {/* Suggested amounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
        >
          {suggestedAmounts.map((item, i) => (
            <motion.div
              key={item.amount}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 cursor-default group text-center"
            >
              <div className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                {item.amount}
              </div>
              <div className="text-xs text-slate-400 leading-snug">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* CashApp donation card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Donate via CashApp</h3>
                    <p className="text-slate-400 text-sm">Fast, easy, and secure</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">CashApp Tag</p>
                  <p className="text-2xl font-bold text-green-400 font-mono">{cashAppTag}</p>
                </div>
                <a href={`https://cash.app/${cashAppTag}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    Open CashApp to Donate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Student-run initiative. 100% goes to kids who need it most</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Venmo donation card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Donate via Venmo</h3>
                    <p className="text-slate-400 text-sm">Fast, easy, and secure</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Venmo Tag</p>
                  <p className="text-2xl font-bold text-blue-400 font-mono">@MichiganBrightFuture</p>
                </div>
                <a href="https://venmo.com/MichiganBrightFuture" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    Open Venmo to Donate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Student-run initiative. 100% goes to kids who need it most</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}