import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Scale, Camera, Handshake, Wrench, Users, FileText, CheckCircle2, ScanLine, ArrowRight } from 'lucide-react';

interface LandingProps {
  language: Language;
}

export const FeaturesSection: React.FC<LandingProps> = ({ language }) => {
  const t = translations[language].features;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const features = [
    {
      id: 0,
      key: 'item1',
      icon: Users,
      color: 'blue',
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative z-10 flex flex-col gap-3">
             <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900 flex items-center gap-3 transform translate-x-4">
                <div className="bg-red-100 text-red-600 p-1.5 rounded-lg"><Camera size={18}/></div>
                <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
             </div>
             <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900 flex items-center gap-3 transform -translate-x-4">
                <div className="bg-amber-100 text-amber-600 p-1.5 rounded-lg"><Scale size={18}/></div>
                <div className="h-2 w-32 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
             </div>
             <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900 flex items-center gap-3 transform translate-x-2">
                <div className="bg-green-100 text-green-600 p-1.5 rounded-lg"><CheckCircle2 size={18}/></div>
                <div className="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      key: 'item2',
      icon: Wrench,
      color: 'amber',
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="relative bg-slate-900 rounded-xl p-4 shadow-2xl border border-slate-700 w-64">
             <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                <div className="w-20 h-2 bg-slate-700 rounded"></div>
                <ScanLine className="text-amber-500 animate-pulse" size={16} />
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                   <span>Peças</span>
                   <span>R$ 1.200</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                   <span>M. Obra</span>
                   <span>R$ 800</span>
                </div>
                <div className="h-px bg-slate-700 my-2"></div>
                <div className="flex justify-between text-sm font-bold text-green-400">
                   <span>Total</span>
                   <span>R$ 2.000</span>
                </div>
             </div>
             {/* Floating badge */}
             <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                LEAD +
             </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      key: 'item3',
      icon: ShieldCheck,
      color: 'emerald',
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
           <Scale size={120} className="text-emerald-200/50 absolute" />
           <div className="relative z-10 bg-white dark:bg-slate-800 p-6 rounded-t-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border-t-4 border-emerald-500 w-48 text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                 <FileText className="text-emerald-600 dark:text-emerald-400" size={24} />
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mb-2"></div>
              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-2/3 mx-auto"></div>
              <div className="mt-4 inline-flex items-center text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">
                 <CheckCircle2 size={10} className="mr-1" /> Validado
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-sm font-bold text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3 animate-fade-in-up">
          {t.tag}
        </h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.title}
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
        {features.map((feature, index) => {
          const isActive = activeIndex === index;
          // Dynamically accessing translation keys safely
          // @ts-ignore
          const title = t[feature.key].title;
          // @ts-ignore
          const desc = t[feature.key].desc;
          
          const colorClasses = {
             blue: 'bg-blue-600',
             amber: 'bg-amber-600',
             emerald: 'bg-emerald-600'
          };
          
          return (
            <div
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isActive ? 'lg:flex-[3] shadow-2xl ring-1 ring-white/20' : 'lg:flex-[1] opacity-90 hover:opacity-100'}
                group
              `}
            >
              {/* Background with dynamic color */}
              <div className={`absolute inset-0 transition-colors duration-700 ${
                  isActive 
                  ? 'bg-slate-50 dark:bg-slate-800' 
                  : 'bg-slate-100 dark:bg-slate-900'
              }`}></div>
              
              {/* Active Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${feature.color}-500/5 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="relative h-full flex flex-col p-6 lg:p-10 z-10">
                {/* Header Icon/Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500
                    ${isActive ? `bg-${feature.color}-500 text-white shadow-lg shadow-${feature.color}-500/30` : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500'}
                  `}>
                    <feature.icon size={24} />
                  </div>
                  
                  {/* Arrow only shows on inactive cards on desktop */}
                  <div className={`
                    lg:hidden xl:hidden w-8 h-8 rounded-full border flex items-center justify-center transition-all
                    ${isActive ? 'border-slate-300 dark:border-slate-600 opacity-0' : 'border-slate-300 dark:border-slate-600 opacity-100'}
                  `}>
                     <ArrowRight size={14} className="text-slate-400" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-end lg:justify-start">
                   {/* Title Animation */}
                   <h3 className={`
                     text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-500
                     ${!isActive && 'lg:rotate-90 lg:origin-left lg:translate-y-24 lg:translate-x-2 lg:whitespace-nowrap lg:opacity-60'}
                   `}>
                     {title}
                   </h3>

                   {/* Description - Fades in/out based on active state */}
                   <div className={`
                     transition-all duration-500 delay-100 overflow-hidden
                     ${isActive ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                   `}>
                     <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                       {desc}
                     </p>
                   </div>
                   
                   {/* VISUALIZATION AREA (Only visible when active) */}
                   <div className={`
                      mt-auto flex-1 w-full transition-all duration-700 delay-200 transform
                      ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 hidden lg:flex'}
                   `}>
                      {feature.visual}
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HowItWorksSection: React.FC<LandingProps> = ({ language }) => {
  const t = translations[language].howItWorks;

  return (
    <div className="py-20 bg-slate-100 dark:bg-slate-800/30 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3">{t.tag}</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">{t.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-300 via-brand-500/50 to-slate-300 dark:from-slate-700 dark:to-slate-700 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center mb-6 z-10 shadow-xl transition-all group-hover:scale-110 group-hover:border-blue-500">
              <Camera className="w-10 h-10 text-slate-700 dark:text-white group-hover:text-blue-500 transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.step1}</h4>
            <p className="text-slate-600 dark:text-slate-400">{t.desc1}</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-24 h-24 bg-white dark:bg-slate-900 border-4 border-brand-500 rounded-full flex items-center justify-center mb-6 z-10 shadow-xl shadow-brand-500/20 transition-all group-hover:scale-110">
              <Scale className="w-10 h-10 text-brand-600 dark:text-brand-500 animate-pulse group-hover:animate-none" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.step2}</h4>
            <p className="text-slate-600 dark:text-slate-400">{t.desc2}</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-24 h-24 bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center mb-6 z-10 shadow-xl transition-all group-hover:scale-110 group-hover:border-green-500">
              <Handshake className="w-10 h-10 text-green-600 dark:text-green-400 group-hover:text-green-500 transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.step3}</h4>
            <p className="text-slate-600 dark:text-slate-400">{t.desc3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};