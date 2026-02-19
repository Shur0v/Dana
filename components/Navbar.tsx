
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Vitamin', href: '#vitamin' },
    { name: 'Ritual', href: '#ritual' },
    { name: 'Journal', href: '#journal' },
    { name: 'Our Story', href: '#story' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled || mobileMenuOpen ? 'bg-cream/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://danalandgren.com/cdn/shop/t/4/assets/dana-logo.svg?v=167931460263818052711585287404" 
              alt="Dana Landgren" 
              className={`transition-all duration-500 brightness-0 scale-[2.0] origin-left ${scrolled ? 'h-4 md:h-5' : 'h-6 md:h-7'}`}
            />
          </div>
          
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-olive/80 hover:text-terracotta transition-all text-xs tracking-[0.2em] uppercase font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-olive text-cream px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-charcoal hover:scale-105 transition-all duration-300 shadow-sm active:scale-95">
              Shop Now
            </button>
          </div>

          <button 
            className="md:hidden text-olive p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-cream transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-olive text-2xl font-serif italic tracking-widest uppercase hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-olive text-cream w-full py-5 text-[10px] tracking-[0.3em] uppercase font-semibold shadow-xl">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};
