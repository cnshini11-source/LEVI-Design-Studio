import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* Background Elements - Static */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="w-full max-w-5xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-[3rem] p-12 md:p-24 overflow-hidden"
        >
           {/* Static Inner Glow */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />

           <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
             הגיע הזמן
             <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
               לדבר תכלס.
             </span>
           </h2>
           
           <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
             בלי טפסים, בלי בירוקרטיה ובלי המתנה.
             <br />
             לחצו על הכפתור ובואו נראה איך מזניקים את העסק שלכם.
           </p>

           <a
             href="https://wa.me/972538227778" 
             target="_blank"
             rel="noopener noreferrer"
             className="group relative inline-flex items-center gap-4 px-10 py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xl md:text-2xl font-black tracking-wide shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]"
           >
             {/* Simplified Shine - CSS transition */}
             <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
             
             <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-current" />
             <span>בוא נדבר על העסק שלכם</span>
             <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-2 transition-transform" />
           </a>

           <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm font-medium opacity-70">
             <Sparkles className="w-4 h-4 text-yellow-500" />
             <span>זמינות מיידית בווצאפ</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};