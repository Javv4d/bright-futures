import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: BookOpen,
    title: 'Educational Resources',
    description: 'Providing books, technology, and learning materials that every student needs to succeed in today\'s world.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Building a stronger community around Bryant Middle School by connecting donors directly with student needs.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: Lightbulb,
    title: 'Brighter Futures',
    description: 'Investing in programs and supplies that inspire creativity, confidence, and academic achievement.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            We See It Every Day
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Every single day, we see classmates showing up to school with nothing: no pencils, no notebooks, no supplies at all. 
            Not because they forgot them, but because they were never able to get them in the first place.
          </p>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            This isn't a one-time thing. It's a <span className="text-slate-800 font-semibold">widespread problem</span> that 
            affects countless kids and makes it harder for them to focus, participate, and succeed. As students ourselves, 
            we refuse to just look the other way. We're taking action to make sure every kid has what they need to show up ready to learn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-100/50 h-full">
                <div className={`w-14 h-14 rounded-xl ${item.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}