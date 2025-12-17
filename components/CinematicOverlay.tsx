import React from 'react';

export const CinematicOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none select-none overflow-hidden">
       {/* 1. Grain / Noise Texture - Adds 'Film' quality without loading external images */}
       {/* Using SVG data URI for maximum performance and zero network requests */}
       <div 
         className="absolute inset-0 opacity-[0.03] mix-blend-overlay will-change-transform"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
         }}
       />
       
       {/* 2. Cinematic Vignette - Subtly darkens edges to focus attention on center content */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
};