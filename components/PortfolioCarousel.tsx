import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Zap, ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
  {
    title: "Elegant Jewelry",
    category: "Premium E-Commerce",
    description: "אתר תדמית ומכירות יוקרתי לתכשיטים, המשלב עיצוב נקי ואנימציות עדינות.",
    gradient: "from-blue-600/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    text_glow: "group-hover:text-cyan-400",
    link: "https://cnshini11-source.github.io/LEVI-ITZHAK-SHINI/",
    image: "https://i.imgur.com/iNQ0K2j.png"
  },
  {
    title: "Neon Estate",
    category: "Real Estate AI",
    description: "פלטפורמת נדלן חכמה המבוססת על בינה מלאכותית לאיתור נכסים.",
    gradient: "from-purple-600/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    text_glow: "group-hover:text-purple-400",
    link: "https://ai.studio/apps/drive/1Cn3hlhWMbrSUWayswo47JR921X2PgyIX"
  },
  {
    title: "Quantum Fitness",
    category: "Health & Sport",
    description: "דף נחיתה הממיר בטירוף עבור מותג כושר בינלאומי.",
    gradient: "from-emerald-600/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    text_glow: "group-hover:text-emerald-400",
    link: "#" // Placeholder
  }
];

export const PortfolioCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsPaused(true);
    // Restart auto-play after interaction (optional logic could go here, but simple pause is safer UX)
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleCardClick = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  // Calculate card properties based on position relative to active index
  const getCardProps = (index: number) => {
    const total = projects.length;
    // Calculate difference (0 = active, 1 = right, -1/2 = left)
    let diff = (index - currentIndex + total) % total;
    if (diff === 2) diff = -1; // Normalize for 3 items to be [-1, 0, 1]

    const isActive = diff === 0;
    const isRight = diff === 1;
    const isLeft = diff === -1;

    return {
      zIndex: isActive ? 30 : 10,
      x: isActive ? "0%" : isRight ? "60%" : "-60%",
      scale: isActive ? 1 : 0.8,
      opacity: isActive ? 1 : 0.4,
      rotateY: isActive ? 0 : isRight ? -15 : 15,
      filter: isActive ? "blur(0px)" : "blur(2px)",
      pointerEvents: isActive ? "auto" : "none", // Prevent clicking links on side cards
    };
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-3 text-cyan-400 font-bold tracking-widest text-sm uppercase">
                <Zap size={16} />
                <span>Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
               הפרוייקטים ה<span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-600">נבחרים שלי</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
                כל פרויקט הוא יצירת אמנות טכנולוגית. גללו וראו את העתיד.
            </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-[1000px] h-[400px] flex justify-center items-center perspective-[1000px]">
            <AnimatePresence mode='popLayout'>
                {projects.map((project, index) => {
                    const props = getCardProps(index);
                    const isActive = index === currentIndex;

                    return (
                        <motion.div
                            key={index}
                            layout
                            initial={false}
                            animate={{
                                x: props.x,
                                scale: props.scale,
                                opacity: props.opacity,
                                rotateY: props.rotateY,
                                zIndex: props.zIndex,
                                filter: props.filter
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                            className={`absolute w-[240px] md:w-[280px] h-[360px] rounded-3xl cursor-pointer ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                            onClick={() => !isActive && handleCardClick(index)}
                        >
                            {/* Card Content Wrapper */}
                            <div 
                                className={`relative w-full h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${project.border} ${isActive ? 'shadow-cyan-500/10' : ''}`}
                            >
                                {/* Active Link Wrapper */}
                                {isActive ? (
                                    <a 
                                        href={project.link !== "#" ? project.link : undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full h-full group"
                                    >
                                        <CardContent project={project} isActive={isActive} />
                                    </a>
                                ) : (
                                    <CardContent project={project} isActive={isActive} />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            {/* Navigation Buttons (Desktop) */}
            <button 
                onClick={handlePrev}
                className="hidden md:flex absolute left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 hover:scale-110 hover:border-cyan-500/30 transition-all z-40 text-white"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={handleNext}
                className="hidden md:flex absolute right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 hover:scale-110 hover:border-cyan-500/30 transition-all z-40 text-white"
            >
                <ChevronRight size={24} />
            </button>
        </div>
        
        {/* Mobile Navigation Indicators */}
        <div className="flex md:hidden gap-2 mt-8">
            {projects.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        setCurrentIndex(idx);
                        setIsPaused(true);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-cyan-400 w-6' : 'bg-slate-600'}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

const CardContent = ({ project, isActive }: { project: typeof projects[0], isActive: boolean }) => (
    <>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Project Preview */}
        <div className="absolute inset-x-4 top-4 bottom-28 bg-slate-950/50 rounded-2xl border border-white/5 overflow-hidden backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
            {project.image ? (
                <div className="relative w-full h-full">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
                </div>
            ) : (
                <div className="relative w-full h-full flex flex-col opacity-60">
                    <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-4 space-y-3 flex-1 bg-gradient-to-b from-transparent to-black/20">
                        <div className="w-1/3 h-2 bg-white/20 rounded-full" />
                        <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                    </div>
                </div>
            )}
            
            {/* Overlay Icon (Only active) */}
            {isActive && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                    <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>
                </div>
            )}
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent h-32 flex flex-col justify-end">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-1 block">{project.category}</span>
            <h3 className={`text-xl font-black text-white transition-colors duration-300 ${isActive ? project.text_glow : ''}`}>
                {project.title}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mt-1 group-hover:text-slate-300 transition-colors">
                {project.description}
            </p>
        </div>

        {/* Corner Decoration */}
        {isActive && project.link !== "#" && (
            <div className="absolute top-3 left-3 p-1.5 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10 border border-white/10">
                <ExternalLink size={14} className="text-white" />
            </div>
        )}
    </>
);