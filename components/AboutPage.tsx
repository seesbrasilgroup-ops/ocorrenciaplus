import React from 'react';
import { Language } from '../types';
import { FeaturesSection, HowItWorksSection } from './LandingSections';
import VideoSection from './VideoSection';
import { translations } from '../translations';
import { Sparkles } from 'lucide-react';

interface AboutPageProps {
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const t = translations[language].aboutPage;

  return (
    <div className="animate-in fade-in duration-700">
      <div className="relative pt-20 pb-16 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
         
         {/* Animated Background Aura */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] -z-10 pointer-events-none">
            <div className="absolute top-10 left-[20%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-10 right-[20%] w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
         </div>

         {/* Badge */}
         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-amber-500 fill-current" />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
              Tecnologia OC+
            </span>
         </div>

         {/* Main Title with Shimmering Gradient */}
         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 animate-shimmer bg-[length:200%_auto]">
              {t.title}
            </span>
         </h1>

         {/* Subtitle */}
         <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t.subtitle}
         </p>
      </div>
      
      <FeaturesSection language={language} />
      <HowItWorksSection language={language} />
      <VideoSection language={language} />
    </div>
  );
};

export default AboutPage;