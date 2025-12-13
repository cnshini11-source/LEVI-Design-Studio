import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ChevronDown, ArrowLeft, Rocket, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yRange = useTransform(scrollY, [0, 500], [0, 200]);

  // Generate stars with memoization
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      size: Math.random() > 0.8 ? 2 : 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND EFFECTS (Optimized for GPU) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Cyber Grid - Static, lightweight CSS pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* 2. Twinkling Stars - GPU Accelerated */}
        {stars.map((star) => (
            <div
                key={star.id}
                className="absolute bg-white rounded-full will-change-[opacity,transform]"
                style={{
                    top: star.top,
                    left: star.left,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: 0,
                    animation: `twinkle ${star.duration}s ease-in-out infinite`,
                    animationDelay: `${star.delay}s`
                }}
            />
        ))}

        {/* 3. Ambient Color Glows - Added transform-gpu to force layer promotion */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-1000 transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[4s] transform-gpu" />

        {/* 4. Scanner Line - Optimized to use TranslateY (Composite) instead of Top (Layout) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-full animate-[scan_8s_ease-in-out_infinite] opacity-0 shadow-[0_0_15px_rgba(6,182,212,0.5)] will-change-transform" />

        {/* 5. Floating Particles - Converted to CSS animation for main thread offloading */}
        {[...Array(6)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full blur-[1px] animate-[floatParticle_10s_linear_infinite]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `-${Math.random() * 10}s`,
                    opacity: 0
                }}
            />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-cyan-100 text-sm font-bold tracking-wide uppercase">העתיד של האינטרנט כאן</span>
        </motion.div>

        {/* Main Title */}
        <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              אתרים ודפי נחיתה
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-[textShine_4s_linear_infinite] bg-[length:200%_auto]">
                  שמייצרים תוצאות.
              </span>
            </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed relative z-10 font-light"
        >
          SHINI בונה מערכות חכמות עם חוויית משתמש מבוססת <span className="font-bold text-white">AI</span> ומשפך שיווקי שעובד 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 relative z-10"
        >
          <a href="https://wa.me/972538227778" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                בוא נדבר <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
          </a>
          <Button variant="secondary">
            איך זה עובד?
          </Button>
        </motion.div>

      </div>

      {/* Floating Rocket - Optimized with will-change */}
      <motion.div 
            style={{ y: yRange }}
            className="absolute right-4 bottom-24 md:right-10 md:bottom-10 pointer-events-none select-none z-20 opacity-90 will-change-transform"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full" />
                    <div className="transform -rotate-45 relative z-10">
                        <Rocket className="w-24 h-24 md:w-48 md:h-48 text-white stroke-[1.5] drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]" />
                    </div>
                </div>
            </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* CSS Styles optimized for GPU */}
      <style>{`
        @keyframes scan {
            0% { transform: translateY(0vh); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes textShine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.8; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
        }
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};