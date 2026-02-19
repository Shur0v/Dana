
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-oat">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 p-24 opacity-5 hidden lg:block">
         <img 
            src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" 
            alt="" 
            className="w-96 h-96"
          />
      </div>
      
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[100%] bg-sage opacity-20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="h-px w-8 bg-terracotta" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-terracotta">Launch Season 2025</span>
          </div>
          <h1 className="font-serif text-6xl md:text-[7rem] leading-[0.95] text-charcoal mb-10">
            Wellness, <br />
            <span className="italic">Reimagined</span> <br />
            As Fine Art.
          </h1>
          <p className="max-w-md text-olive/70 text-lg md:text-xl font-light leading-relaxed mb-12">
            Bridging the gap between luxury curation and hormonal health. We invite you to experience a new standard of feminine vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button className="bg-olive text-cream px-12 py-6 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-charcoal transition-all duration-500 shadow-xl hover:shadow-2xl">
              Shop The First Edition
            </button>
            <a href="#story" className="text-olive text-[10px] tracking-[0.4em] uppercase font-bold border-b border-olive/20 pb-1 hover:border-olive transition-all">
              Read Our Story
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            {/* Main Creative Composition */}
            <div className="rounded-[80px] md:rounded-[120px] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white bg-white">
              <img 
                src="https://www.beactivewear.com.au/cdn/shop/files/evolve-apparel-prime-seamless-bra-champagne-38327332438185_766x1073.png?v=1696764997" 
                alt="Health & Wellness Concept" 
                className="w-full h-auto object-cover transform scale-110 translate-y-4"
              />
            </div>
            {/* Floating Element 1 */}
            <div className="absolute -top-12 -right-12 bg-cream p-8 rounded-full shadow-lg z-20 border border-sage/30 hidden md:block">
               <img 
                  src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" 
                  alt="Badge Icon" 
                  className="w-12 h-12"
                />
            </div>
            {/* Floating Element 2 (Text) */}
            <div className="absolute bottom-12 -left-20 bg-white/90 backdrop-blur-md py-6 px-10 rounded-2xl shadow-xl z-20 hidden xl:block border border-oat">
                <p className="font-serif italic text-2xl text-charcoal">"Pure Intention."</p>
                <p className="text-[9px] tracking-widest uppercase text-olive/50 mt-1">— Formulator's Note</p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Background Wash */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
};
