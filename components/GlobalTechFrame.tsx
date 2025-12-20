
import React from 'react';
import { motion } from 'framer-motion';

export const GlobalTechFrame: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none hidden md:block overflow-hidden">
      
      {/* --- LEFT SIDE FRAME --- */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent">
        {/* Moving Energy Beam - Cyan */}
        <motion.div
          animate={{ top: ['-20%', '120%'] }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 2
          }}
          className="absolute left-0 w-[2px] h-[30vh] -ml-[0.5px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent blur-[2px]"
        />
        {/* Secondary Faster Beam */}
        <motion.div
          animate={{ top: ['-10%', '110%'] }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: 1,
            repeatDelay: 4
          }}
          className="absolute left-0 w-[1px] h-[10vh] bg-cyan-400/20"
        />
      </div>

      {/* --- RIGHT SIDE FRAME --- */}
      <div className="absolute right-6 lg:right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent">
        {/* Moving Energy Beam - Purple/Blue Hint */}
        <motion.div
          animate={{ top: ['-20%', '120%'] }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: 4 // Offset from left side
          }}
          className="absolute right-0 w-[2px] h-[30vh] -mr-[0.5px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent blur-[2px]"
        />
         {/* Secondary Faster Beam */}
         <motion.div
          animate={{ top: ['-10%', '110%'] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            delay: 3,
            repeatDelay: 5
          }}
          className="absolute right-0 w-[1px] h-[10vh] bg-blue-400/20"
        />
      </div>

      {/* --- CORNER ACCENTS (Subtle Depth Markers) --- */}
      {/* Top Left */}
      <div className="absolute top-0 left-6 lg:left-10 w-[1px] h-32 bg-gradient-to-b from-cyan-500/20 to-transparent" />
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-6 lg:right-10 w-[1px] h-32 bg-gradient-to-t from-purple-500/20 to-transparent" />

    </div>
  );
};
