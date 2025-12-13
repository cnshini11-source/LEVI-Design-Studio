import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  
  // Smooth spring for the visual fill
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  // Calculate position for the floating indicator
  // We use useTransform to map the progress 0-1 to a percentage string 0%-100%
  const yPosition = useTransform(smoothProgress, value => `${value * 100}%`);

  return (
    <div className="fixed top-0 right-0 h-screen w-16 z-[60] pointer-events-none hidden md:block">
      {/* The Track Line */}
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white/5 border-l border-white/5"></div>
      
      {/* The Filled Line */}
      <motion.div 
        style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
        className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
      />

      {/* The Follower Thumb & Label */}
      <motion.div 
        className="absolute right-0 w-full flex items-center justify-end pr-2"
        style={{ top: yPosition, translateY: '-50%' }}
      >
        <div className="bg-slate-900/80 backdrop-blur border border-cyan-500/30 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-cyan-400 tabular-nums shadow-lg">
           {percentage}%
        </div>
        <div className="w-2 h-[1px] bg-cyan-500 mr-[-8px] ml-1" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)] translate-x-[50%]" />
      </motion.div>
    </div>
  );
};