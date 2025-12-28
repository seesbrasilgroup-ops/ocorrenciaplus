import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { TrendingUp, BarChart3, Activity, ArrowRight, PieChart, Wallet } from 'lucide-react';
import PricingSection from './PricingSection';
import AnimatedCar from './AnimatedCar';

interface ShopsLandingProps {
  language: Language;
  onRegister: () => void;
}

const ShopsLanding: React.FC<ShopsLandingProps> = ({ language, onRegister }) => {
  const t = translations[language].shopsLanding;

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 text-white">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 border border-amber-500/30">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t.hero.subtitle}
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
                {t.hero.desc}
              </p>
              <button 
                onClick={onRegister}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg font-bold text-lg shadow-xl shadow-amber-500/20 transition-all transform hover:scale-105 flex items-center"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            {/* Abstract Dashboard Visual - REPLACED LEAD LIST WITH STATS DASHBOARD */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl">
                 <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">OC++ Analytics Center</div>
                 </div>
                 
                 {/* Top Stats Row */}
                 <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                        <p className="text-xs text-slate-400 uppercase mb-1">Faturamento (Mês)</p>
                        <p className="text-2xl font-bold text-green-400">R$ 142.5k</p>
                        <p className="text-xs text-green-500 flex items-center mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" /> +18% vs mês ant.
                        </p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                        <p className="text-xs text-slate-400 uppercase mb-1">Ticket Médio</p>
                        <p className="text-2xl font-bold text-white">R$ 3.850</p>
                        <p className="text-xs text-amber-500 mt-1">Estável</p>
                    </div>
                 </div>

                 {/* Bar Chart Simulation */}
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Performance Semanal</span>
                        <span>Meta: 100%</span>
                    </div>
                    <div className="flex items-end h-24 gap-2 border-b border-slate-600 pb-2">
                        <div className="w-full bg-slate-700 rounded-t h-[40%] hover:bg-amber-500 transition-colors"></div>
                        <div className="w-full bg-slate-700 rounded-t h-[60%] hover:bg-amber-500 transition-colors"></div>
                        <div className="w-full bg-slate-700 rounded-t h-[30%] hover:bg-amber-500 transition-colors"></div>
                        <div className="w-full bg-slate-700 rounded-t h-[80%] hover:bg-amber-500 transition-colors"></div>
                        <div className="w-full bg-amber-500 rounded-t h-[95%] shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                        <div className="w-full bg-slate-700 rounded-t h-[50%] hover:bg-amber-500 transition-colors"></div>
                        <div className="w-full bg-slate-700 rounded-t h-[70%] hover:bg-amber-500 transition-colors"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>Seg</span>
                        <span>Ter</span>
                        <span>Qua</span>
                        <span>Qui</span>
                        <span>Sex</span>
                        <span>Sáb</span>
                        <span>Dom</span>
                    </div>
                 </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.benefits.title}</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 bg-brand-100 dark:bg-brand-500/20 rounded-full flex items-center justify-center mb-6">
                    <Wallet className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.benefits.b1.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{t.benefits.b1.desc}</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                    <Activity className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.benefits.b2.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{t.benefits.b2.desc}</p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                    <PieChart className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.benefits.b3.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{t.benefits.b3.desc}</p>
              </div>
           </div>
        </div>
      </div>

      {/* Pricing tailored for Shops */}
      <PricingSection language={language} fixedCategory="SHOP" />

      {/* Final Call to Action with Car */}
      <div className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                    Revolucione sua oficina hoje
                 </h2>
                 <p className="text-xl text-slate-300 mb-8">
                    Junte-se às oficinas mais modernas do mercado. Aumente seu ticket médio e receba clientes prontos para fechar serviço.
                 </p>
                 <button
                    onClick={onRegister}
                    className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg font-bold text-lg shadow-xl shadow-amber-500/20 transition-all transform hover:scale-105 inline-flex items-center"
                 >
                    {t.hero.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                 </button>
              </div>
              <div className="lg:w-1/2 flex justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                  <div className="w-full max-w-md transform scale-90 lg:scale-110">
                     <AnimatedCar />
                  </div>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default ShopsLanding;