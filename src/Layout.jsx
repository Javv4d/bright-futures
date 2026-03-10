import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Floating navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Heart className={`w-5 h-5 transition-colors duration-300 ${scrolled ? 'text-amber-500' : 'text-amber-400'}`} fill="currentColor" />
            <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              BrightFutures
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className={`text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'}`}>
              Mission
            </a>
            <a href="#donate" className={`text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'}`}>
              Donate
            </a>
            <a 
              href="#donate" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Give Now
            </a>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}