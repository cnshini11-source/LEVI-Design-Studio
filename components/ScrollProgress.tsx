import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
      <div className="absolute inset-0 bg-slate-900/20" />
      <motion.div 
        style={{ scaleX, transformOrigin: "100%" }}
        className="absolute top-0 right-0 left-0 h-full bg-cyan-500"
      />
    </div>
  );
};