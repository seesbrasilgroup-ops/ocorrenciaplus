import React, { useRef } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Scale, Car, ArrowRight, CheckCircle2, AlertTriangle, FileText, DollarSign, CreditCard, ChevronDown, Lock, Shield, Zap } from 'lucide-react';
import PricingSection from './PricingSection';
import AnimatedCar from './AnimatedCar';

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
    <div className="pt-8 overflow-hidden">
      
      {/* 1. HERO SECTION: Emotional Hook & Immediate Solution */}
      <div className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pb-20 pt-10 sm:pt-20 rounded-b-[3rem] shadow-2xl z-10">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Copywriting Column */}
            <div className="text-center lg:text-left animate-in slide-in-from-left-4 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <Shield className="w-4 h-4" />
                {t.hero.tag}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                {t.hero.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t.hero.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={onStart}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  {t.hero.cta}
                </button>
                <button 
                  onClick={scrollToPricing}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                >
                  {t.hero.secondaryCta}
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold relative z-10">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full rounded-full" />
                     </div>
                   ))}
                </div>
                <span>{t.hero.trust}</span>
              </div>
            </div>

            {/* Visual Hook Column */}
            <div className="relative flex justify-center animate-in slide-in-from-right-4 duration-1000">
              <div className="w-full max-w-md relative z-10 transform hover:scale-105 transition-transform duration-500">
                 <AnimatedCar />
                 
                 {/* Floating Benefits */}
                 <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-3 animate-[bounce_3s_infinite]">
                    <div className="bg-green-500 p-2 rounded-lg text-white">
                       <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs text-slate-300 font-bold uppercase">Economia</p>
                       <p className="text-sm font-bold text-white">Orçamento Justo</p>
                    </div>
                 </div>

                 <div className="absolute bottom-10 -left-8 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center gap-3 animate-[pulse_4s_infinite]">
                    <div className="bg-amber-500 p-2 rounded-lg text-white">
                       <Scale className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs text-slate-300 font-bold uppercase">Proteção</p>
                       <p className="text-sm font-bold text-white">Sem Processos</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE PROBLEM (Agitate Pain) */}
      <div className="py-20 bg-slate-50 dark:bg-slate-950 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.problem.title}</h2>
               <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border-t-4 border-red-500 hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                     <AlertTriangle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-3">{t.problem.p1.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                     {t.problem.p1.desc}
                  </p>
               </div>

               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border-t-4 border-red-500 hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                     <Lock className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-3">{t.problem.p2.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                     {t.problem.p2.desc}
                  </p>
               </div>

               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border-t-4 border-red-500 hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                     <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-3">{t.problem.p3.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                     {t.problem.p3.desc}
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* 3. THE SOLUTION (Bento Grid Style) */}
      <div className="py-24 bg-white dark:bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {t.solution.title}
               </h2>
               <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                  A tecnologia que inverte o jogo a seu favor.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
               {/* Card 1: AI X-Ray (Large) */}
               <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-16 -mt-16 transition-all group-hover:bg-white/20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                     <div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4">
                           <Zap className="w-6 h-6 text-yellow-300 fill-current" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{t.solution.s1.title}</h3>
                        <p className="text-blue-100 max-w-md">{t.solution.s1.desc}</p>
                     </div>
                     <div className="mt-4 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 max-w-sm transform group-hover:translate-x-2 transition-transform">
                        <div className="flex justify-between items-center text-sm">
                           <span>Para-choque</span>
                           <span className="font-bold text-green-300">R$ 450,00</span>
                        </div>
                        <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                           <div className="bg-green-400 h-1.5 rounded-full w-[75%]"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card 2: Legal Protection */}
               <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative z-10 h-full flex flex-col">
                     <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                        <Scale className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.solution.s2.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                        {t.solution.s2.desc}
                     </p>
                     <div className="mt-4 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/10 p-2 rounded-lg w-fit">
                        <ShieldCheck className="w-4 h-4" /> Baseado no CTB
                     </div>
                  </div>
               </div>

               {/* Card 3: Instant Credit */}
               <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:shadow-lg transition-shadow">
                   <div className="relative z-10 h-full flex flex-col">
                     <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                        <CreditCard className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.solution.s3.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">
                        {t.solution.s3.desc}
                     </p>
                     <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-500">
                        <CheckCircle2 className="w-4 h-4" /> Pré-aprovado
                     </div>
                  </div>
               </div>

               {/* Card 4: Features List (Large) */}
               <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                     <h3 className="text-2xl font-bold mb-6">{t.features.title}</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                           <div className="mt-1 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 shrink-0">1</div>
                           <div>
                              <h4 className="font-bold mb-1">{t.features.f1.title}</h4>
                              <p className="text-sm text-slate-400">{t.features.f1.desc}</p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <div className="mt-1 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 shrink-0">2</div>
                           <div>
                              <h4 className="font-bold mb-1">{t.features.f2.title}</h4>
                              <p className="text-sm text-slate-400">{t.features.f2.desc}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* 4. PRICING ANCHOR */}
      <div ref={pricingRef} className="bg-slate-50 dark:bg-slate-950 py-10">
         <PricingSection language={language} fixedCategory="DRIVER" />
      </div>

      {/* 5. FINAL CTA (Emotional Closure) */}
      <div className="relative bg-blue-600 overflow-hidden py-24">
         <div className="absolute inset-0 bg-blue-600">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 to-transparent"></div>
         </div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
               {t.ctaBox.title}
            </h2>
            <p className="text-xl text-blue-100 mb-10">
               {t.ctaBox.desc}
            </p>
            <button 
               onClick={onStart}
               className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto"
            >
               {t.ctaBox.button}
               <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-6 text-sm text-blue-200/80">
               Cancelamento grátis a qualquer momento. Sem letras miúdas.
            </p>
         </div>
      </div>

    </div>
  );
};

export default DriversLanding;