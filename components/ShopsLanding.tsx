import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowRight } from 'lucide-react';
import PricingSection from './PricingSection';

interface ShopsLandingProps {
  language: Language;
  onRegister: () => void;
}

const ShopsLanding: React.FC<ShopsLandingProps> = ({ language, onRegister }) => {
  const t = translations[language].shopsLanding;

  return (
    <div className="pt-12 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-5xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase mb-8 block text-amber-500">B2B Intelligence</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.9]">
            {t.hero.title}
          </h1>
          <p className="text-2xl text-slate-500 mb-16 leading-relaxed max-w-2xl font-light">
            {t.hero.desc}
          </p>
          <button onClick={onRegister} className="px-10 py-5 bg-amber-500 text-white rounded-none font-bold text-xl hover:bg-amber-600 transition-colors flex items-center gap-4">
            {t.hero.cta} <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats - Big Numbers */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-xl font-bold uppercase tracking-widest mb-16 text-slate-400">{t.benefits.title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                 <div className="text-5xl md:text-6xl font-black mb-4">+45%</div>
                 <h3 className="text-xl font-bold mb-2">{t.benefits.b1.title}</h3>
                 <p className="text-slate-500">{t.benefits.b1.desc}</p>
              </div>
              <div>
                 <div className="text-5xl md:text-6xl font-black mb-4">-30%</div>
                 <h3 className="text-xl font-bold mb-2">{t.benefits.b2.title}</h3>
                 <p className="text-slate-500">{t.benefits.b2.desc}</p>
              </div>
              <div>
                 <div className="text-5xl md:text-6xl font-black mb-4">2.5x</div>
                 <h3 className="text-xl font-bold mb-2">{t.benefits.b3.title}</h3>
                 <p className="text-slate-500">{t.benefits.b3.desc}</p>
              </div>
           </div>
        </div>
      </div>

      <PricingSection language={language} fixedCategory="SHOP" />

      <div className="py-32 border-t border-slate-200 dark:border-slate-800 text-center">
         <button onClick={onRegister} className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-2xl hover:opacity-90 transition-opacity">
            Começar Agora
         </button>
      </div>

    </div>
  );
};

export default ShopsLanding;