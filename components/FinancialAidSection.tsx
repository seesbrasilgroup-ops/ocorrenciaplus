import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Landmark, FileText, CheckCircle, CreditCard, Shield, ArrowRight } from 'lucide-react';

interface FinancialAidSectionProps {
  language: Language;
}

const FinancialAidSection: React.FC<FinancialAidSectionProps> = ({ language }) => {
  const t = translations[language].financialAidSection;

  return (
    <div className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100 dark:bg-slate-800/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Landmark className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">{t.titleHighlight}</span>.
              <br />
              <span className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 block mt-2">{t.subtitle}</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              {t.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 transition-all hover:border-indigo-500 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-lg">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{t.cards.loan.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{t.cards.loan.desc}</p>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded inline-block">
                        {t.cards.loan.highlight}
                    </span>
                </div>

                <div className="flex-1 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 transition-all hover:border-indigo-500 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                         <div className="p-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{t.cards.insurance.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{t.cards.insurance.desc}</p>
                     <span className="text-xs font-bold text-purple-600 dark:text-purple-400 px-2 py-1 bg-purple-50 dark:bg-purple-900/30 rounded inline-block">
                        {t.cards.insurance.highlight}
                    </span>
                </div>
            </div>

            <button className="mt-10 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold shadow-lg shadow-indigo-500/30 transition-all flex items-center mx-auto lg:mx-0">
               {t.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Right Visual Content (Floating Cards) */}
          <div className="lg:w-1/2 w-full flex justify-center relative">
             {/* Decorative blob behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-[60px]"></div>

             <div className="relative w-full max-w-sm h-[400px]">
                
                {/* Credit Card Mockup */}
                <div className="absolute top-0 right-0 w-72 h-44 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 z-20 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-white font-bold italic tracking-wider">OC+ Credit</span>
                        <div className="flex gap-1">
                            <div className="w-6 h-6 bg-red-500/80 rounded-full"></div>
                            <div className="w-6 h-6 bg-amber-500/80 rounded-full -ml-3"></div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                             <div className="w-8 h-5 bg-yellow-200/20 rounded"></div>
                             <div className="w-4 h-4 rounded-full border border-white/30"></div>
                        </div>
                        <p className="text-slate-400 font-mono text-sm tracking-widest">•••• •••• •••• 4291</p>
                        <div className="flex justify-between text-white text-xs">
                            <span>PRE-APPROVED</span>
                            <span>VALID THRU 12/28</span>
                        </div>
                    </div>
                </div>

                {/* Document Mockup */}
                <div className="absolute bottom-0 left-0 w-72 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-700 pb-3">
                         <FileText className="w-8 h-8 text-purple-500" />
                         <div>
                            <h5 className="font-bold text-slate-900 dark:text-white text-sm">Boletim de Ocorrência</h5>
                            <p className="text-[10px] text-slate-400 uppercase">Gerado Automaticamente</p>
                         </div>
                    </div>
                    <div className="space-y-2 mb-4">
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full"></div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-5/6"></div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-4/6"></div>
                    </div>
                    <div className="flex items-center gap-2 text-green-500 text-xs font-bold bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                        <span>Pronto para Envio</span>
                    </div>
                </div>

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-indigo-300 dark:border-indigo-700 rounded-full opacity-30 animate-[spin_10s_linear_infinite]"></div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FinancialAidSection;