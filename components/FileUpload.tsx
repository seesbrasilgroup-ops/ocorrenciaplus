import React, { useState, useRef } from 'react';
import { Upload, Camera, Loader2, Scan, Zap, Aperture } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  isLoading: boolean;
  language: Language;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, isLoading, language }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = translations[language].upload;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full max-w-xl mx-auto relative group z-10">
      <style>{`
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan-beam {
          0%, 100% { top: 5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { box-shadow: 0 0 30px 5px rgba(59, 130, 246, 0.6); }
          100% { top: 95%; opacity: 0; }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
        .animate-scan {
          animation: scan-beam 3s ease-in-out infinite;
        }
      `}</style>

      {/* Glow Behind */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-30 dark:opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Container Principal */}
      <div
        className={`relative relative overflow-hidden rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-blue-100 dark:border-white/10 p-1 cursor-pointer transition-all duration-300 transform hover:scale-[1.01] shadow-2xl shadow-blue-900/5 dark:shadow-none
          ${dragActive ? 'ring-4 ring-blue-500/50 scale-[1.02]' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="image/*"
          disabled={isLoading}
        />

        {/* Animated Rotating Border (Conic Gradient) */}
        <div className={`absolute inset-0 bg-transparent overflow-hidden rounded-2xl ${isLoading ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`}>
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(transparent,transparent,transparent,#3b82f6)] animate-border-spin opacity-50 dark:opacity-30"></div>
        </div>

        {/* Inner Content Card */}
        <div className="relative bg-white/80 dark:bg-slate-900/80 rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center min-h-[320px] overflow-hidden">
          
          {/* Tech Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          {/* Decorative Corners (HUD Style) */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 dark:border-blue-500/50 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 dark:border-blue-500/50 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 dark:border-blue-500/50 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 dark:border-blue-500/50 rounded-br-lg"></div>

          {/* Scanning Beam */}
          {!isLoading && (
            <div className="absolute left-4 right-4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-scan pointer-events-none z-0 opacity-50 dark:opacity-100"></div>
          )}

          {/* Center Icon Interaction */}
          <div className="relative z-10 mb-6 group-hover:scale-110 transition-transform duration-500">
             {/* Pulsing Rings */}
             <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full animate-ping"></div>
             <div className="absolute inset-[-10px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full animate-pulse"></div>
             
             <div className={`w-24 h-24 rounded-full flex items-center justify-center border-2 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300
                ${isLoading 
                  ? 'bg-white dark:bg-slate-800 border-cyan-500 shadow-cyan-500/40' 
                  : 'bg-white/80 dark:bg-slate-800/80 border-blue-200 dark:border-blue-500/50 group-hover:border-blue-400 dark:group-hover:border-cyan-400 group-hover:bg-white dark:group-hover:bg-slate-800'
                }
             `}>
                {isLoading ? (
                   <Loader2 className="w-10 h-10 text-cyan-500 dark:text-cyan-400 animate-spin" />
                ) : (
                   dragActive ? <Zap className="w-10 h-10 text-amber-500 dark:text-yellow-400 animate-bounce" /> : <Scan className="w-10 h-10 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors" />
                )}
             </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center space-y-3">
             <h3 className={`text-2xl font-bold tracking-tight transition-all duration-300 ${isLoading ? 'text-blue-600 dark:text-cyan-400 animate-pulse' : 'text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-100'}`}>
               {isLoading ? t.analyzing : t.title}
             </h3>
             
             <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">
               {isLoading ? t.aiSteps : t.dragDrop}
             </p>

             {/* Dynamic Button */}
             {!isLoading && (
               <div className="mt-6">
                 <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 shadow-lg shadow-blue-500/20">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-8 py-1 text-sm font-medium text-slate-900 dark:text-white backdrop-blur-3xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors gap-2">
                      <Camera className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent font-bold">
                        {t.button}
                      </span>
                    </span>
                 </button>
               </div>
             )}
          </div>

          {/* Decorative Status Indicators */}
          <div className="absolute bottom-6 flex gap-4 opacity-60 dark:opacity-40 group-hover:opacity-100 dark:group-hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-[10px] uppercase text-emerald-600 dark:text-green-500 font-mono font-bold">System Ready</span>
              </div>
              <div className="flex items-center gap-1">
                 <Aperture className="w-3 h-3 text-blue-500 animate-[spin_10s_linear_infinite]" />
                 <span className="text-[10px] uppercase text-blue-600 dark:text-blue-500 font-mono font-bold">AI Active</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;