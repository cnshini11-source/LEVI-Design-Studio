import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const content = {
    privacy: {
      title: "מדיניות פרטיות",
      icon: Shield,
      text: (
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p><strong>1. כללי</strong><br/>אנו מכבדים את פרטיות המשתמשים באתר. מדיניות זו מפרטת כיצד אנו אוספים ומשתמשים במידע.</p>
          <p><strong>2. איסוף מידע</strong><br/>האתר עשוי לאסוף מידע טכני באופן אוטומטי (כגון סוג דפדפן, כתובת IP) וכן מידע שנמסר מרצון על ידי המשתמש בטפסי יצירת קשר.</p>
          <p><strong>3. שימוש במידע</strong><br/>המידע משמש אך ורק לצורך מתן שירות, יצירת קשר ושיפור חווית הגלישה. אנו לא מוכרים מידע לצד ג'.</p>
          <p><strong>4. עוגיות (Cookies)</strong><br/>האתר משתמש בעוגיות לצורך תפעול שוטף, אבטחה וסטטיסטיקה.</p>
          <p><strong>5. אבטחת מידע</strong><br/>אנו נוקטים באמצעי אבטחה מקובלים להגנה על המידע, אך לא ניתן להבטיח חסינות מוחלטת.</p>
        </div>
      )
    },
    terms: {
      title: "תנאי שימוש",
      icon: FileText,
      text: (
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p><strong>1. הסכמה</strong><br/>הגלישה באתר מהווה הסכמה לתנאים אלו.</p>
          <p><strong>2. קניין רוחני</strong><br/>כל התכנים באתר (עיצוב, טקסט, קוד) הם קניינה הבלעדי של SHINI ואין להעתיקם ללא אישור.</p>
          <p><strong>3. אחריות</strong><br/>השירות ניתן כמות שהוא (As Is). לא נשא באחריות לנזקים עקיפים הנובעים משימוש באתר.</p>
          <p><strong>4. שינויים</strong><br/>אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש בכל עת.</p>
        </div>
      )
    }
  };

  const currentContent = content[type];
  const Icon = currentContent.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                 <Icon className="text-cyan-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{currentContent.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto custom-scrollbar">
            {currentContent.text}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/5 bg-slate-950/50 flex justify-end">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors"
            >
              סגור
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};