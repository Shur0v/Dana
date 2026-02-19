
import React from 'react';

export const PressSection: React.FC = () => {
  return (
    <section className="py-12 bg-cream border-y border-sage/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="font-serif text-2xl italic text-olive">VOGUE</span>
           <span className="font-serif text-2xl italic text-olive">ELLE</span>
           <span className="font-serif text-2xl italic text-olive">Goop</span>
           <span className="font-serif text-2xl italic text-olive">BAZAAR</span>
           <span className="font-serif text-2xl italic text-olive">The Zoe Report</span>
        </div>
      </div>
    </section>
  );
};
