import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(3, 7, 18, 0)", "rgba(3, 7, 18, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor: headerBackground, backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-center relative z-10">
        
        {/* Logo - Centered, Larger, More "Alive" */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 cursor-pointer group"
        >
          {/* Icon Container with Glow */}
          <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden">
            {/* Inner animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Sparkles className="text-cyan-400 w-8 h-8 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>

          {/* Text */}
          <span className="text-4xl md:text-5xl font-black tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all duration-300 drop-shadow-lg">
            SHINI
          </span>
        </motion.div>

      </div>
    </motion.header>
  );
};