import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowRight } from 'lucide-react';
import PricingSection from './PricingSection';

interface MechanicsLandingProps {
  language: Language;
  onRegister: () => void;
}

const MechanicsLanding: React.FC<MechanicsLandingProps> = ({ language, onRegister }) => {
  const t = translations[language].mechanicsLanding;

  return (
    <div className="pt-12 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase mb-8 block text-emerald-500">Parceiros</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                {t.hero.title}
              </h1>
              <p className="text-xl text-slate-500 mb-12 font-light">
                {t.hero.desc}
              </p>
              <button onClick={onRegister} className="px-10 py-5 bg-emerald-600 text-white rounded-none font-bold text-xl hover:bg-emerald-700 transition-colors flex items-center gap-2">
                {t.hero.cta} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            {/* Minimalist Graphic Element */}
            <div className="hidden lg:block h-full bg-emerald-50 dark:bg-emerald-900/10 p-12 flex flex-col justify-center">
                <div className="text-3xl font-bold mb-8">
                   "Recebi 5 chamados hoje. Todos aprovados."
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                   <div className="text-sm font-bold">Roberto, Mecânico Parceiro</div>
                </div>
            </div>
        </div>
      </div>

      {/* Benefits - Simple List */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-l-4 border-emerald-500 pl-6">
                 <h3 className="text-2xl font-bold mb-2">{t.benefits.b1.title}</h3>
                 <p className="text-slate-500">{t.benefits.b1.desc}</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-6">
                 <h3 className="text-2xl font-bold mb-2">{t.benefits.b2.title}</h3>
                 <p className="text-slate-500">{t.benefits.b2.desc}</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-6">
                 <h3 className="text-2xl font-bold mb-2">{t.benefits.b3.title}</h3>
                 <p className="text-slate-500">{t.benefits.b3.desc}</p>
              </div>
           </div>
        </div>
      </div>

      <PricingSection language={language} fixedCategory="MECHANIC" />

      <div className="py-32 border-t border-slate-200 dark:border-slate-800 text-center">
         <h2 className="text-3xl font-bold mb-8">Valorize seu trabalho.</h2>
         <button onClick={onRegister} className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity">
            Credenciar Agora
         </button>
      </div>

    </div>
  );
};

export default MechanicsLanding;