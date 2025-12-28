import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Sparkles, Users, Wrench, Shield, CheckCircle, BarChart3, Settings } from 'lucide-react';
import VideoSection from './VideoSection';

interface AboutPageProps {
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const t = translations[language].aboutPage;

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-slate-900">
      
      {/* 1. Hero Section */}
      <div className="relative pt-24 pb-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
         {/* Animated Background Aura */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] -z-10 pointer-events-none">
            <div className="absolute top-10 left-[20%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-10 right-[20%] w-80 h-80 bg-amber-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
         </div>

         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-amber-500 fill-current" />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
              Tecnologia OC++
            </span>
         </div>

         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-fade-in-up delay-100 text-slate-900 dark:text-white">
            {t.title}
         </h1>

         <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t.subtitle}
         </p>
      </div>

      {/* 2. Mission Section */}
      <div className="py-20 bg-slate-50 dark:bg-slate-950/50">
         <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 relative">
                     <span className="relative z-10">{t.mission.title}</span>
                     <div className="absolute bottom-1 left-0 w-24 h-2 bg-blue-500/30 -z-0"></div>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                     {t.mission.text}
                  </p>
               </div>
               <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-72 h-72">
                     <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-amber-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
                     <div className="relative z-10 w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-all duration-500">
                        <div className="text-center">
                           <Shield className="w-16 h-16 text-slate-900 dark:text-white mx-auto mb-4" />
                           <p className="font-bold text-slate-900 dark:text-white text-lg">Verdade Técnica</p>
                           <p className="text-sm text-slate-500">Imparcialidade Garantida</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 3. The 3-Pillar Ecosystem */}
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">O Ecossistema Completo</h2>
            <p className="text-slate-600 dark:text-slate-400">Integramos todas as pontas do mercado automotivo.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Driver Pillar */}
            <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20"></div>
               <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t.pillars.driver.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.pillars.driver.desc}
               </p>
               <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2" /> B2C
                  </span>
               </div>
            </div>

            {/* Shop Pillar */}
            <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-amber-500/20"></div>
               <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t.pillars.shop.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.pillars.shop.desc}
               </p>
               <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2" /> B2B
                  </span>
               </div>
            </div>

            {/* Mechanic Pillar (NEW) */}
            <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20"></div>
               <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t.pillars.mechanic.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.pillars.mechanic.desc}
               </p>
               <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2" /> Partner
                  </span>
               </div>
            </div>

         </div>
      </div>

      {/* 4. Stats Section */}
      <div className="bg-slate-900 py-16 text-white border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
               <div className="text-4xl font-black text-blue-500 mb-2">12k+</div>
               <div className="text-sm text-slate-400 uppercase tracking-widest">{t.stats.users}</div>
            </div>
            <div className="p-4">
               <div className="text-4xl font-black text-amber-500 mb-2">850+</div>
               <div className="text-sm text-slate-400 uppercase tracking-widest">{t.stats.partners}</div>
            </div>
            <div className="p-4">
               <div className="text-4xl font-black text-emerald-500 mb-2">99.8%</div>
               <div className="text-sm text-slate-400 uppercase tracking-widest">{t.stats.accuracy}</div>
            </div>
         </div>
      </div>

      <VideoSection language={language} />
    </div>
  );
};

export default AboutPage;