
import React, { useRef } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowRight, AlertTriangle, Check, Wallet, CheckCircle, UtilityPole, Truck } from 'lucide-react';
import PricingSection from './PricingSection';

interface DriversLandingProps {
  language: Language;
  onStart: () => void;
}

const DriversLanding: React.FC<DriversLandingProps> = ({ language, onStart }) => {
  const t = translations[language].driversLanding;
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      
      {/* 1. Hero Section - 2 Columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
               <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  {t.hero.tag}
               </span>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-slate-900 dark:text-white">
                  {t.hero.title} <br className="hidden md:block"/>
                  <span className="text-blue-600 dark:text-blue-500">{t.hero.titleHighlight}</span>
               </h1>
               <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  {t.hero.desc}
               </p>
               <button 
                  onClick={onStart}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
               >
                  {t.hero.cta} <ArrowRight className="w-5 h-5" />
               </button>
            </div>

            {/* Right: Floating Card Mockup */}
            <div className="flex-1 w-full max-w-md lg:max-w-none relative">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 dark:bg-slate-800/50 rounded-full blur-3xl -z-10"></div>
                
                {/* The Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   
                   {/* Card Header */}
                   <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400">
                         <AlertTriangle className="w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t.hero.cardTitle}</h3>
                         <p className="text-xs text-slate-500 dark:text-slate-400">{t.hero.cardSubtitle}</p>
                      </div>
                   </div>

                   {/* Card List Items */}
                   <div className="space-y-4">
                      {/* Item 1 */}
                      <div className="flex justify-between items-center">
                         <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.hero.cardItem1}</span>
                         <span className="text-lg font-bold text-slate-900 dark:text-white">{t.hero.cardValue1}</span>
                      </div>
                      {/* Item 2 */}
                      <div className="flex justify-between items-center">
                         <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.hero.cardItem2}</span>
                         <span className="text-sm font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10 px-2 py-1 rounded">{t.hero.cardValue2}</span>
                      </div>
                      {/* Item 3 */}
                      <div className="flex justify-between items-center">
                         <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.hero.cardItem3}</span>
                         <span className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-1 bg-green-50 dark:bg-green-900/10 px-2 py-1 rounded">
                            <Check className="w-3 h-3" /> {t.hero.cardValue3}
                         </span>
                      </div>
                   </div>

                </div>
            </div>

         </div>
      </div>

      {/* 2. Credit/Financial Section */}
      <div className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Visual Card with Green Background */}
            <div className="relative order-2 lg:order-1">
               <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-[2.5rem] p-12 relative overflow-hidden flex items-center justify-center">
                  
                  {/* Central Card */}
                  <div className="w-full max-w-sm relative z-10 flex flex-col items-center">
                     {/* Faded background icon */}
                     <div className="mb-8 opacity-20">
                        <div className="w-32 h-20 border-4 border-emerald-400 rounded-2xl flex items-center justify-center gap-4">
                           <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                           <div className="w-8 h-8 rounded-full border-4 border-emerald-400"></div>
                           <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                        </div>
                     </div>

                     {/* The floating card */}
                     <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full p-6 border border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t.creditSection.card.label}</span>
                           <span className="text-lg font-bold text-slate-900 dark:text-white">{t.creditSection.card.value}</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-6 overflow-hidden">
                           <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
                        </div>

                        <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors">
                           {t.creditSection.card.button}
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
               <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400 mb-6">
                  <Wallet className="w-6 h-6" />
               </div>
               
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {t.creditSection.title}
               </h2>
               
               <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                  {t.creditSection.desc}
               </p>

               <ul className="space-y-4">
                  {t.creditSection.items.map((item, index) => (
                     <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>

         </div>
      </div>

      {/* 3. Public Property Damage / Legal */}
      <div className="py-24 bg-white dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div>
               <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-6">
                  <UtilityPole className="w-6 h-6" />
               </div>
               
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {t.legalSection.title}
               </h2>
               
               <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                  {t.legalSection.desc}
               </p>

               <ul className="space-y-4">
                  {t.legalSection.items.map((item, index) => (
                     <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Right: Card */}
            <div>
               <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-3xl p-8">
                  <h3 className="text-yellow-800 dark:text-yellow-400 font-bold text-xl mb-6 flex items-center gap-2">
                     <AlertTriangle className="w-5 h-5" /> {t.legalSection.cardTitle}
                  </h3>
                  
                  <div className="space-y-4">
                     {/* Sub-card 1 */}
                     <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 border-l-yellow-500">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t.legalSection.cardItem1Title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{t.legalSection.cardItem1Desc}</p>
                     </div>
                     
                     {/* Sub-card 2 */}
                     <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 border-l-blue-500">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t.legalSection.cardItem2Title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{t.legalSection.cardItem2Desc}</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* 4. NEW SECTION: Tow Service / Guincho */}
      <div className="py-24 bg-blue-600 dark:bg-blue-800 text-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            
            {/* Header Icon */}
            <div className="flex justify-center mb-6">
                <Truck className="w-12 h-12 text-white/90" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
               {t.towSection.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-16 leading-relaxed">
               {t.towSection.desc}
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {/* Card 1 */}
               <div className="bg-blue-500/30 border border-blue-400/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">{t.towSection.card1Title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{t.towSection.card1Desc}</p>
               </div>

               {/* Card 2 */}
               <div className="bg-blue-500/30 border border-blue-400/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">{t.towSection.card2Title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{t.towSection.card2Desc}</p>
               </div>

               {/* Card 3 */}
               <div className="bg-blue-500/30 border border-blue-400/30 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">{t.towSection.card3Title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{t.towSection.card3Desc}</p>
               </div>

            </div>

         </div>
      </div>

      <div ref={pricingRef}>
         <PricingSection language={language} fixedCategory="DRIVER" />
      </div>

    </div>
  );
};

export default DriversLanding;
