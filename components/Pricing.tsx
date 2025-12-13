import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="contact" className="min-h-[600px] py-24 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]" 
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="w-full max-w-5xl px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
            {/* Decorative Grid inside form */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-5 gap-12">
              {/* Contact Info Side */}
              <div className="md:col-span-2 flex flex-col justify-between space-y-8 border-b md:border-b-0 md:border-l border-white/10 md:pl-12 pb-8 md:pb-0">
                  <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest mb-4">
                          CONTACT
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">מתחילים פרויקט?</h3>
                      <p className="text-slate-400 leading-relaxed mb-8">
                        אנחנו כאן כדי להפוך את החזון הטכנולוגי שלך למציאות.
                        השאר פרטים והצוות שלנו יבצע ניתוח ראשוני.
                      </p>
                      
                      <div className="space-y-6">
                          <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                                  <Phone size={20} />
                              </div>
                              <span className="font-mono text-lg">050-1234567</span>
                          </a>
                          <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                                  <Mail size={20} />
                              </div>
                              <span className="font-mono text-lg">hello@shini.co.il</span>
                          </a>
                          <div className="flex items-center gap-4 text-slate-400">
                              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center">
                                  <MapPin size={20} />
                              </div>
                              <span>מגדלי האלופים, תל אביב</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Form Side */}
              <div className="md:col-span-3 pt-2">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-xs text-cyan-500 font-bold uppercase tracking-wider">שם מלא</label>
                              <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700" placeholder="ישראל ישראלי" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs text-cyan-500 font-bold uppercase tracking-wider">טלפון</label>
                              <input type="tel" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700" placeholder="050..." />
                          </div>
                      </div>
                      
                      <div className="space-y-2">
                          <label className="text-xs text-cyan-500 font-bold uppercase tracking-wider">מייל עסקי</label>
                          <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700" placeholder="name@company.com" />
                      </div>

                      <div className="space-y-2">
                          <label className="text-xs text-cyan-500 font-bold uppercase tracking-wider">תיאור הפרויקט</label>
                          <textarea rows={4} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 resize-none" placeholder="ספר לנו על המטרות, קהל היעד והחזון שלך..."></textarea>
                      </div>

                      <Button variant="primary" className="w-full py-5 text-lg font-black shadow-lg shadow-cyan-500/20 group">
                          שגר הודעה <Send size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                      </Button>
                  </form>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};