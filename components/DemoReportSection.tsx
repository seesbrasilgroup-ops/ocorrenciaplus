import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { CheckCircle2, Shield, FileText, Wrench, AlertTriangle, Scale, DollarSign } from 'lucide-react';

interface DemoReportSectionProps {
  language: Language;
}

const DemoReportSection: React.FC<DemoReportSectionProps> = ({ language }) => {
  const t = translations[language].analysis; // Reusing analysis translations for consistency

  return (
    <div className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              <FileText className="w-4 h-4" />
              Resultado Real
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              O que você recebe em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">segundos</span>.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Esqueça a incerteza. Nossa IA gera um documento completo com identificação de peças, custos de mercado e proteção jurídica.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Wrench, text: "Lista de peças danificadas e reparos necessários" },
                { icon: DollarSign, text: "Estimativa de preço justo (Peças + Mão de Obra)" },
                { icon: Scale, text: "Análise de Culpabilidade baseada no CTB" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-transform hover:translate-x-2">
                  <div className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm text-blue-600 dark:text-blue-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Mockup */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <div className="relative transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
              
              {/* Main Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                {/* Header Mockup */}
                <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">Relatório Técnico #8492</h3>
                    <p className="text-slate-400 text-xs">Gerado agora • Honda Civic 2021</p>
                  </div>
                  <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">CONCLUÍDO</div>
                </div>

                {/* Body Mockup */}
                <div className="p-6 space-y-6">
                  {/* Severity & Image Placeholder */}
                  <div className="flex gap-4">
                     <div className="w-1/3 aspect-square bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1598549377983-4a001a187a2d?auto=format&fit=crop&w=300&q=80" alt="Car Damaged" className="opacity-80 object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-red-500/20 animate-pulse"></div>
                     </div>
                     <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                           <span className="text-sm text-slate-500 dark:text-slate-400">Dano Estimado</span>
                           <span className="text-red-500 font-bold">Grave (78%)</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                           <div className="bg-red-500 h-2 rounded-full w-[78%]"></div>
                        </div>
                        <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                           <p className="text-xs text-red-700 dark:text-red-300 flex items-center">
                              <AlertTriangle className="w-3 h-3 mr-1" /> Impacto estrutural detectado.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Parts List Mockup */}
                  <div className="space-y-2">
                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Peças Afetadas</h4>
                     <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4 text-blue-500" />
                           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Para-choque Dianteiro</span>
                        </div>
                        <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">Trocar</span>
                     </div>
                     <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4 text-blue-500" />
                           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Farol Direito LED</span>
                        </div>
                        <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">Trocar</span>
                     </div>
                     <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4 text-blue-500" />
                           <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Capô</span>
                        </div>
                        <span className="text-xs font-bold bg-amber-100 text-amber-600 px-2 py-1 rounded">Reparar</span>
                     </div>
                  </div>

                  {/* Total Cost Mockup */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
                     <div>
                        <p className="text-xs text-slate-500">Orçamento Médio de Mercado</p>
                        <p className="text-sm text-slate-400">Inclui peças e mão de obra</p>
                     </div>
                     <div className="text-right">
                        <p className="text-2xl font-black text-slate-900 dark:text-white">R$ 4.250</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce">
                 <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                       <Shield className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Proteção</p>
                       <p className="text-sm font-bold text-slate-900 dark:text-white">Análise Jurídica</p>
                    </div>
                 </div>
              </div>
              
               {/* Floating Badge 2 */}
               <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-xl shadow-blue-600/30">
                 <div className="flex items-center gap-3">
                    <div>
                       <p className="text-xs text-blue-100 font-bold uppercase">Economia</p>
                       <p className="text-sm font-bold">Sem Sobrepreço</p>
                    </div>
                    <CheckCircle2 className="w-6 h-6" />
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoReportSection;