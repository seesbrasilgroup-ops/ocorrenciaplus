
import React from 'react';
import { Car, Hammer, ArrowRight } from 'lucide-react';
import { Language, ViewState } from '../types';
import { translations } from '../translations';

interface SolutionsSectionProps {
  language: Language;
  setView: (view: ViewState) => void;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ language, setView }) => {
  const t = translations[language].solutions;

  return (
    <section className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Driver Card */}
            <div className="bg-[#F8FAFC] dark:bg-slate-900 rounded-[2.5rem] p-12 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20">
                    <Car className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {t.driver.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 h-32">
                    {t.driver.desc}
                </p>
                <button 
                  onClick={() => setView(ViewState.LANDING_DRIVERS)} 
                  className="group flex items-center text-blue-600 font-bold text-lg hover:gap-3 transition-all"
                >
                    {t.driver.cta} <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>

             {/* Shop Card */}
            <div className="bg-[#F8FAFC] dark:bg-slate-900 rounded-[2.5rem] p-12 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800 hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-600/20">
                    <Hammer className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {t.shop.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 h-32">
                    {t.shop.desc}
                </p>
                <button 
                  onClick={() => setView(ViewState.LANDING_SHOPS)} 
                  className="group flex items-center text-emerald-600 font-bold text-lg hover:gap-3 transition-all"
                >
                    {t.shop.cta} <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
