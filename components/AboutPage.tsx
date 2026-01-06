import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Users, BarChart3, Settings } from 'lucide-react';

interface AboutPageProps {
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const t = translations[language].aboutPage;

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 animate-in fade-in duration-500">
      
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
         <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-8 leading-tight">
            {t.title}
         </h1>
         <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.subtitle}
         </p>
      </div>

      {/* Mission */}
      <div className="max-w-3xl mx-auto px-6 pb-24 text-center">
         <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {t.mission.text}
         </p>
      </div>

      {/* Pillars */}
      <div className="py-24 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 border-l-2 border-slate-900 dark:border-white">
               <Users className="w-8 h-8 mb-4 text-slate-900 dark:text-white" />
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.pillars.driver.title}</h3>
               <p className="text-slate-500 text-sm">{t.pillars.driver.desc}</p>
            </div>
            <div className="p-6 border-l-2 border-slate-900 dark:border-white">
               <BarChart3 className="w-8 h-8 mb-4 text-slate-900 dark:text-white" />
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.pillars.shop.title}</h3>
               <p className="text-slate-500 text-sm">{t.pillars.shop.desc}</p>
            </div>
            <div className="p-6 border-l-2 border-slate-900 dark:border-white">
               <Settings className="w-8 h-8 mb-4 text-slate-900 dark:text-white" />
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.pillars.mechanic.title}</h3>
               <p className="text-slate-500 text-sm">{t.pillars.mechanic.desc}</p>
            </div>
         </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
         <div>
            <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">12k+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.stats.users}</div>
         </div>
         <div>
            <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">850+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.stats.partners}</div>
         </div>
         <div>
            <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">99.8%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.stats.accuracy}</div>
         </div>
      </div>

    </div>
  );
};

export default AboutPage;