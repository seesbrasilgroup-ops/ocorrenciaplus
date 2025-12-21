import React from 'react';
import { Language } from '../types';

interface VideoSectionProps {
  language: Language;
}

const VideoSection: React.FC<VideoSectionProps> = ({ language }) => {
  // Translations unused as title is removed
  
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-700">
        
        {/* Native Video Element */}
        <video 
          className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1492666673288-3c4b4576eae2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
          {/* Using a direct MP4 link for traffic/tech ambience */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-at-night-4228-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;