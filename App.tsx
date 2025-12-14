import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechSection } from './components/TechSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { ProcessSection } from './components/ProcessSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-[#010206] min-h-screen text-white selection:bg-cyan-500/30">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <TechSection />
        <WhyChooseMe />
        <PortfolioCarousel />
        <ProcessSection />
        <Pricing />
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
}

export default App;