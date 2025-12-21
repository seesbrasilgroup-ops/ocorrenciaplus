import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { PlayCircle } from 'lucide-react';

interface VideoSectionProps {
  language: Language;
}

const VideoSection: React.FC<VideoSectionProps> = ({ language }) => {
  const t = translations[language].video;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
          {t.tag}
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          {t.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          {t.subtitle}
        </p>
      </div>

      {/* Video Container with Glow */}
      <div className="relative w-full">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-brand-200/50 dark:bg-brand-500/20 rounded-[2rem] blur-[50px] -z-10 animate-pulse-slow"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-300 via-indigo-300 to-brand-300 dark:from-brand-600 dark:via-indigo-600 dark:to-brand-600 rounded-2xl opacity-40 blur-sm -z-10"></div>
        
        {/* Video Wrapper */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/50 aspect-video group cursor-pointer">
          {/* Using a placeholder iframe for a Tech/Car HUD video */}
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/eX_H2d_tN4A?autoplay=1&mute=1&loop=1&playlist=eX_H2d_tN4A&controls=0&showinfo=0&rel=0" 
            title="OC+ Demo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          ></iframe>

          {/* Overlay (simulated play button if we were not autoplaying, but kept for aesthetics or interaction hint) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* We can remove this if we auto-play, or keep it as a branding watermark */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;