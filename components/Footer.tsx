import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Cpu className="text-cyan-400 w-6 h-6" />
            <span className="text-2xl font-black tracking-wider text-white">SHINI</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SHINI. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">תנאי שימוש</a>
          </div>
        </div>
      </div>
    </footer>
  );
};