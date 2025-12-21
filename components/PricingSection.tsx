import React, { useState, useEffect } from 'react';
import { Check, Shield, Building2, User, Zap, Star, Briefcase } from 'lucide-react';
import { getPricingPlans } from '../constants';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingSectionProps {
  language: Language;
  fixedCategory?: 'B2C' | 'B2B'; // Optional prop to force a specific view
}

const PricingSection: React.FC<PricingSectionProps> = ({ language, fixedCategory }) => {
  const [isB2B, setIsB2B] = useState(fixedCategory === 'B2B');
  const t = translations[language].pricing;
  
  useEffect(() => {
    if (fixedCategory) {
      setIsB2B(fixedCategory === 'B2B');
    }
  }, [fixedCategory]);

  const plans = getPricingPlans(language);
  const filteredPlans = plans.filter(p => isB2B ? p.category === 'B2B' : p.category === 'B2C');

  return (
    <div className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambience Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full filter blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="relative z-10 text-center mb-20">
        <div className="inline-block p-2 px-4 rounded-full bg-brand-100 dark:bg-brand-900/50 border border-brand-200 dark:border-brand-700/50 mb-4 animate-pulse-slow">
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">{t.header}</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          {t.title}
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.subtitle}
        </p>
        
        {/* Animated Toggle Switch - Only show if no fixedCategory is provided */}
        {!fixedCategory && (
          <div className="mt-10 flex justify-center">
            <div className="relative bg-slate-200 dark:bg-slate-800 p-1 rounded-full inline-flex border border-slate-300 dark:border-slate-700 shadow-inner">
              <div 
                className={`absolute top-1 bottom-1 w-[50%] rounded-full bg-white dark:bg-brand-600 shadow-md transition-all duration-300 ease-spring ${isB2B ? 'left-[49%]' : 'left-[1%]'}`}
              ></div>
              <button
                onClick={() => setIsB2B(false)}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                  !isB2B ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <User className="w-4 h-4" />
                {t.b2c}
              </button>
              <button
                onClick={() => setIsB2B(true)}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                  isB2B ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                {t.b2b}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10 items-stretch justify-center">
        {filteredPlans.map((plan, index) => {
          const isPopular = plan.popular;
          
          return (
            <div 
              key={plan.id}
              className={`group relative flex flex-col rounded-3xl transition-all duration-500 ${
                isPopular 
                  ? 'bg-white dark:bg-slate-900/80 border-2 border-brand-500 dark:border-brand-400 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.5)] transform lg:-translate-y-4 scale-105 z-20' 
                  : 'bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 z-10'
              }`}
            >
              {/* Popular Shimmer Effect */}
              {isPopular && (
                <div className="absolute inset-0 rounded-[22px] overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                </div>
              )}

              {/* Header Badge */}
              {isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                     <Star className="w-3 h-3 fill-current" />
                     {t.mostPopular}
                   </div>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                   <div className={`p-3 rounded-2xl ${isPopular ? 'bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                      {isB2B ? <Building2 className="w-6 h-6" /> : <User className="w-6 h-6" />}
                   </div>
                   {isPopular && <Zap className="w-6 h-6 text-amber-500 fill-current animate-pulse-slow" />}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                  <span className="ml-2 text-lg font-medium text-slate-500 dark:text-slate-400">{plan.period}</span>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-8"></div>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${feature.included ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className={`text-sm ${feature.included ? 'text-slate-700 dark:text-slate-200 font-medium' : 'text-slate-400 dark:text-slate-600 line-through'}`}>
                        {feature.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button 
                  className={`w-full group relative overflow-hidden rounded-xl px-6 py-4 font-bold text-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isPopular 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'
                }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t.cta} 
                    {isPopular && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                  </span>
                  {isPopular && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                  {isPopular ? (language === 'pt-BR' ? 'Garantia de 7 dias' : '7-day guarantee') : (language === 'pt-BR' ? 'Sem cartão de crédito' : 'No credit card required')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSection;