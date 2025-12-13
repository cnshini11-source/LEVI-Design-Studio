import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Zap } from 'lucide-react';

const loadingTexts = [
  "INITIALIZING NEURAL NETWORK...",
  "LOADING ASSETS...",
  "CALIBRATING UX CORE...",
  "OPTIMIZING CONVERSION PATHS...",
  "SYSTEM READY"
];

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Progress Timer
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment for realistic feel
        const diff = Math.random() * 10;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    // Text rotation timer
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(onComplete, 800); // Slight delay at 100% before exit
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden font-mono"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 0.8 } }}
    >
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <motion.div 
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(56,189,248,0.1),transparent)]" 
        />
      </div>

      {/* Central AI Core Animation */}
      <div className="relative z-10 mb-12">
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 rounded-full border border-cyan-900/50 border-t-cyan-500 border-l-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
          />
          
          {/* Middle Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 left-4 right-4 bottom-4 rounded-full border border-slate-800 border-b-purple-500/50 border-r-purple-500/50"
          />

          {/* Inner Fast Ring */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, scale: { duration: 1, repeat: Infinity } }}
            className="absolute top-12 left-12 right-12 bottom-12 rounded-full border-2 border-dashed border-cyan-400/30"
          />

          {/* Core Logo/Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative">
                 <motion.div
                    animate={{ boxShadow: ["0 0 20px rgba(6,182,212,0)", "0 0 60px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center border border-cyan-500/50 relative z-10"
                 >
                     <Cpu className="w-12 h-12 text-cyan-400" />
                 </motion.div>
                 {/* Energy Beams */}
                 <motion.div 
                    animate={{ opacity: [0, 1, 0], rotate: 180 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-xl rounded-full"
                 />
             </div>
          </div>
      </div>

      {/* System Status & Progress */}
      <div className="relative z-10 w-80 text-center space-y-4">
          <div className="flex justify-between items-end text-xs text-cyan-500/70 uppercase tracking-widest mb-1">
              <span>System Status</span>
              <span>Secure</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"
                  style={{ width: `${progress}%` }}
              />
              <motion.div 
                  className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white/50 to-transparent opacity-50"
                  animate={{ x: [-320, 320] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
          </div>

          <div className="flex justify-between items-center font-bold">
              <span className="text-4xl text-white">{Math.round(progress)}%</span>
              <div className="flex flex-col items-end">
                 <motion.span 
                    key={textIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-cyan-400 font-bold tracking-wider"
                 >
                     {loadingTexts[textIndex]}
                 </motion.span>
              </div>
          </div>
      </div>

      {/* Decorative Corner HUD Elements */}
      <div className="absolute top-10 left-10 p-2 border-l-2 border-t-2 border-white/10 w-16 h-16 rounded-tl-xl" />
      <div className="absolute top-10 right-10 p-2 border-r-2 border-t-2 border-white/10 w-16 h-16 rounded-tr-xl" />
      <div className="absolute bottom-10 left-10 p-2 border-l-2 border-b-2 border-white/10 w-16 h-16 rounded-bl-xl" />
      <div className="absolute bottom-10 right-10 p-2 border-r-2 border-b-2 border-white/10 w-16 h-16 rounded-br-xl" />

    </motion.div>
  );
};