
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowRight, Smartphone, CreditCard, Users, BarChart, CheckCircle, Zap } from 'lucide-react';
import PricingSection from './PricingSection';

interface ShopsLandingProps {
  language: Language;
  onRegister: () => void;
}

const ShopsLanding: React.FC<ShopsLandingProps> = ({ language, onRegister }) => {
  const t = translations[language].shopsLanding;

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      
      {/* 1. Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-8 border border-amber-200 dark:border-amber-800">
             <Zap className="w-4 h-4 fill-current" />
             {t.hero.subtitle}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-slate-900 dark:text-white">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
            {t.hero.desc}
          </p>
          <button 
             onClick={onRegister} 
             className="px-10 py-5 bg-amber-500 text-white rounded-xl font-bold text-xl hover:bg-amber-600 transition-transform hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center gap-4"
          >
            {t.hero.cta} <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 2. Process Section (Workflow) */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t.process.title}</h2>
               <p className="text-xl text-slate-500 dark:text-slate-400">{t.process.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-slate-300 dark:bg-slate-700 z-0"></div>

               {/* Step 1 */}
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border-2 border-amber-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform rotate-3">
                     <Users className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.process.step1.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 px-4">{t.process.step1.desc}</p>
               </div>

               {/* Step 2 */}
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border-2 border-amber-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform -rotate-3">
                     <Smartphone className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.process.step2.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 px-4">{t.process.step2.desc}</p>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border-2 border-amber-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform rotate-3">
                     <CheckCircle className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.process.step3.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 px-4">{t.process.step3.desc}</p>
               </div>
            </div>
         </div>
      </div>

      {/* 3. Management Feature Section (Grid) */}
      <div className="py-24 bg-white dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                  {t.management.title}
               </h2>
               <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {t.management.desc}
               </p>
               
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-600 dark:text-amber-400">
                        <Users className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">{t.management.card1.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{t.management.card1.desc}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-600 dark:text-amber-400">
                        <BarChart className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">{t.management.card2.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{t.management.card2.desc}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg text-amber-600 dark:text-amber-400">
                        <Smartphone className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">{t.management.card3.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{t.management.card3.desc}</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
               {/* Abstract App UI Mockup */}
               <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm h-32 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center"><Zap size={16}/></div>
                        <div><div className="text-2xl font-bold">12</div><div className="text-xs text-slate-400">Novos Leads</div></div>
                     </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm h-32 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center"><BarChart size={16}/></div>
                        <div><div className="text-2xl font-bold">R$ 45k</div><div className="text-xs text-slate-400">Receita Mês</div></div>
                     </div>
                     <div className="col-span-2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                           <div>
                              <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
                              <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
                           </div>
                           <div className="ml-auto px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">Pendente</div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded mb-2"></div>
                        <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-700 rounded"></div>
                     </div>
                  </div>
                  
                  {/* Floating Notification */}
                  <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                     <CheckCircle className="w-6 h-6" />
                     <div>
                        <p className="font-bold text-sm">Orçamento Aprovado</p>
                        <p className="text-xs text-amber-100">Chevrolet Onix - R$ 2.400</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* 4. Financial Benefit Section */}
      <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
         {/* Background glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px]"></div>
         
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-block bg-amber-500 text-slate-900 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider mb-6">
               {t.finance.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{t.finance.title}</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
               {t.finance.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <CreditCard className="w-8 h-8 text-amber-400 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Sem Calote</h4>
                  <p className="text-sm text-slate-400">O risco de crédito é 100% do OC+. Você recebe garantido.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <Zap className="w-8 h-8 text-amber-400 mb-4" />
                  <h4 className="font-bold text-lg mb-2">D+2</h4>
                  <p className="text-sm text-slate-400">Pagamento liberado na sua conta 2 dias após a entrega.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <BarChart className="w-8 h-8 text-amber-400 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Sem Maquininha</h4>
                  <p className="text-sm text-slate-400">Tudo digital. Economize nas taxas de antecipação.</p>
               </div>
            </div>
         </div>
      </div>

      {/* 5. Stats - Big Numbers */}
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-xl font-bold uppercase tracking-widest mb-16 text-slate-400 text-center">{t.benefits.title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div>
                 <div className="text-5xl md:text-7xl font-black mb-4 text-slate-900 dark:text-white">+45%</div>
                 <h3 className="text-xl font-bold mb-2 text-amber-600">{t.benefits.b1.title}</h3>
                 <p className="text-slate-500">{t.benefits.b1.desc}</p>
              </div>
              <div>
                 <div className="text-5xl md:text-7xl font-black mb-4 text-slate-900 dark:text-white">-30%</div>
                 <h3 className="text-xl font-bold mb-2 text-amber-600">{t.benefits.b2.title}</h3>
                 <p className="text-slate-500">{t.benefits.b2.desc}</p>
              </div>
              <div>
                 <div className="text-5xl md:text-7xl font-black mb-4 text-slate-900 dark:text-white">2.5x</div>
                 <h3 className="text-xl font-bold mb-2 text-amber-600">{t.benefits.b3.title}</h3>
                 <p className="text-slate-500">{t.benefits.b3.desc}</p>
              </div>
           </div>
        </div>
      </div>

      <PricingSection language={language} fixedCategory="SHOP" />

      {/* Final CTA */}
      <div className="py-32 bg-slate-50 dark:bg-slate-900 text-center border-t border-slate-200 dark:border-slate-800">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl mx-auto">Pronto para modernizar sua oficina?</h2>
         <button onClick={onRegister} className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-2xl hover:opacity-90 transition-opacity rounded-xl shadow-xl">
            Começar Agora
         </button>
      </div>

    </div>
  );
};

export default ShopsLanding;
