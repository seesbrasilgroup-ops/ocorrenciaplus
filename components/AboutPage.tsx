import React from 'react';
import { Language } from '../types';
import { FeaturesSection, HowItWorksSection } from './LandingSections';
import VideoSection from './VideoSection';
import { translations } from '../translations';

interface AboutPageProps {
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const t = translations[language].aboutPage;

  return (
    <div className="animate-in fade-in duration-500">
      <div className="relative pt-16 pb-12 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-[80px]"></div>
         </div>
         <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t.title}
         </h1>
         <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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