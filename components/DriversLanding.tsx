import React from 'react';
import { Language, ViewState } from '../types';
import { translations } from '../translations';
import { ShieldAlert, Scale, Car, ArrowRight, CheckCircle2 } from 'lucide-react';
import PricingSection from './PricingSection';
import AnimatedCar from './AnimatedCar';

interface DriversLandingProps {
  language: Language;
  onStart: () => void;
}

const DriversLanding: React.FC<DriversLandingProps> = ({ language, onStart }) => {
  const t = translations[language].driversLanding;
  const tCommon = translations[language];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldAlert className="w-4 h-4 mr-2" />
              {t.hero.subtitle}
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              {t.hero.desc}
            </p>
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 transition-all transform hover:scale-105 flex items-center mx-auto"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-[100px]"></div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white dark:bg-slate-800 py-20 border-y border-slate-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.benefits.title}</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-100 dark:border-slate-600">
                 <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.benefits.b1.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{t.benefits.b1.desc}</p>
              </div>
              
              <div className="p-8 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-100 dark:border-slate-600">
                 <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Scale className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.benefits.b2.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{t.benefits.b2.desc}</p>
              </div>

              <div className="p-8 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-100 dark:border-slate-600">
                 <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Car className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.benefits.b3.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{t.benefits.b3.desc}</p>
              </div>
           </div>
        </div>
      </div>

      {/* Pricing tailored for Drivers */}
      <PricingSection language={language} fixedCategory="DRIVER" />

      {/* Final Call to Action with Car */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Pronto para resolver seu problema?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Não deixe para depois. Use a tecnologia a seu favor e garanta seus direitos no trânsito agora mesmo.
              </p>
              <button
                onClick={onStart}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 transition-all transform hover:scale-105 inline-flex items-center"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
               <div className="w-full max-w-md transform scale-90 lg:scale-100">
                  <AnimatedCar />
               </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DriversLanding;