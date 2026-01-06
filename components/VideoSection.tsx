
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  language: Language;
}

const VideoSection: React.FC<VideoSectionProps> = ({ language }) => {
  const t = translations[language].videoSection;

  return (
    <div className="relative w-full h-[85vh] bg-black overflow-hidden flex items-center justify-center">
      
      {/* Background Video (Muted, Darkened) */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-at-night-4228-large.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-6">
        
        {/* Badge Pill */}
        <div className="mb-8 px-5 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-md">
          <span className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-widest">
            {t.badge}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-center max-w-5xl mb-12">
          {t.title}
        </h2>

        {/* Play Button & Label */}
        <button className="group relative flex flex-col items-center gap-6 focus:outline-none">
           {/* Glow Effect behind button */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl group-hover:bg-blue-600/50 transition-all duration-500"></div>
           
           {/* The Button */}
           <div className="relative w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] border border-blue-400/30">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
           </div>

           {/* Label */}
           <span className="text-xs font-bold text-slate-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
              {t.cta}
           </span>
        </button>

      </div>
    </div>
  );
};

export default VideoSection;
