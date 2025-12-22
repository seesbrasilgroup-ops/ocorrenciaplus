import React, { useState, useEffect } from 'react';
import { Check, User, Wrench, Building2, Star, Zap, Shield, Crown } from 'lucide-react';
import { getPricingPlans } from '../constants';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingSectionProps {
  language: Language;
  fixedCategory?: 'DRIVER' | 'SHOP' | 'MECHANIC';
}

const PricingSection: React.FC<PricingSectionProps> = ({ language, fixedCategory }) => {
  const [activeCategory, setActiveCategory] = useState<'DRIVER' | 'SHOP' | 'MECHANIC'>(fixedCategory || 'DRIVER');
  const t = translations[language].pricing;
  
  useEffect(() => {
    if (fixedCategory) {
      setActiveCategory(fixedCategory);
    }
  }, [fixedCategory]);

  const plans = getPricingPlans(language);
  const filteredPlans = plans.filter(p => p.category === activeCategory);

  const getThemeColor = () => {
    switch (activeCategory) {
      case 'DRIVER': return 'blue';
      case 'SHOP': return 'amber';
      case 'MECHANIC': return 'emerald';
      default: return 'blue';
    }
  };

  const themeColor = getThemeColor();

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      
      {/* Dynamic Background Ambience */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-20 transition-colors duration-1000 bg-${themeColor}-500`}></div>
      <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-20 transition-colors duration-1000 bg-${themeColor === 'blue' ? 'purple' : themeColor === 'amber' ? 'red' : 'cyan'}-500`}></div>

      <div className="relative z-10 text-center mb-16">
        <div className={`inline-block p-2 px-4 rounded-full bg-${themeColor}-100 dark:bg-${themeColor}-900/30 border border-${themeColor}-200 dark:border-${themeColor}-800 mb-6 animate-pulse-slow transition-colors duration-500`}>
          <span className={`text-xs font-bold text-${themeColor}-600 dark:text-${themeColor}-400 uppercase tracking-widest`}>
            {t.header}
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          {t.title}
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.subtitle}
        </p>
        
        {/* 3-Way Switcher */}
        {!fixedCategory && (
          <div className="mt-12 flex justify-center">
            <div className="bg-white dark:bg-slate-800 p-1.5 rounded-2xl inline-flex border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden relative">
              {/* Sliding Background */}
              <div 
                className={`absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r transition-all duration-500 ease-spring shadow-md
                  ${activeCategory === 'DRIVER' ? 'left-1.5 w-[32%] from-blue-500 to-blue-600' : ''}
                  ${activeCategory === 'SHOP' ? 'left-[34%] w-[32%] from-amber-500 to-amber-600' : ''}
                  ${activeCategory === 'MECHANIC' ? 'left-[67%] w-[31.5%] from-emerald-500 to-emerald-600' : ''}
                `}
              ></div>

              <button
                onClick={() => setActiveCategory('DRIVER')}
                className={`relative z-10 px-6 py-3 rounded-xl text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                  activeCategory === 'DRIVER' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{t.tabs.driver}</span>
              </button>
              <button
                onClick={() => setActiveCategory('SHOP')}
                className={`relative z-10 px-6 py-3 rounded-xl text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                  activeCategory === 'SHOP' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">{t.tabs.shop}</span>
              </button>
              <button
                onClick={() => setActiveCategory('MECHANIC')}
                className={`relative z-10 px-6 py-3 rounded-xl text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                  activeCategory === 'MECHANIC' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span className="hidden sm:inline">{t.tabs.mechanic}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start justify-center max-w-5xl mx-auto">
        {filteredPlans.map((plan) => {
          const isPopular = plan.popular;
          
          return (
            <div 
              key={plan.id}
              className={`group relative flex flex-col rounded-[2rem] transition-all duration-500 ${
                isPopular 
                  ? `bg-white dark:bg-slate-800 border-2 border-${themeColor}-500 shadow-[0_0_50px_-12px_rgba(0,0,0,0.2)] hover:shadow-[0_0_70px_-12px_rgba(0,0,0,0.3)] transform lg:-translate-y-4 z-20` 
                  : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 shadow-xl hover:-translate-y-2 z-10'
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                   <div className={`bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2`}>
                     <Crown className="w-4 h-4 fill-current" />
                     {t.mostPopular}
                   </div>
                </div>
              )}

              <div className="p-8 sm:p-10 flex-1">
                <div className="flex items-center justify-between mb-6">
                   <div className={`p-4 rounded-2xl ${
                      isPopular 
                        ? `bg-${themeColor}-100 dark:bg-${themeColor}-500/20 text-${themeColor}-600 dark:text-${themeColor}-400` 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                   }`}>
                      {activeCategory === 'DRIVER' ? <User className="w-8 h-8" /> : activeCategory === 'SHOP' ? <Building2 className="w-8 h-8" /> : <Wrench className="w-8 h-8" />}
                   </div>
                   {isPopular && <Shield className={`w-8 h-8 text-${themeColor}-500 fill-current opacity-20`} />}
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter">{plan.price}</span>
                  <span className="ml-2 text-lg font-medium text-slate-500 dark:text-slate-400">{plan.period}</span>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-8"></div>

                <ul className="space-y-5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                        feature.included 
                          ? `bg-${themeColor}-100 dark:bg-${themeColor}-500/20 text-${themeColor}-600 dark:text-${themeColor}-400` 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-base ${feature.included ? 'text-slate-700 dark:text-slate-200 font-medium' : 'text-slate-400 dark:text-slate-600 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 sm:p-10 pt-0 mt-auto">
                <button 
                  className={`w-full group relative overflow-hidden rounded-2xl px-6 py-5 font-bold text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isPopular 
                    ? `bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-500 text-white shadow-xl shadow-${themeColor}-500/20` 
                    : 'bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600'
                }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t.cta} 
                    {isPopular && <Zap className="w-4 h-4 fill-current animate-pulse" />}
                  </span>
                  {isPopular && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                </button>
                <p className="text-center text-xs text-slate-400 mt-6 font-medium uppercase tracking-wide">
                  {isPopular ? (language === 'pt-BR' ? 'Garantia de Satisfação' : 'Satisfaction Guarantee') : (language === 'pt-BR' ? 'Acesso Imediato' : 'Instant Access')}
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