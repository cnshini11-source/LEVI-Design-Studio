import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Activity } from 'lucide-react';

export const TechSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Ambient Background Elements - Subtle */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[80px]" />
             <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-cyan-900/5 rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                {/* Left Side: Text Content - More Compact */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:pr-8"
                >
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                     לא עוד אתר שנראה טוב... <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-black">
                       אבל הלקוחות נוטשים.
                     </span>
                   </h2>
                   
                   <div className="space-y-4">
                       <p className="text-lg text-slate-400 leading-relaxed font-light">
                           אתה משקיע תקציבי עתק בפרסום, הגולשים מגיעים, מסתכלים... <strong>ויוצאים</strong>.
                           בלי להשאיר פרטים, בלי להתקשר. פשוט נעלמים.
                           <br className="hidden md:block" /><br className="hidden md:block" />
                           זה לא שהמוצר שלך לא טוב – זה שהאתר שלך פסיבי. אנחנו בונים <strong className="text-white font-medium">מערכות מכירה אקטיביות</strong> שיודעות לזהות את הלקוח, לדבר בשפה שלו ולגרום לו להשאיר פרטים עכשיו.
                       </p>
                   </div>
                </motion.div>

                {/* Right Side: Main Engine Core - Compact & Integral */}
                <motion.div 
                   className="relative group w-full max-w-lg mx-auto lg:mr-auto lg:ml-0"
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                >
                    {/* Subtle Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500" />
                    
                    <div className="relative h-full bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden">
                        
                        {/* High-Tech Grid Background - Faint */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

                        {/* Animated Scan Line - Thinner */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)] z-20"
                            animate={{ top: ["0%", "100%"], opacity: [0, 0.8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-800/50 rounded-lg border border-white/5 flex items-center justify-center">
                                        <BrainCircuit className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">מנוע AI לומד</h3>
                                </div>
                                
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                    </span>
                                    <span className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase">Live</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3 text-slate-400 text-sm md:text-base leading-relaxed">
                                <p>
                                    האלגוריתם עוקב אחר תנועות העכבר, גלילה וזמן שהייה בזמן אמת. 
                                    הוא מזהה מתי לקוח מתלבט ומקפיץ לו את המסר המדויק שיסגור את העסקה – בין אם זו הטבה מוגבלת, הוכחה חברתית או מענה להתנגדות ספציפית.
                                </p>
                            </div>
                        </div>

                        {/* Data Visualization Footer - Compact */}
                        <div className="relative z-10 border-t border-white/5 pt-6 mt-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4 text-cyan-500" />
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Conversion Rate</div>
                                        <div className="text-lg font-mono text-white font-bold">+184%</div>
                                    </div>
                                </div>
                                <div className="flex gap-1 h-8 items-end">
                                    {[...Array(12)].map((_, i) => (
                                        <motion.div 
                                            key={i}
                                            className="w-1.5 bg-cyan-500/40 rounded-sm"
                                            animate={{ height: [5, 15 + Math.random() * 15, 5] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};