import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'דף נחיתה חכם',
    price: '₪4,500',
    features: ['עיצוב ממיר ויוקרתי', 'אנימציות בסיסיות', 'חיבור למערכות דיוור', 'התאמה מלאה למובייל', 'אחסון מהיר לשנה'],
    recommended: false
  },
  {
    name: 'תדמית AI ארגוני',
    price: '₪9,800',
    features: ['אתר תדמית מלא (5 עמודים)', 'מנוע AI לניתוח התנהגות', 'אנימציות תלת-מימד', 'מערכת ניהול תוכן (CMS)', 'SEO אופטימלי', 'תמיכה VIP וליווי'],
    recommended: true
  },
  {
    name: 'פיתוח מותאם אישית',
    price: 'צור קשר',
    features: ['פיתוח Full-Stack מורכב', 'מערכות WEB מתקדמות', 'אינטגרציות API', 'אפיון חווית משתמש מלא', 'ליווי אסטרטגי צמוד'],
    recommended: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">מסלולי פיתוח</h2>
          <p className="text-slate-400">בחר את רמת התחכום שמתאימה למותג שלך</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${plan.recommended ? 'bg-slate-900 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.1)]' : 'bg-transparent border-white/10 hover:border-white/20'} flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  הכי מבוקש
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-black text-white mb-6 font-mono">{plan.price}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.recommended ? 'primary' : 'outline'} className="w-full">
                בחר מסלול
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};