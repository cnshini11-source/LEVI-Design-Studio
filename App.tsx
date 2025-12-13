import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechSection } from './components/TechSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { ProcessSection } from './components/ProcessSection';
import { Funnel } from './components/Funnel';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <TechSection />
        <WhyChooseMe />
        <ProcessSection />
        <Funnel />
        <Pricing />
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
}

export default App;