import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-lg border border-cyan-500/50">
            <Cpu className="text-cyan-400 w-6 h-6 animate-pulse" />
          </div>
          <span className="text-2xl font-black tracking-wider text-white">SHINI</span>
        </motion.div>

        {/* Contact Button Only */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg text-sm font-bold border border-white/10 transition-colors"
        >
            צור קשר
        </motion.button>
      </div>
    </motion.header>
  );
};