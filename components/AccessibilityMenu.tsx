import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Type, Sun, Link as LinkIcon, RotateCcw, EyeOff, X } from 'lucide-react';

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);

  // Handle Font Size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // Handle Grayscale
  useEffect(() => {
    document.body.style.filter = grayscale ? 'grayscale(100%)' : 'none';
  }, [grayscale]);

  // Handle Link Highlighting and Image Hiding via injected CSS class
  useEffect(() => {
    document.body.classList.toggle('acc-highlight-links', highlightLinks);
    document.body.classList.toggle('acc-hide-images', hideImages);
  }, [highlightLinks, hideImages]);

  // Inject global styles for accessibility features
  useEffect(() => {
    const styleId = 'accessibility-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .acc-highlight-links a, .acc-highlight-links button {
            text-decoration: underline !important;
            color: #FFFF00 !important;
            background-color: #000 !important;
            border: 2px solid #FFFF00 !important; 
        }
        .acc-hide-images img, .acc-hide-images video, .acc-hide-images canvas, .acc-hide-images svg:not(.acc-icon) {
            opacity: 0 !important;
            visibility: hidden !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const reset = () => {
    setFontSize(100);
    setGrayscale(false);
    setHighlightLinks(false);
    setHideImages(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originY: 1, originX: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl w-72 origin-bottom-left"
          >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                <span className="font-bold text-white text-lg">כלי נגישות</span>
                <div className="flex gap-2">
                    <button onClick={reset} className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors px-2 py-1 rounded bg-white/5">
                        <RotateCcw size={12} />
                        איפוס
                    </button>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                        <X size={18} />
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 bg-white/5 rounded-lg p-2 flex justify-between items-center">
                     <button 
                        onClick={() => setFontSize(s => Math.max(s - 10, 80))}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-cyan-400 transition-colors"
                        aria-label="הקטן טקסט"
                    >
                        <Type size={14} />
                    </button>
                    <span className="text-sm text-slate-300">גודל טקסט: {fontSize}%</span>
                    <button 
                        onClick={() => setFontSize(s => Math.min(s + 10, 150))}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-cyan-400 transition-colors"
                        aria-label="הגדל טקסט"
                    >
                        <Type size={20} />
                    </button>
                </div>

                 <button 
                    onClick={() => setGrayscale(!grayscale)}
                    className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${grayscale ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5 hover:bg-white/10 border border-transparent'}`}
                >
                    <Sun size={20} className={grayscale ? 'text-cyan-400' : 'text-slate-400'} />
                    <span className={`text-xs ${grayscale ? 'text-cyan-100' : 'text-slate-400'}`}>גווני אפור</span>
                </button>

                 <button 
                    onClick={() => setHighlightLinks(!highlightLinks)}
                    className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${highlightLinks ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5 hover:bg-white/10 border border-transparent'}`}
                >
                    <LinkIcon size={20} className={highlightLinks ? 'text-cyan-400' : 'text-slate-400'} />
                    <span className={`text-xs ${highlightLinks ? 'text-cyan-100' : 'text-slate-400'}`}>הדגשת קישורים</span>
                </button>

                 <button 
                    onClick={() => setHideImages(!hideImages)}
                    className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${hideImages ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/5 hover:bg-white/10 border border-transparent'}`}
                >
                    <EyeOff size={20} className={hideImages ? 'text-cyan-400' : 'text-slate-400'} />
                    <span className={`text-xs ${hideImages ? 'text-cyan-100' : 'text-slate-400'}`}>הסתרת תמונות</span>
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 ${isOpen ? 'bg-cyan-500 text-black rotate-180' : 'bg-slate-900 text-cyan-400 border border-cyan-500/50 hover:bg-slate-800'}`}
        aria-label="פתח תפריט נגישות"
      >
        <Accessibility size={28} className="acc-icon" />
      </motion.button>
    </div>
  );
};