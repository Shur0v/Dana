
import React from 'react';

export const TrainingSection: React.FC = () => {
  const programs = [
    {
      title: "Youthful You Home Workout Program",
      price: "$110.00",
      img: "https://danalandgren.com/cdn/shop/products/Dana_Website_Product_Image_600x600px_youthfulyou_1024x1024.jpg?v=1618434332",
      badge: "100+ Pages"
    },
    {
      title: "Pelvic Floor and Core Program",
      price: "$60.00",
      img: "https://danalandgren.com/cdn/shop/products/Dana_Website_Product_Image_600x600px_pelvicfloorcore_1024x1024.jpg?v=1618434167",
      badge: "3 Levels"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-oat/40 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sage opacity-10 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="text-terracotta tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Movement & Strength</span>
          <h2 className="font-serif text-5xl md:text-7xl text-charcoal max-w-3xl mx-auto leading-tight">
            Strengthen From <span className="italic">The Inside Out.</span>
          </h2>
          <div className="w-16 h-px bg-olive/20 mx-auto mt-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {programs.map((program, idx) => (
            <div key={idx} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative mb-10 transition-transform duration-700 group-hover:-translate-y-4">
                {/* Product Card Styling with Shadow and "Paper" layering */}
                <div className="absolute inset-0 bg-white/40 rounded-[40px] translate-x-4 translate-y-4 -z-10" />
                
                {/* Animated Logo / Badge Overlay */}
                <div className="absolute -top-6 -left-6 z-30 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <div className="bg-cream p-4 rounded-full shadow-xl border border-sage/30 flex items-center justify-center">
                    <img 
                      src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" 
                      alt="Rotating Badge" 
                      className="w-12 h-12 animate-[spin_15s_linear_infinite]"
                    />
                  </div>
                </div>

                <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white p-6 md:p-12 flex items-center justify-center border border-sage/20">
                   <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Subtle Text Tag Overlay */}
                  <div className="absolute top-8 right-8 bg-terracotta/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-[9px] tracking-[0.2em] uppercase font-bold shadow-lg">
                    {program.badge}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="font-serif text-3xl text-charcoal hover:text-terracotta transition-colors duration-300">
                  {program.title}
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-olive/40 text-xs tracking-widest uppercase font-bold">{program.price}</span>
                </div>
                <button className="text-olive text-[10px] tracking-[0.3em] uppercase font-bold border-b border-olive/20 pb-1 hover:border-olive transition-all group-hover:italic">
                  View Program Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Badge Watermark */}
        <div className="flex justify-center mt-32 opacity-10">
           <img 
            src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" 
            alt="" 
            className="w-32 h-32"
          />
        </div>
      </div>
    </section>
  );
};
