
import React from 'react';

export const ProductFeature: React.FC = () => {
  return (
    <section id="vitamin" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-terracotta tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">The Launch</span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal max-w-2xl mx-auto">
            Introducing <span className="italic">Hormone Harmony</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             {/* Organic Background Wash */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-oat/60 rounded-full -z-0 blur-3xl opacity-50" />
             
             <div className="relative z-10 flex justify-center">
                {/* Premium Product Display */}
                <div className="relative group perspective-1000">
                    <div className="w-64 md:w-96 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                        <img 
                          src="https://nehealth.ca/cdn/shop/products/GH_BOTTLE_275cc_Women_sHerbalEssence120s_ccexpress.jpg?v=1734723813" 
                          alt="Hormone Harmony Bottle" 
                          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                        />
                    </div>

                    {/* Ingredient Callouts - Adjusted responsive visibility */}
                    <div className="absolute -top-10 -right-4 md:-right-20 bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl border border-oat max-w-[150px] md:max-w-[200px] z-20">
                        <span className="text-terracotta font-serif italic text-base md:text-lg block mb-1">Ashwagandha</span>
                        <p className="text-[9px] md:text-[10px] text-olive/70 leading-relaxed uppercase tracking-wider font-medium">Premium KSM-66 root extract for cortisol balance.</p>
                    </div>
                    
                    <div className="absolute bottom-10 -left-4 md:-left-20 bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl border border-oat max-w-[150px] md:max-w-[200px] z-20">
                        <span className="text-terracotta font-serif italic text-base md:text-lg block mb-1">Magnesium</span>
                        <p className="text-[9px] md:text-[10px] text-olive/70 leading-relaxed uppercase tracking-wider font-medium">Highly bioavailable glycinate for deep restorative rest.</p>
                    </div>

                    {/* Subtle Badge Shadow Underneath */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-charcoal/5 blur-xl rounded-full -z-10" />
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 border border-sage rounded-full">
                <span className="text-[10px] tracking-widest uppercase font-bold text-olive/60">Clinical Efficacy</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-charcoal italic leading-tight">Restorative Rituals <br/> For The Modern Woman.</h3>
              <p className="text-olive/70 leading-relaxed text-lg font-light">
                Most supplements focus on deficiency. We focus on harmony. Our formula supports the delicate fluctuations of your endocrine system throughout the entire month.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Adaptogens', detail: 'Stress Response' },
                { label: 'Chelated Minerals', detail: 'Max Absorption' },
                { label: 'Plant Based', detail: 'Vegan Certified' },
                { label: 'Zero Fillers', detail: 'Pure Essence' },
              ].map((benefit, idx) => (
                <div key={idx} className="border-t border-sage/50 pt-6 group">
                   <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-olive mb-2 group-hover:text-terracotta transition-colors">{benefit.label}</h4>
                   <p className="text-sm text-olive/60 font-light italic font-serif">{benefit.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-olive text-cream px-12 py-6 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-charcoal transition-all duration-500 shadow-xl hover:shadow-2xl w-full md:w-auto hover:-translate-y-1">
                Secure Your Edition
              </button>
              <p className="text-[9px] text-olive/40 mt-6 tracking-widest uppercase text-center md:text-left">Strictly limited first production run.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
