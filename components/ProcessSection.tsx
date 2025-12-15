import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Database, Rocket, MessageSquare, BarChart, Smartphone, Lock, Server, Zap, Globe, MousePointerClick, Target, Palette, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="lead-machine" className="pt-24 pb-4 bg-slate-950 relative overflow-hidden scroll-mt-32">
      {/* Background Elements - Optimized */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            מכונת לידים
          </h2>
          <p className="text-lg text-slate-300">
            תהליך עבודה מדויק, שקוף ומבוסס נתונים. אני בונה עבורך נכס דיגיטלי שעובד.
          </p>
        </motion.div>

        <div className="space-y-20 relative">
          
          {/* Vertical Line Connector */}
          <div className="absolute top-0 bottom-20 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent -translate-x-1/2 hidden lg:block" />

          {/* STEP 1: Discovery (Right) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center relative">
             {/* Visual/Icon Side - Smaller & Tighter */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-10 order-2 lg:order-1 w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="relative w-full max-w-[260px] md:max-w-[280px] bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-5 flex flex-col justify-center gap-3 group hover:border-blue-500/30 transition-all duration-500 transform-gpu mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Floating Icons Grid - Compact */}
                    <div className="grid grid-cols-2 gap-2.5 relative z-10">
                        <div className="bg-slate-800/50 p-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1.5 hover:bg-slate-800 transition-colors">
                             <Search className="text-blue-400 w-5 h-5" />
                             <span className="text-[10px] text-slate-400 font-medium">מחקר שוק</span>
                        </div>
                        <div className="bg-slate-800/50 p-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1.5 hover:bg-slate-800 transition-colors">
                             <BarChart className="text-blue-400 w-5 h-5" />
                             <span className="text-[10px] text-slate-400 font-medium">ניתוח מתחרים</span>
                        </div>
                        <div className="bg-slate-800/50 p-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1.5 hover:bg-slate-800 transition-colors">
                             <MessageSquare className="text-blue-400 w-5 h-5" />
                             <span className="text-[10px] text-slate-400 font-medium">זיקוק מסרים</span>
                        </div>
                        <div className="bg-slate-800/50 p-2.5 rounded-xl border border-white/5 flex flex-col items-center gap-1.5 hover:bg-slate-800 transition-colors">
                             <Target className="text-blue-400 w-5 h-5" />
                             <span className="text-[10px] text-slate-400 font-medium">הגדרת יעדים</span>
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pr-10 order-1 lg:order-2 text-right w-full"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-3 justify-end lg:justify-start">
                   <span className="text-5xl font-black text-white/5 absolute -top-6 -right-4 select-none pointer-events-none">01</span>
                   <div className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                      אפיון ואסטרטגיה
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">אני יורד לשורש העסק שלך</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                    לפני הכל, אנחנו עושים שיחת אפיון פשוטה. בלי מילים מסובכות ובלי שאלונים מייגעים.
                    בשיחה הזו נבין ביחד מי הלקוחות שלך, מה באמת מניע אותם, ומה הדבר האחד שיגרום להם להוציא את האשראי דווקא אצלך.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        שיחת אפיון לזיהוי המניע המרכזי של הלקוח.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        הבנה פשוטה של "מה גורם להם לפעול?".
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        בניית מסר חד שכל לקוח יבין מיד.
                    </li>
                </ul>
             </motion.div>
          </div>

          {/* STEP 2: Design (Left) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center relative">
             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pl-10 order-1 text-right lg:text-right w-full"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-3 justify-end lg:justify-start">
                   <span className="text-5xl font-black text-white/5 absolute -top-6 -right-4 select-none pointer-events-none">02</span>
                   <div className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold tracking-widest uppercase">
                      UI/UX ועיצוב
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">עיצוב פסיכולוגי ממוקד המרה</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                    אני לא רק מעצב אתר שיהיה "יפה", אלא בונה חוויה.
                    כל צבע, כפתור, פונט ואנימציה ממוקמים על ידי במחשבה תחילה ובאסטרטגיה ברורה: לשדר יוקרה, לבנות סמכות מיידית, ולייצר אצל הגולש דחף בלתי נשלט להמשיך לקרוא ולבצע פעולה.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        שימוש בטריגרים פסיכולוגיים למניעת נטישה.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        עיצוב ייחודי (Custom Made) שלא נראה כמו שום תבנית אחרת.
                    </li>
                </ul>
             </motion.div>

             {/* Visual Side - Alive & Dynamic */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-start lg:pr-10 order-2 w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="relative w-full max-w-[260px] md:max-w-[280px] bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-5 group hover:border-purple-500/30 transition-all duration-500 transform-gpu mx-auto lg:mx-0 overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Animated "Buy" Button Simulation */}
                    <div className="relative w-full p-4 bg-slate-800/50 rounded-xl border border-white/5 flex flex-col items-center gap-3">
                         {/* Color Palette Element (Floating) */}
                         <div className="absolute -top-3 -right-3 p-1.5 bg-slate-800 rounded-lg border border-white/10 flex gap-1 shadow-lg transform rotate-12">
                             <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                             <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                             <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                         </div>

                         <div className="w-20 h-2 bg-slate-700 rounded-full mb-1" />
                         <div className="w-32 h-2 bg-slate-700/50 rounded-full" />
                         
                         {/* The Pulsing CTA Button */}
                         <div className="relative mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold shadow-lg shadow-purple-500/30 animate-pulse flex items-center gap-1.5">
                             <span>להזמנה</span>
                             <Check className="w-3 h-3" />
                         </div>

                         {/* Moving Cursor Animation */}
                         <div className="absolute bottom-1 right-8 pointer-events-none animate-[bounce_2s_infinite]">
                             <MousePointerClick className="w-5 h-5 text-white fill-purple-500 drop-shadow-md" />
                         </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-purple-300 font-mono">
                        <Palette className="w-3 h-3" />
                        <span>עיצוב מניע לפעולה</span>
                    </div>
                </div>
             </motion.div>
          </div>

          {/* STEP 3: Tech Wrapper (Right) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center relative">
             {/* Visual/Icon Side */}
             <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-10 order-2 lg:order-1 w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                {/* Changed backdrop-blur-xl to backdrop-blur-md for better performance */}
                <div className="relative w-full max-w-sm bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center gap-4 group hover:border-cyan-500/30 transition-all duration-500 transform-gpu mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-green-500/20 rounded-lg"><Smartphone className="w-4 h-4 text-green-400" /></div>
                                 <span className="text-xs font-bold text-slate-300">WhatsApp API</span>
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                        </div>
                        {/* CRM Row Removed */}
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-cyan-500/20 rounded-lg"><Lock className="w-4 h-4 text-cyan-400" /></div>
                                 <span className="text-xs font-bold text-slate-300">SSL Security</span>
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Text Side */}
             <motion.div 
               className="lg:w-1/2 lg:pr-10 order-1 lg:order-2 text-right w-full"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-3 justify-end lg:justify-start">
                   <span className="text-5xl font-black text-white/5 absolute -top-6 -right-4 select-none pointer-events-none">03</span>
                   <div className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                      מעטפת טכנולוגית
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">אני דואג להכל – אפס כאב ראש בשבילך</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                    אתה לא צריך להתעסק בטכנולוגיה, שרתים או הגדרות מסובכות. אני בונה לך מעטפת מלאה שפשוט עובדת.
                    מהרגע הראשון, האתר מאובטח, מהיר ומחובר לנייד שלך. אתה מתרכז בלענות ללקוחות, אני דואג שכל השאר יתקתק.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        קבלת לידים חמים ישירות לווצאפ או למייל שלך.
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        מעטפת טכנית מלאה – אחסון, אבטחה ודומיין עליי.
                    </li>
                </ul>
             </motion.div>
          </div>

          {/* STEP 4: Launch (Centered & Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-16 max-w-4xl mx-auto"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[2rem] blur opacity-20 transform-gpu" />
              <div className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-6 md:p-8 overflow-hidden text-center transform-gpu">
                  
                  {/* Grid Background inside card */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                  <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 mb-6">
                          <Rocket className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4">השקה, הדרכה ויציאה לדרך משותפת</h3>
                      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                          רגע העלייה לאוויר הוא מרגש, אבל אני לא עוזב אותך שם.
                          אני נשאר בתמונה, מספק הדרכה אישית ומפורטת על איך לתפעל את המכונה שבניתי לך, ואיך לקרוא את הנתונים כדי למקסם רווחים באופן שוטף. ההצלחה שלך היא כרטיס הביקור שלי.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
                          <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <Server className="text-yellow-400 w-6 h-6 mb-3" />
                              <h4 className="font-bold text-white mb-1.5">אחסון אתרים</h4>
                              <p className="text-xs text-slate-400">אני דואג לאחסון מהיר כברק. האתר שלך תמיד זמין.</p>
                          </div>
                          <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <Globe className="text-cyan-400 w-6 h-6 mb-3" />
                              <h4 className="font-bold text-white mb-1.5">חיבור דומיין</h4>
                              <p className="text-xs text-slate-400">הכתובת העסקית שלך מחוברת ומוכנה. הכל עליי.</p>
                          </div>
                          <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 flex flex-col items-center hover:bg-slate-800 transition-colors">
                              <div className="relative mb-3">
                                {/* WhatsApp Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.149.224-.579.73-.709.88-.131.149-.261.168-.486.056-.224-.112-.953-.351-1.815-1.12-.669-.597-1.12-1.335-1.25-1.56-.13-.224-.014-.345.098-.458.101-.101.224-.262.336-.393.112-.131.149-.224.224-.374.075-.149.037-.28-.019-.393-.056-.113-.504-1.214-.69-1.663-.181-.435-.366-.376-.504-.383-.13-.006-.28-.006-.429-.006-.15 0-.393.056-.599.28-.205.225-.785.767-.785 1.871 0 1.104.804 2.171.916 2.32.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.066-.056-.094-.206-.15-.43-.263" />
                                </svg>
                              </div>
                              <h4 className="font-bold text-white mb-1.5">תמיכה אישית</h4>
                              <p className="text-xs text-slate-400">יש לך למי לפנות. אני זמין לכל שאלה בוואטסאפ.</p>
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