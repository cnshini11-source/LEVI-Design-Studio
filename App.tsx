import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero'; // Critical: Keep Hero eager loaded
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { ScrollProgress } from './components/ScrollProgress';
import { MouseSpotlight } from './components/MouseSpotlight';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// Lazy Load Below-the-fold components
// We use a helper to handle named exports with React.lazy
const lazyLoad = (importFunc: any, componentName: string) => {
  return lazy(() => importFunc.then((module: any) => ({ default: module[componentName] })));
};

const TechSection = lazyLoad(import('./components/TechSection'), 'TechSection');
const WhyChooseMe = lazyLoad(import('./components/WhyChooseMe'), 'WhyChooseMe');
const PortfolioCarousel = lazyLoad(import('./components/PortfolioCarousel'), 'PortfolioCarousel');
const ProcessSection = lazyLoad(import('./components/ProcessSection'), 'ProcessSection');
const Pricing = lazyLoad(import('./components/Pricing'), 'Pricing');
const Footer = lazyLoad(import('./components/Footer'), 'Footer');

// A lightweight fallback component to prevent layout shifts (CLS) during lazy loading
const SectionLoader = () => (
  <div className="w-full h-[500px] flex items-center justify-center bg-[#010206]">
    <div className="w-1 h-20 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full animate-pulse" />
  </div>
);

function App() {
  return (
    <div className="bg-[#010206] min-h-screen text-white selection:bg-cyan-500/30 overflow-hidden">
      <MouseSpotlight />
      <Header />
      <ScrollProgress />
      <WhatsAppFloat />
      
      <main>
        {/* Hero is critical for LCP, so it's rendered immediately */}
        <Hero />
        
        {/* All subsequent sections are lazy loaded */}
        <Suspense fallback={<SectionLoader />}>
            <div className="lazy-section">
                <TechSection />
            </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div className="lazy-section">
                <WhyChooseMe />
             </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div className="lazy-section">
                <PortfolioCarousel />
             </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div className="lazy-section">
                <ProcessSection />
             </div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
             <div className="lazy-section">
                <Pricing />
             </div>
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-20 bg-slate-950" />}>
         <Footer />
      </Suspense>
      
      <AccessibilityMenu />
    </div>
  );
}

export default App;