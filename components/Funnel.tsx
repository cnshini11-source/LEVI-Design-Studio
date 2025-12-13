import React from 'react';
import { motion } from 'framer-motion';
import { User, Eye, MousePointer2, CheckCircle2, Trophy } from 'lucide-react';

const steps = [
  { label: 'מבקר', icon: User, color: 'text-gray-400' },
  { label: 'חוויה', icon: Eye, color: 'text-blue-400' },
  { label: 'אינטראקציה', icon: MousePointer2, color: 'text-purple-400' },
  { label: 'החלטה', icon: CheckCircle2, color: 'text-cyan-400' },
  { label: 'ליד', icon: Trophy, color: 'text-yellow-400' },
];

export const Funnel: React.FC = () => {
  return (
    <section id="funnel" className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            משפך שיווקי חכם, <span className="text-purple-500">לא קישוט.</span>
          </motion.h2>
          <p className="text-slate-400">אנו מובילים את המשתמש יד ביד עד ליעד.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block" />
          
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden md:block overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
             />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className={`w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 shadow-lg ${index === 4 ? 'shadow-yellow-500/20' : ''}`}>
                  <step.icon className={`w-8 h-8 ${step.color} transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                  
                  {/* Active Ring */}
                  <div className="absolute inset-0 rounded-full border border-white/5 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                </div>
                <h3 className="text-lg font-bold text-white">{step.label}</h3>
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 w-0.5 h-8 bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};