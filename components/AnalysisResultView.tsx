import React from 'react';
import { AnalysisResult, Language } from '../types';
import { AlertTriangle, CheckCircle, Wrench, DollarSign, MapPin, Lock, Eye, Scale, BookOpen, AlertCircle, Building, Landmark, CreditCard, ArrowRightCircle, Phone, Truck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { translations, partActionMap } from '../translations';

interface AnalysisResultViewProps {
  result: AnalysisResult;
  imageSrc: string | null;
  onReset: () => void;
  language: Language;
  isPremium: boolean;
  onUnlock: () => void;
  onRequestHelp: (mode: 'HELP' | 'SOLUTION') => void;
}

const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({ result, imageSrc, onReset, language, isPremium, onUnlock, onRequestHelp }) => {
  const t = translations[language].analysis;
  const tEmerg = translations[language].emergency;
  const actions = partActionMap[language];

  const severityColor = (score: number) => {
    if (score < 30) return 'text-green-500 dark:text-green-400';
    if (score < 70) return 'text-amber-500 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-500';
  };

  const pieData = [
    { name: t.costs.partsTotal, value: result.costs.partsTotal },
    { name: t.costs.labor, value: result.costs.laborHours * result.costs.laborRate },
  ];
  const COLORS = ['#3b82f6', '#f59e0b'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{t.title}</h2>
             {!isPremium ? (
               <span className="px-2 py-1 rounded bg-gray-200 dark:bg-slate-700 text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600">Free Preview</span>
             ) : (
               <span className="px-2 py-1 rounded bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 text-xs border border-brand-200 dark:border-brand-500/50 font-bold">PREMIUM</span>
             )}
          </div>
          <p className="text-gray-500 dark:text-gray-400">ID: #OC-{result.id.slice(0, 6).toUpperCase()} • {new Date().toLocaleDateString()}</p>
        </div>
        <button 
          onClick={onReset}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold rounded-lg shadow-md transition-all hover:-translate-y-0.5"
        >
          {t.newAnalysis}
        </button>
      </div>

      {/* EMERGENCY ACTION BAR */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 mb-8 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-amber-500">
         <div className="flex-1">
            <h3 className="text-xl font-bold text-amber-400 mb-1 flex items-center">
               <AlertTriangle className="w-5 h-5 mr-2" /> Precisa de suporte imediato?
            </h3>
            <p className="text-slate-300 text-sm">Selecione como deseja ser atendido agora.</p>
         </div>
         <div className="flex gap-4 w-full md:w-auto">
            <button 
               onClick={() => onRequestHelp('HELP')}
               className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-transform hover:scale-105"
            >
               <Phone className="w-5 h-5" /> {tEmerg.btnHelp}
            </button>
            <button 
               onClick={() => onRequestHelp('SOLUTION')}
               className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg font-bold transition-transform hover:scale-105"
            >
               <Truck className="w-5 h-5" /> {tEmerg.btnSolution}
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Image & Quick Stats (ALWAYS VISIBLE) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300">
            <div className="aspect-video bg-black relative">
              {imageSrc && (
                <img src={imageSrc} alt="Analyzed Car" className="w-full h-full object-contain" />
              )}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className={`font-bold ${severityColor(result.damage.severityScore)}`}>
                  {result.damage.severityScore}% {t.severity}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{result.vehicle.make} {result.vehicle.model}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{result.vehicle.year}</span>
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-700 rounded text-xs text-gray-700 dark:text-white border border-gray-200 dark:border-transparent">{result.vehicle.type}</span>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600/50">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-brand-600 dark:text-brand-400 font-semibold">{t.summary}:</span> {result.damage.summary}
                </p>
              </div>
            </div>
          </div>

          {/* LEGAL ANALYSIS CARD */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 border border-amber-200 dark:border-amber-500/30 shadow-lg relative overflow-hidden transition-colors duration-300">
             <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 dark:bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
               <Scale className="w-5 h-5 mr-2 text-amber-500" />
               {t.legal.title}
             </h3>
             
             <div className={`space-y-4 ${!isPremium ? 'filter blur-sm select-none opacity-50' : ''}`}>
               <div>
                 <p className="text-xs text-amber-600 dark:text-amber-400 uppercase font-bold mb-1">{t.legal.assessment}</p>
                 <p className="text-gray-700 dark:text-gray-200 text-sm">{result.legal.liabilityAssessment}</p>
               </div>
               <div>
                 <p className="text-xs text-amber-600 dark:text-amber-400 uppercase font-bold mb-1 flex items-center">
                    <BookOpen className="w-3 h-3 mr-1"/> CTB (Lei)
                 </p>
                 <p className="text-gray-600 dark:text-gray-300 text-xs italic">"{result.legal.ctbReference}"</p>
               </div>
               <div className="bg-amber-50 dark:bg-slate-900/50 p-3 rounded border border-amber-100 dark:border-slate-700">
                 <p className="text-gray-700 dark:text-gray-300 text-sm">
                   <span className="text-amber-600 dark:text-amber-500 font-bold">Dica:</span> {result.legal.advice}
                 </p>
               </div>
             </div>

             {!isPremium && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                   <Lock className="w-8 h-8 text-amber-500 mb-2" />
                   <p className="text-gray-900 dark:text-white font-bold text-sm">Análise de Culpabilidade Bloqueada</p>
                   <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Descubra quem paga a conta segundo a lei.</p>
                </div>
             )}
             
             <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-4 border-t border-gray-200 dark:border-slate-700/50 pt-2">{t.legal.disclaimer}</p>
          </div>
        </div>

        {/* Middle Column: Parts & Repairs (ALWAYS VISIBLE - BUT NO PRICES if Locked) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg h-full transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-brand-500" />
              {t.parts.title}
            </h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {result.parts.map((part, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/30 rounded-lg border border-gray-200 dark:border-slate-700/50 hover:border-brand-500/30 transition-colors relative overflow-hidden">
                  <div className="flex items-center gap-3 z-10">
                    {part.status === 'CRITICAL' ? (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{part.name}</p>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                        part.action === 'REPLACE' ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300' : 
                        part.action === 'REPAIR' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300' : 
                        'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300'
                      }`}>
                        {actions[part.action] || part.action}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`text-sm text-gray-600 dark:text-gray-300 z-10 ${!isPremium ? 'blur-sm opacity-50 select-none' : ''}`}>
                    {result.costs.currency} {part.estimatedCost.toLocaleString(language === 'pt-BR' ? 'pt-BR' : 'en-US')}
                  </span>
                </div>
              ))}
              {!isPremium && (
                <div className="p-4 text-center text-gray-500 text-xs italic border-t border-gray-200 dark:border-slate-700 mt-4">
                  <Eye className="w-4 h-4 mx-auto mb-1 opacity-50"/>
                  Individual part prices are hidden in free mode.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Costs & CTA (BLURRED IF FREE) */}
        <div className="lg:col-span-1 relative flex flex-col gap-6">
          <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg flex flex-col transition-all duration-500 ${!isPremium ? 'filter blur-md select-none' : ''}`}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-500" />
              {t.costs.title}
            </h3>
            
            <div className="h-48 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-1"></span> {t.costs.partsTotal}</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-1"></span> {t.costs.labor}</div>
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-200 dark:border-slate-700 pt-4 flex-grow">
              <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
                <span>{t.costs.partsTotal}</span>
                <span>{result.costs.currency} {result.costs.partsTotal.toLocaleString(language === 'pt-BR' ? 'pt-BR' : 'en-US')}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
                <span>{t.costs.labor} ({result.costs.laborHours}h)</span>
                <span>{result.costs.currency} {(result.costs.laborHours * result.costs.laborRate).toLocaleString(language === 'pt-BR' ? 'pt-BR' : 'en-US')}</span>
              </div>
              <div className="flex justify-between text-gray-900 dark:text-white text-xl font-bold pt-2 border-t border-gray-200 dark:border-slate-700 mt-2">
                <span>{t.costs.totalEstimated}</span>
                <span className="text-green-600 dark:text-green-400">
                  {result.costs.currency} {((result.costs.totalMin + result.costs.totalMax) / 2).toLocaleString(language === 'pt-BR' ? 'pt-BR' : 'en-US')}
                </span>
              </div>
            </div>
            
            {/* Shops (Blurred in free) */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
               <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center"><MapPin className="w-4 h-4 mr-1 text-brand-500"/> {t.recommendations.title}</h4>
               <div className="space-y-2">
                  <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-full opacity-50"></div>
                  <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-3/4 opacity-50"></div>
                  <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-5/6 opacity-50"></div>
               </div>
            </div>
          </div>
          
          {/* ADDED SERVICE: LOAN / FINANCE */}
          <div className={`bg-emerald-50 dark:bg-emerald-950/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-all ${!isPremium ? 'filter blur-md select-none opacity-50' : ''}`}>
             <div className="flex items-start gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                   <Landmark className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{t.services.loan.title}</h4>
                   <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-3">
                      {t.services.loan.desc}
                   </p>
                   <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center transition-colors">
                      <CreditCard className="w-3 h-3 mr-1.5" /> {t.services.loan.cta}
                   </button>
                </div>
             </div>
          </div>

          {/* PAYWALL OVERLAY */}
          {!isPremium && (
            <div className="absolute inset-0 z-20 flex items-center justify-center p-6 rounded-xl bg-gray-100/50 dark:bg-slate-900/40">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-brand-200 dark:border-brand-500/30 p-6 rounded-2xl shadow-2xl text-center max-w-sm transform hover:scale-105 transition-all duration-300">
                <div className="bg-brand-100 dark:bg-brand-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  <Lock className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.costs.lockedTitle}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {t.costs.lockedDesc}
                </p>
                <button 
                  onClick={onUnlock}
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  {t.costs.lockedButton}
                </button>
              </div>
            </div>
          )}
          
          {isPremium && (
             <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-green-900/20 transition-all transform hover:scale-[1.02]">
              {t.costs.unlockedCta}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default AnalysisResultView;