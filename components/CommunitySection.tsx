
import React from 'react';

export const CommunitySection: React.FC = () => {
  const testimonials = [
    {
      name: "Eleanor W.",
      quote: "Finally, a brand that understands the nuance of our bodies. The Hormone Harmony has changed my morning ritual entirely.",
      img: "https://picsum.photos/seed/user1/200/200"
    },
    {
      name: "Sienna M.",
      quote: "The quality is evident from the first dose. No nausea, just sustained calm energy throughout my cycle.",
      img: "https://picsum.photos/seed/user2/200/200"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-sage/20 relative">
       {/* Botanical Watermark */}
       <div className="absolute bottom-0 right-0 opacity-[0.03] p-12 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
          </svg>
       </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-olive tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">Community</span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal italic">Real Stories, Real Balance.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`bg-cream p-12 rounded-[40px] shadow-sm relative transition-all duration-500 hover:shadow-xl ${idx % 2 === 0 ? 'md:-translate-y-8' : 'md:translate-y-8'}`}>
               <div className="mb-8">
                 <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full grayscale mb-6" />
                 <p className="text-charcoal font-serif text-2xl leading-relaxed italic">"{t.quote}"</p>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-px bg-terracotta" />
                 <span className="text-xs tracking-widest uppercase font-bold text-olive">{t.name}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
