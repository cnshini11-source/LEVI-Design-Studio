import React from 'react';
import { motion } from 'framer-motion';
import { Search, Fingerprint, Target, MessageSquare, LayoutTemplate, Briefcase } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO OF SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            לא בונים אתר. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              בונים פתרון שמתאים לעסק שלך.
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            כל אתר שאנחנו בונים מתחיל בהבנה עמוקה של העסק שלך –
            מי הלקוחות, מה המטרה, ואיך האתר אמור לעבוד בשבילך.
            אנחנו לא כאן כדי "לסגור פינה", אלא כדי לייצר כלי עבודה.
          </p>
        </motion.div>

        <div className="space-y-32">
          
          {/* STEP 1: Discovery */}
          <div className="flex flex-col md:flex-row gap-16 items-start">
             <motion.div 
               className="md:w-1/2 sticky top-32"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="text-blue-400 font-mono font-bold tracking-widest text-sm">PHASE 01</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">שיחת אפיון – הבסיס להכול</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  התהליך מתחיל בשיחת אפיון אישית, בה אנחנו לומדים את העסק שלך לעומק.
                  אנחנו לא כותבים שורת קוד אחת לפני שאנחנו מבינים בדיוק לאן אנחנו הולכים.
                </p>
                <div className="inline-block px-6 py-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold">
                  בלי אפיון – אין תוצאה.
                </div>
             </motion.div>

             <motion.div 
               className="md:w-1/2 grid gap-6"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                {[
                  { icon: Target, title: 'מי הלקוחות שלך?', text: 'אנחנו ממפים את קהל היעד כדי לדבר בשפה שלו.' },
                  { icon: MessageSquare, title: 'מה הפעולה הרצויה?', text: 'הגדרת KPI ברור: ליד, רכישה, או יצירת קשר.' },
                  { icon: Fingerprint, title: 'תפיסת המותג', text: 'איך אתה רוצה להיתפס? יוקרתי, נגיש, או חדשני?' },
                  { icon: LayoutTemplate, title: 'ארגז כלים טכנולוגי', text: 'אינטגרציות נדרשות: CRM, WhatsApp, סליקה ועוד.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <item.icon className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
             </motion.div>
          </div>

          {/* STEP 2: Customization */}
          <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
             <motion.div 
               className="md:w-1/2 sticky top-32"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-cyan-400 font-mono font-bold tracking-widest text-sm">PHASE 02</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">אתר שמותאם אליך – לא טמפלט</h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  אנחנו לא מאמינים ב"מידה אחת לכולם". לא משתמשים בתבניות מוכנות של וורדפרס.
                  כל אלמנט באתר נבנה בקוד כדי לשרת את המטרות הספציפיות שהגדרנו בשלב האפיון.
                </p>
             </motion.div>

             <motion.div 
               className="md:w-1/2 grid gap-6"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-500 rounded-full" />
                    לעסק שנותן שירות
                  </h4>
                  <p className="text-slate-400">
                    הדגש יהיה על <strong>בניית סמכות</strong> וחיבור אישי. נשלב אלמנטים של המלצות חברתיות (Social Proof), הצגת תהליך העבודה, והנעה לפעולה ליצירת קשר בווטסאפ או השארת פרטים לייעוץ.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-cyan-500 rounded-full" />
                    לעסק ויזואלי / מוצרים
                  </h4>
                  <p className="text-slate-400">
                    הפוקוס יעבור ל<strong>חוויה הויזואלית</strong>. גלריות אינטראקטיביות, אנימציות גלילה שמציגות את המוצר מכל זווית, ומינימום הפרעות בדרך לרכישה או להתרשמות מהפורטפוליו.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors" />
                   <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full" />
                    לסטארטאפים וטכנולוגיה
                  </h4>
                  <p className="text-slate-400">
                    שפה עיצובית <strong>עתידנית ונקייה</strong>. נשתמש במיקרו-אינטראקציות, המחשות דאטה (Data Visualization) ועיצוב מודולרי שמשדר חדשנות ויציבות בו זמנית.
                  </p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};