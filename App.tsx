import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechSection } from './components/TechSection';
import { UXShowcase } from './components/UXShowcase';
import { WhyChooseMe } from './components/WhyChooseMe';
import { ProcessSection } from './components/ProcessSection';
import { Funnel } from './components/Funnel';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30">
      <Header />
      <main>
        <Hero />
        <TechSection />
        <WhyChooseMe />
        <ProcessSection />
        <UXShowcase />
        <Funnel />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;