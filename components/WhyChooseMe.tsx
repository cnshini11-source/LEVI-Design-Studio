
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Palette, Target } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'אתרים שממירים, לא רק יפים',
    desc: 'יופי זה לא מספיק. אני בונה מערכות שנועדו למכור. המטרה היא לא רק לגרוף מחמאות, אלא להפוך גולשים ללקוחות משלמים.'
  },
  {
    icon: Palette,
    title: 'עיצוב פסיכולוגי',
    desc: 'כל אלמנט באתר מתוכנן להשפיע על תת-המודע של הגולש. בחירת הצבעים, הטיפוגרפיה והאנימציות – הכל נועד ליצור אמון וסמכות.'
  },
  {
    icon: ShieldCheck,
    title: 'אחריות מלאה מא\' ועד ת\'',
    desc: 'אני הכתובת היחידה שלך – מהאפיון ועד הפיתוח. לך נשאר שקט נפשי להתעסק בעסק שלך בזמן שאני דואג לטכנולוגיה.'
  },
  {
    icon: Rocket,
    title: 'ביצועים ומהירות',
    desc: 'חווית משתמש חלקה היא קריטית להמרה. האתרים שלי נבנים בסטנדרטים הגבוהים ביותר כדי להבטיח טעינה מיידית.'
  }
];

export const WhyChooseMe: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Spectacular 3D Entrance Effect
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,              // Start lower
      scale: 0.8,         // Start smaller
      rotateX: 40,        // Tilt back 3D effect
      filter: "blur(10px)", // Motion blur start
      transformPerspective: 1000 
    }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)", // Focus
      transition: { 
          type: "spring",
          damping: 15,    // Less friction = smoother stop
          stiffness: 80,  // Powerful spring
          mass: 1.1
      }
    }
  };

  return (
    <section id="why-us" className="pt-12 md:pt-24 pb-24 md:pb-32 relative overflow-hidden bg-[#020617]">
      {/* BACKGROUND: Deep Black/Gray Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          {/* Subtle noise/texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-14 h-1.5 bg-cyan-500 mb-8 rounded-full shadow-none mx-auto lg:mx-0 lg:mr-0" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                  למה דווקא
                  <br />
                  <span className="relative inline-block text-cyan-400">
                    LEVI?
                    {/* Rounded underline */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500/50 rounded-full" />
                  </span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-sm mx-auto lg:mx-0 lg:mr-0">
                  בעולם שבו כולם נראים אותו דבר, אנחנו נותנים לך את היתרון הטכנולוגי והעסקי עם חותמת איכות בלתי מתפשרת.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Staggered ROUNDED Cards List with 3D Effect */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-2/3 grid gap-8 perspective-[2000px]" // Added perspective to container
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* NEW DRAMATIC CARD DESIGN - ALWAYS LIT */}
                {/* Changes: Permanent border, permanent shadow, removed 'group-hover' dependency for visibility */}
                <div className="relative bg-[#0a0a0c] border border-cyan-500/20 p-6 md:p-8 rounded-[2rem] overflow-hidden transition-all duration-500 shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.3)]">
                    
                    {/* 1. Holographic Grid Background (ALWAYS VISIBLE) */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom" />
                    </div>

                    {/* 2. Spotlight / Plasma Leak (ALWAYS VISIBLE) */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full opacity-100" />
                    
                    {/* Top shine line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                        
                        {/* 3. Tech-Reactor Icon Box (ALWAYS ACTIVE) */}
                        <div className="relative">
                            {/* Reactor Glow Ring - Always visible but subtle */}
                            <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-30 scale-100" />
                            
                            <div className="w-14 h-14 flex items-center justify-center bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 rounded-2xl relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                {/* ALIVE ANIMATION WRAPPER */}
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.15, 1],
                                        rotate: [0, 5, -5, 0],
                                        filter: [
                                            "drop-shadow(0 0 0px rgba(6,182,212,0))", 
                                            "drop-shadow(0 0 8px rgba(6,182,212,0.4))", 
                                            "drop-shadow(0 0 0px rgba(6,182,212,0))"
                                        ]
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                    className="flex items-center justify-center"
                                >
                                    <reason.icon className="w-6 h-6 transform" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="text-right flex-1">
                            <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">
                                {reason.title}
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed text-base">
                                {reason.desc}
                            </p>
                        </div>
                    </div>

                    {/* 4. Corner Accents (Tech Feel) - ALWAYS VISIBLE */}
                    <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-cyan-500/50 rounded-tr-sm opacity-100" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-cyan-500/50 rounded-bl-sm opacity-100" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
