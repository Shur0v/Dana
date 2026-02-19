
import React from 'react';

export const FounderStory: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-sand relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream -skew-x-6 translate-x-12" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-5 relative h-[500px] md:h-[700px]">
          {/* Overlapping Images */}
          <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-20 translate-y-10">
             <img 
               src="https://www.beactivewear.com.au/cdn/shop/files/ceacea-swimwear-luna-crop-light-pink-1195478250_940x1180.png?v=1759205798" 
               alt="Dana Landgren - Intentional Design" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10">
             <img 
               src="https://www.beactivewear.com.au/cdn/shop/files/ceacea-leggings-lembongan-surf-leggings-chocolate-1195478604_561x703.png?v=1759211909" 
               alt="Wellness Lifestyle Textures" 
               className="w-full h-full object-cover grayscale opacity-80"
             />
          </div>
          {/* Abstract Floating Element */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-terracotta/30 rounded-full animate-pulse hidden md:block" />
        </div>

        <div className="lg:col-span-7 space-y-10 lg:pl-12">
          <div>
            <span className="text-terracotta tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">The Founder</span>
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal mb-8 leading-tight">
              A Personal Path to <br />
              <span className="italic">Proactive Healing.</span>
            </h2>
          </div>

          <div className="space-y-6 text-olive/80 text-lg leading-relaxed font-light">
            <p>
              "Dana Landgren wasn't born out of a boardroom. It was born in the quiet moments of my own health journey, navigating the complexities of hormonal changes and the search for truly clean, intentional support."
            </p>
            <p>
              We believe in the power of restraint. We don't believe in more—we believe in better. Every ingredient in our signature vitamin launch has been vetted for its purity, its clinical efficacy, and its relationship to the female biological clock.
            </p>
          </div>

          <div className="pt-8 border-t border-charcoal/10">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-px bg-charcoal" />
              <div className="font-serif italic text-2xl text-charcoal">Dana Landgren</div>
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-olive/50 mt-2 ml-24">Founder & Lead Formulator</p>
          </div>
        </div>
      </div>
    </section>
  );
};
