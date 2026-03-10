import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 relative">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="Students in a classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-5 border border-slate-100 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-semibold text-slate-900">Dearborn, MI</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bryant Middle School serves a diverse community of learners
              </p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Just Students,
              <br />
              <span className="text-amber-500">Making a Difference</span>
            </h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                We're a group of students who saw a problem and decided to do something about it. 
                We know firsthand what it feels like to need supplies, resources, or just a little 
                extra support to succeed in school.
              </p>
              <p>
                We're starting with <strong className="text-slate-700">Bryant Middle School</strong> in 
                Dearborn, Michigan, a school close to our hearts. But this is just the beginning. 
                Our dream is to grow and support more schools in our community and beyond.
              </p>
              <p>
                We're not a company. We're not here to profit. We're just students trying to make 
                a difference, one school at a time.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-amber-600">
              <Heart className="w-5 h-5" fill="currentColor" />
              <span className="font-semibold">100% of donations go directly to the students</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}