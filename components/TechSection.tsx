import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Activity, Layers, Zap, MousePointerClick, GitBranch, Share2 } from 'lucide-react';

export const TechSection: React.FC = () => {
  return (
    <section id="tech" className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
             <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]" />
             <div className="absolute top-[20%] left-[20%] w-[2px] h-[200px] bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-45" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
               <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
                 לא רק אתר. <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                   מערכת חכמה.
                 </span>
               </h2>
               <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                   <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                   <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                     הטכנולוגיה שלנו הופכת כל פיקסל למנוע צמיחה עסקי.
                     אנחנו לא בונים דפים, אנחנו בונים ארכיטקטורה דיגיטלית שחושבת, מגיבה וממירה.
                   </p>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Main Engine Core - Dominant Visual */}
                <motion.div 
                   className="lg:col-span-5 relative group"
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                    
                    <div className="relative h-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-[1.8rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                        
                        {/* High-Tech Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                        {/* Animated Scan Line */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"
                            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 mb-8">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                </span>
                                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">System Active</span>
                            </div>

                            <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-black/50 group-hover:scale-105 transition-transform duration-500">
                                <BrainCircuit className="w-12 h-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            </div>

                            <h3 className="text-4xl font-bold text-white mb-4">מנוע AI לומד</h3>
                            <p className="text-slate-400 leading-relaxed text-lg mb-8">
                                המוח שמאחורי הקלעים. המערכת מנתחת דפוסי גלישה, לומדת מה עובד, ומשפרת את זרימת המשתמש בזמן אמת כדי למקסם המרות.
                            </p>
                        </div>

                        {/* Data Visualization Footer */}
                        <div className="relative z-10 border-t border-white/5 pt-6 mt-auto">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Processing</div>
                                    <div className="text-2xl font-mono text-cyan-400">98.4%</div>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div 
                                            key={i}
                                            className="w-2 bg-cyan-500/50 rounded-sm"
                                            animate={{ height: [10, 24, 10] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Connector Lines (Desktop Only) */}
                <div className="hidden lg:flex lg:col-span-1 flex-col justify-center items-center relative opacity-50">
                     <div className="w-px h-[80%] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)]" />
                     {/* Horizontal Branches */}
                     <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
                     <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
                </div>

                {/* Satellite Modules Grid */}
                <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "UX אדפטיבי", desc: "ממשק שמשתנה אישית לכל משתמש", icon: Layers, color: "text-purple-400", bg: "group-hover:bg-purple-500/10", border: "group-hover:border-purple-500/50" },
                        { title: "זרימה התנהגותית", desc: "ניווט חכם שמבוסס על מפות חום", icon: GitBranch, color: "text-emerald-400", bg: "group-hover:bg-emerald-500/10", border: "group-hover:border-emerald-500/50" },
                        { title: "לוגיקת המרה", desc: "אלגוריתמים למקסום לידים", icon: Zap, color: "text-amber-400", bg: "group-hover:bg-amber-500/10", border: "group-hover:border-amber-500/50" },
                        { title: "אינטראקציה חיה", desc: "תגובתיות מיידית לכל תנועה", icon: MousePointerClick, color: "text-pink-400", bg: "group-hover:bg-pink-500/10", border: "group-hover:border-pink-500/50" }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className={`group relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 ${item.border}`}
                        >
                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Share2 className="w-4 h-4 text-white/20" />
                            </div>

                            <div className={`w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center mb-4 transition-colors duration-300 ${item.bg}`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>

                            {/* Corner Accent */}
                            <div className={`absolute bottom-0 right-0 w-0 h-0.5 ${item.color.replace('text-', 'bg-')} transition-all duration-300 group-hover:w-full opacity-50`} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
};