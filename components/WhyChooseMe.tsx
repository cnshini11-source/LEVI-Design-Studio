import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Palette, Code2 } from 'lucide-react';

const reasons = [
  {
    icon: Rocket,
    title: 'מהירות על-אנושית',
    desc: 'האתרים שלנו נבנים על טהרת הקוד הנקי והאופטימיזציה. זמני טעינה אפסיים וביצועים מקסימליים שמשאירים את המתחרים מאחור.'
  },
  {
    icon: Code2,
    title: 'טכנולוגיה, לא תבניות',
    desc: 'אנחנו לא משתמשים בתבניות מוכנות של וורדפרס. אנחנו כותבים קוד React מותאם אישית שיוצר חוויה ייחודית שאי אפשר לשכפל.'
  },
  {
    icon: Palette,
    title: 'עיצוב פסיכולוגי',
    desc: 'כל צבע, אנימציה ומיקום אלמנט נבחרים בקפידה על סמך מחקרים פסיכולוגיים כדי להוביל את המשתמש בדיוק לאן שאתה רוצה.'
  },
  {
    icon: ShieldCheck,
    title: 'שקט נפשי מוחלט',
    desc: 'אנחנו דואגים להכל. מאפיון, דרך עיצוב ופיתוח, ועד להעלאה לאוויר ותחזוקה. לך נשאר רק לקבל לידים.'
  }
];

export const WhyChooseMe: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Title */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
              >
                למה דווקא
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">
                  SHINI?
                </span>
              </motion.h2>
              <p className="text-slate-400 text-lg">
                בעולם שבו כולם נראים אותו דבר, אנחנו נותנים לך את היתרון הטכנולוגי הבלתי הוגן.
              </p>
              <div className="mt-8 hidden lg:block">
                 <div className="w-20 h-1 bg-cyan-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Reasons List */}
          <div className="lg:w-2/3 grid gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <reason.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{reason.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};