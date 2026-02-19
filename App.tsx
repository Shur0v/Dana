
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PressSection } from './components/PressSection';
import { ProductFeature } from './components/ProductFeature';
import { RitualSection } from './components/RitualSection';
import { TrainingSection } from './components/TrainingSection';
import { FounderStory } from './components/FounderStory';
import { EducationSection } from './components/EducationSection';
import { CommunitySection } from './components/CommunitySection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-terracotta/20 selection:text-olive">
      {/* Background Texture Layer */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-grain" />

      <Navbar />
      
      <main>
        <Hero />
        <PressSection />
        <ProductFeature />
        <RitualSection />
        <TrainingSection />
        <FounderStory />
        <EducationSection />
        <CommunitySection />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default App;
