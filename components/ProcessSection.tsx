import React from 'react';
import { motion } from 'framer-motion';
import { Search, Fingerprint, Target, MessageSquare, LayoutTemplate } from 'lucide-react';

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
              בונים מכונת לידים.
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
                
                <h3 className="text-3xl font-bold text-white mb-2">שיחת אפיון – הבסיס להכול</h3>
                <p className="text-cyan-400 font-medium mb-6">הופכים חזון עסקי לתוכנית פעולה שמייצרת תוצאות – ללא נטישות, ועם לידים מדוייקים לעסק שלך.</p>
                
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  רוב האתרים נכשלים כי הם נבנים על בסיס ניחושים.
                  בתהליך העבודה איתי, אנחנו מזקקים את המסרים והופכים אותם למסע לקוח מובנה ומדויק.
                  התוצאה היא אתר שמדבר את השפה שלך, בונה אמון מול הגולשים ומייצר פניות איכותיות באופן שוטף.
                </p>
                <div className="inline-block px-6 py-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold">
                  אפיון מדויק הוא המפתח לצמיחה עסקית.
                </div>
             </motion.div>

             <motion.div 
               className="md:w-1/2 grid gap-6"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                {[
                  { icon: Target, title: 'מי הלקוחות שלך?', text: 'הופכים הגדרה כללית לפנייה מדויקת שגורמת להם להרגיש בבית.' },
                  { icon: MessageSquare, title: 'מה הפעולה הרצויה?', text: 'בונים מסלול חכם שמוביל את הגולש יד ביד עד ליצירת הקשר.' },
                  { icon: Fingerprint, title: 'תפיסת המותג', text: 'מתרגמים את הערכים שלך לשפה ויזואלית שמשדרת מקצועיות וסמכות.' },
                  { icon: LayoutTemplate, title: 'נעלה את האתר לאוויר', text: 'זה לא נגמר בהשקה. אני אעביר לך הדרכה אישית ומפורטת על המערכת, כדי שתדע בדיוק איך לנהל, לעדכן ולהשתמש באתר שלך בצורה עצמאית ומקצועית.' }
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

        </div>
      </div>
    </section>
  );
};