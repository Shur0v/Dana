
import React from 'react';

export const EducationSection: React.FC = () => {
  const articles = [
    {
      title: "Understanding the Luteal Phase",
      category: "Cycle Syncing",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
      size: "hero"
    },
    {
      title: "The Role of Magnesium in Sleep",
      category: "Ingredient Spotlight",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
      size: "stacked"
    },
    {
      title: "Meditation for Cortisol Control",
      category: "Ritual",
      img: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80&w=600",
      size: "stacked"
    },
    {
      title: "Nutrient Density in Whole Foods",
      category: "Nutrition",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
      size: "grid"
    },
    {
      title: "The Gut-Brain Connection",
      category: "Biology",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
      size: "grid"
    },
    {
      title: "Morning Light Exposure",
      category: "Circadian Rhythm",
      img: "https://danalandgren.com/cdn/shop/t/4/assets/featured_zone_image.png?v=28421178854193176481585276371",
      size: "grid"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-terracotta tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">The Journal</span>
            <h2 className="font-serif text-5xl md:text-8xl text-charcoal leading-[0.9]">
              Empower Through <br /> <span className="italic">Proactive Insight.</span>
            </h2>
          </div>
          <p className="max-w-sm text-olive/60 text-sm leading-relaxed mb-2">
            Dive deep into the science of feminine health. Our editorial team curates research-backed guides to support your transition into a state of total harmony.
          </p>
        </div>

        {/* Row 1: Asymmetrical Hero + Stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-[50px] aspect-[16/10] mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={articles[0].img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt={articles[0].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                 <span className="text-white/80 tracking-[0.3em] uppercase text-[10px] mb-4 block font-bold">{articles[0].category}</span>
                 <h3 className="text-white font-serif text-3xl md:text-6xl max-w-xl">{articles[0].title}</h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-10">
            {articles.slice(1, 3).map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={article.img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={article.title}
                  />
                </div>
                <span className="text-terracotta tracking-[0.2em] uppercase text-[9px] mb-2 block font-bold">{article.category}</span>
                <h3 className="text-charcoal font-serif text-2xl group-hover:italic transition-all duration-300">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Series Banner */}
        <div className="w-full bg-olive rounded-[60px] p-10 md:p-20 mb-20 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
             <img src="https://danalandgren.com/cdn/shop/files/badge.svg?v=9011792248909572116" alt="" className="w-64 h-64 invert" />
           </div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="text-cream">
               <span className="tracking-[0.4em] uppercase text-[10px] opacity-60 mb-6 block font-bold">Featured Series</span>
               <h3 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Mastering Your <br/><span className="italic">Metabolic Health.</span></h3>
               <p className="text-cream/70 text-sm md:text-base leading-relaxed max-w-md mb-10">
                 A comprehensive 4-part series led by Dana Landgren on stabilizing blood sugar to optimize hormone production.
               </p>
               <button className="bg-cream text-olive px-10 py-5 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-terracotta hover:text-white transition-all">
                 Explore the Series
               </button>
             </div>
             <div className="hidden lg:block">
                <div className="aspect-video rounded-[30px] overflow-hidden shadow-2xl border-8 border-white/5">
                   <img src="https://danalandgren.com/cdn/shop/t/4/assets/newsletter.jpg?v=127025371989097997141585282007" alt="Metabolic health" className="w-full h-full object-cover grayscale-[30%]" />
                </div>
             </div>
           </div>
        </div>

        {/* Row 2: Grid of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
           {articles.slice(3).map((article, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[30px] aspect-square mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={article.img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt={article.title}
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
                <span className="text-terracotta tracking-[0.2em] uppercase text-[9px] mb-2 block font-bold">{article.category}</span>
                <h3 className="text-charcoal font-serif text-2xl group-hover:text-terracotta transition-all duration-300">{article.title}</h3>
             </div>
           ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="text-olive text-[10px] tracking-[0.4em] uppercase font-bold border border-olive/10 px-12 py-6 rounded-full hover:bg-olive hover:text-white transition-all duration-500">
            View the Complete Archive
          </button>
        </div>
      </div>
    </section>
  );
};
