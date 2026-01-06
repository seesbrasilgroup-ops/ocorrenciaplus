import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Camera, Handshake, Wrench, Users, Activity } from 'lucide-react';

interface LandingProps {
  language: Language;
}

export const FeaturesSection: React.FC<LandingProps> = ({ language }) => {
  const t = translations[language].features;

  const features = [
    { icon: Users, title: t.item1.title, desc: t.item1.desc },
    { icon: Wrench, title: t.item2.title, desc: t.item2.desc },
    { icon: ShieldCheck, title: t.item3.title, desc: t.item3.desc }
  ];

  return (
    <div className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">{t.tag}</span>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 border border-gray-100 dark:border-slate-800 rounded-xl hover:border-gray-300 dark:hover:border-slate-600 transition-colors">
              <feature.icon className="w-8 h-8 text-slate-900 dark:text-white mb-4" strokeWidth={1.5} />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
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
    { icon: Camera, title: t.step1, desc: t.desc1 },
    { icon: Activity, title: t.step2, desc: t.desc2 },
    { icon: Handshake, title: t.step3, desc: t.desc3 }
  ];

  return (
    <div className="py-24 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">{t.tag}</span>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) - Very Subtle */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gray-200 dark:bg-slate-700 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center z-10 bg-gray-50 dark:bg-slate-900 px-2">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-6 h-6 text-slate-900 dark:text-white" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
              <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};