
import React from 'react';

export const RitualSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-sand/30 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-terracotta tracking-[0.4em] uppercase text-xs font-semibold mb-6 block">The Ritual</span>
              <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-tight">
                Designed for <br />
                <span className="italic">Daily Devotion.</span>
              </h2>
            </div>
            
            <div className="space-y-10">
              {[
                { step: "01", title: "Morning Awakening", desc: "Take one capsule with water to synchronize your adrenal response." },
                { step: "02", title: "Midday Balance", desc: "Our chelated minerals support sustained cognitive clarity and mood stability." },
                { step: "03", title: "Evening Restoration", desc: "Magnesium glycinate prepares your nervous system for cellular repair." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-8 group">
                  <span className="font-serif text-3xl italic text-terracotta/40 group-hover:text-terracotta transition-colors">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-serif text-charcoal mb-2">{item.title}</h3>
                    <p className="text-olive/60 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl bg-white border-[12px] border-white">
                <img 
                  src="https://www.beactivewear.com.au/cdn/shop/files/evolve-apparel-prime-seamless-bra-champagne-38327332503721_822x1151.png?v=1696765002" 
                  alt="Daily ritual" 
                  className="w-full h-full object-cover transform scale-110 translate-y-6"
                />
             </div>
             {/* Decorative Badge */}
             <div className="absolute -bottom-10 -right-10 bg-olive p-10 rounded-full shadow-2xl hidden md:block">
                <img 
                  src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" 
                  alt="Badge" 
                  className="w-20 h-20 invert opacity-90"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
