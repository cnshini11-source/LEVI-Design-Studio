import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
          <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" 
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="w-full max-w-5xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-900/50 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 md:p-24 overflow-hidden"
        >
           {/* Inner Glow */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-50" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-50" />

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

           <motion.a
             href="https://wa.me/?text=היי,%20אשמח%20לשמוע%20פרטים%20נוספים%20על%20בניית%20אתר" 
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="group relative inline-flex items-center gap-4 px-10 py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xl md:text-2xl font-black tracking-wide shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] transition-all duration-300 overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out skew-x-12" />
             
             <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-current" />
             <span>בוא נדבר על העסק שלכם</span>
             <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-2 transition-transform" />
           </motion.a>

           <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm font-medium opacity-70">
             <Sparkles className="w-4 h-4 text-yellow-500" />
             <span>זמינות מיידית בווצאפ</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};