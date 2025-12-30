
import React, { useState, Suspense, lazy } from 'react';
import { Rocket, Github, Instagram, Facebook } from 'lucide-react';

// Lazy load the modal so it's only fetched when needed
const LegalModal = lazy(() => import('./LegalModal').then(module => ({ default: module.LegalModal })));

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10 content-visibility-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-4 md:mb-0 group cursor-default">
              <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Rocket className="text-cyan-400 w-6 h-6 relative z-10 transform group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white group-hover:text-cyan-100 transition-colors">LEVI</span>
            </div>

            {/* Middle Section */}
            <div className="text-center mb-6 md:mb-0 px-4">
                 <h3 className="text-slate-300 font-bold text-base md:text-lg tracking-wide">
                    לוי אתר תדמית ודף נחיתה ממיר לעסק שלך
                 </h3>
                 <p className="text-slate-500 text-xs md:text-sm mt-1 font-light">
                    מהירות גבוהה והתאמה מלאה למובייל
                 </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://www.instagram.com/levi_sh_11?igsh=MW50dWpucjFjcm1raQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all duration-300" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300" aria-label="Github"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-sm text-slate-500">
            <div className="flex flex-col gap-3">
                <p>© {new Date().getFullYear()} LEVI. כל הזכויות שמורות.</p>
                
                {/* Added Contact Details with SEO Keywords Naturally Integrated */}
                <div className="flex flex-col gap-1 text-[11px] text-slate-600 font-light">
                    <span className="text-slate-500 font-medium">לוי שיני בונה אתרים מוסמך, מתמחה בבניית אתרים ודפי נחיתה לעסקים בישראל</span>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                        <a href="mailto:cnshini11@gmail.com" className="hover:text-cyan-400 transition-colors">מייל: cnshini11@gmail.com</a>
                        <span className="hidden sm:block text-slate-800">|</span>
                        <a href="tel:0538227778" className="hover:text-cyan-400 transition-colors">טלפון: 053-8227778</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-6">
              <button onClick={() => setModalType('privacy')} className="hover:text-cyan-400 transition-colors">מדיניות פרטיות</button>
              <button onClick={() => setModalType('terms')} className="hover:text-cyan-400 transition-colors">תנאי שימוש</button>
            </div>
          </div>

          {/* SEO / Credits Section - Optimized for Keyword Ranking without visual clutter */}
          <div className="mt-8 pt-6 border-t border-white/5">
             <div className="text-[10px] text-slate-800 text-center leading-relaxed font-light max-w-5xl mx-auto space-y-2 hover:text-slate-600 transition-colors duration-500 cursor-default">
                <h4 className="sr-only">לוי שיני בונה אתרים מקצועי מוסמך</h4>
                <p>
                   נעים להכיר, <strong>לוי שיני בונה אתרים מקצועי מוסמך</strong>. 
                   הגעתם למקום הנכון לשינוי עסקי אמיתי. אני מתמחה ב<strong>בניית דפי נחיתה ואתרים הכי ממירים שיש</strong>.
                </p>
                <p>
                   המטרה שלי היא פשוטה: לבנות לך נכס דיגיטלי שמביא <strong>תכלס הרבה כסף ולקוחות</strong> לעסק שלך.
                   אל תתפשר על פחות מהטוב ביותר – לוי שיני בונה אתרים שמנצחים את התחרות.
                </p>
             </div>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
          <LegalModal 
            isOpen={!!modalType} 
            type={modalType} 
            onClose={() => setModalType(null)} 
          />
      </Suspense>
    </>
  );
};
