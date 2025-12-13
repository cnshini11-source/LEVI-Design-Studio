import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

export const TechSection: React.FC = () => {
  return (
    <section id="tech" className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
             <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                   <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                     לא עוד אתר שנראה טוב... <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                       אבל הלקוחות נוטשים.
                     </span>
                   </h2>
                   <div className="flex flex-col gap-6">
                       <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                       <p className="text-xl text-slate-400 leading-relaxed">
                         רוב האתרים יפים, אבל טיפשים. הם לא יודעים לזהות כשהגולש מתלבט, הם לא מגיבים לתנועות העכבר שלו, והם נותנים לו לצאת בלי להילחם עליו.
                       </p>
                       <p className="text-xl text-slate-400 leading-relaxed">
                         אנחנו משנים את המשוואה. במקום אתר סטטי, אתם מקבלים מערכת שיודעת ללמוד, להשתפר ולמקסם את ההחזר על ההשקעה שלכם בכל רגע נתון.
                       </p>
                   </div>
                </motion.div>

                {/* Right Side: Main Engine Core - Expanded */}
                <motion.div 
                   className="relative group w-full"
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                    
                    <div className="relative h-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-[1.8rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
                        
                        {/* High-Tech Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                        {/* Animated Scan Line */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"
                            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30">
                                    <span className="relative flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                    </span>
                                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">System Active</span>
                                </div>
                                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
                                    <BrainCircuit className="w-8 h-8 text-cyan-400" />
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">מנוע AI לומד</h3>
                            
                            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                                <p>
                                    זהו המוח שמאחורי הקלעים, והוא לא נח לרגע. המערכת סורקת ומנתחת את דפוסי הגלישה של המבקרים שלך בזמן אמת.
                                </p>
                                <p>
                                    המנוע מזהה בדיוק איפה הגולשים מתעכבים, על מה הם מקליקים, ומתי תשומת הלב שלהם יורדת. 
                                    על בסיס נתונים אלו, האלגוריתם מבצע אופטימיזציה חכמה למסע הלקוח, מזהה את התכנים שמייצרים המרות, ומחדד את חווית המשתמש כדי להפוך מבקרים אקראיים ללקוחות משלמים.
                                </p>
                                <p className="font-semibold text-cyan-400">
                                    במקום לנחש מה עובד – המערכת נותנת לך וודאות עסקית.
                                </p>
                            </div>
                        </div>

                        {/* Data Visualization Footer */}
                        <div className="relative z-10 border-t border-white/5 pt-8 mt-10">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Conversion Optimization</div>
                                    <div className="text-3xl font-mono text-cyan-400 font-bold">98.4%</div>
                                </div>
                                <div className="flex gap-1 h-12 items-end">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div 
                                            key={i}
                                            className="w-3 bg-cyan-500/50 rounded-sm"
                                            animate={{ height: [10, 30 + Math.random() * 20, 10] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
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