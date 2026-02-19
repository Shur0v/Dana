
import React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="bg-oat p-12 md:p-24 rounded-[60px] relative overflow-hidden">
          {/* Subtle Texture */}
          <div className="absolute inset-0 bg-grain opacity-10" />
          
          <div className="relative z-10">
            <span className="text-terracotta tracking-[0.4em] uppercase text-xs font-semibold mb-6 block">Join the Circle</span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8">
              Stay Connected to <br /> <span className="italic">The Rhythm.</span>
            </h2>
            <p className="text-olive/70 text-lg mb-12 max-w-md mx-auto font-light">
              Receive exclusive launch updates, cycle syncing guides, and intentional wellness wisdom delivered softly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/60 border border-olive/10 px-8 py-5 rounded-full text-sm focus:outline-none focus:border-terracotta transition-all"
              />
              <button className="bg-olive text-cream px-10 py-5 rounded-full text-xs tracking-widest uppercase font-semibold hover:bg-charcoal transition-all">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-olive/40 mt-6 tracking-widest uppercase">We respect your space. No spam, only intention.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
