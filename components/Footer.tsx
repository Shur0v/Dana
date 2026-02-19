
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-24">
          <img 
            src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" 
            alt="Dana Landgren Badge" 
            className="h-24 w-24 invert opacity-80 mb-8"
          />
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-cream/90 mb-4 italic">Balanced. Refined. Yours.</h2>
            <div className="w-12 h-px bg-terracotta/40 mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-cream/30 mb-8">Philosophy</h4>
            <p className="text-cream/40 leading-relaxed text-sm max-w-xs italic font-serif text-lg">
              "To health as an art form—where science meets intention and every dose is a ritual of self-respect."
            </p>
          </div>
          
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-cream/30 mb-8">Shop</h4>
            <ul className="space-y-4 text-xs text-cream/60 tracking-widest uppercase">
              <li><a href="#" className="hover:text-terracotta transition-colors">Vitamins</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Ritual Kits</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 col-span-6">
             <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-cream/30 mb-8">Company</h4>
            <ul className="space-y-4 text-xs text-cream/60 tracking-widest uppercase">
              <li><a href="#" className="hover:text-terracotta transition-colors">The Lab</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Stockists</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-cream/30 mb-8">Join our Circle</h4>
            <p className="text-xs text-cream/50 mb-6 uppercase tracking-wider">Early access and monthly wisdom.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full focus:outline-none placeholder:text-cream/20" />
              <button className="text-cream/40 hover:text-cream">→</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-8">
             <a href="#" className="text-cream/30 hover:text-terracotta transition-colors"><span className="sr-only">Instagram</span>IG</a>
             <a href="#" className="text-cream/30 hover:text-terracotta transition-colors"><span className="sr-only">Pinterest</span>PN</a>
             <a href="#" className="text-cream/30 hover:text-terracotta transition-colors"><span className="sr-only">TikTok</span>TK</a>
          </div>
          <p className="text-[9px] tracking-[0.3em] text-cream/20 uppercase">
            &copy; {new Date().getFullYear()} Dana Landgren. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[9px] tracking-[0.3em] text-cream/20 uppercase">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
