import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Scale, Camera, Handshake, Wrench, Users, FileText, CheckCircle2, ScanLine, ArrowRight, Activity, Zap, Search } from 'lucide-react';

interface LandingProps {
  language: Language;
}

export const FeaturesSection: React.FC<LandingProps> = ({ language }) => {
  const t = translations[language].features;

  const features = [
    {
      icon: Users,
      title: t.item1.title,
      desc: t.item1.desc,
      color: 'blue',
      delay: '0',
    },
    {
      icon: Wrench,
      title: t.item2.title,
      desc: t.item2.desc,
      color: 'amber',
      delay: '100',
    },
    {
      icon: ShieldCheck,
      title: t.item3.title,
      desc: t.item3.desc,
      color: 'emerald',
      delay: '200',
    }
  ];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3 animate-fade-in-up">
            {t.tag}
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            {t.title}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 overflow-hidden animate-in fade-in slide-in-from-bottom-8`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-${feature.color}-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 dark:bg-${feature.color}-500/20 text-${feature.color}-600 dark:text-${feature.color}-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>

                <div className="mt-8 flex items-center text-sm font-bold text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  <span className="mr-2">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HowItWorksSection: React.FC<LandingProps> = ({ language }) => {
  const t = translations[language].howItWorks;

  const steps = [
    {
      icon: Camera,
      title: t.step1,
      desc: t.desc1,
      color: "blue"
    },
    {
      icon: Activity,
      title: t.step2,
      desc: t.desc2,
      color: "amber"
    },
    {
      icon: Handshake,
      title: t.step3,
      desc: t.desc3,
      color: "green"
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
            <Zap className="w-4 h-4 text-amber-500 mr-2" />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">{t.tag}</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.title}
          </h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-800">
             <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 w-0 animate-fill-line"></div>
          </div>
          
          <style>{`
            @keyframes fill-line {
              from { width: 0%; }
              to { width: 100%; }
            }
            .animate-fill-line {
              animation: fill-line 2s ease-out forwards;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-4 border-white dark:border-slate-900 z-20">
                  {idx + 1}
                </div>

                {/* Icon Circle */}
                <div className={`w-24 h-24 bg-white dark:bg-slate-900 border-4 border-${step.color}-100 dark:border-${step.color}-900 rounded-full flex items-center justify-center mb-6 z-10 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-${step.color}-500 relative`}>
                  <div className={`absolute inset-0 bg-${step.color}-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300`}></div>
                  <step.icon className={`w-10 h-10 text-slate-400 group-hover:text-${step.color}-500 transition-colors`} />
                </div>

                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};