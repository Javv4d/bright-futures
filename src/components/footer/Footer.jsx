import React from 'react';
import { Heart, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-2xl tracking-tight mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Heart className="w-5 h-5 text-amber-400" fill="currentColor" />
              BrightFutures
            </h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Supporting Bryant Middle School students in Dearborn, Michigan through community generosity.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&to=brightfuturessupplies@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4" />
              brightfuturessupplies@gmail.com
            </a>
            <a
              href="#donate"
              className="text-amber-400 hover:text-amber-300 transition-colors font-semibold text-sm"
            >
              Donate Now →
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} BrightFutures. Made with love for our community.
          </p>
          <p className="text-xs text-slate-600">
            All donations go directly to supporting Bryant Middle School, Dearborn MI
          </p>
        </div>
      </div>
    </footer>
  );
}