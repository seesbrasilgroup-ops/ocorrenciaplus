import React, { useState, useRef } from 'react';
import { Upload, Camera, Loader2 } from 'lucide-react';
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
    <div className="w-full max-w-xl mx-auto">
      <div
        className={`relative group rounded-2xl border-2 border-dashed transition-all duration-300 ease-in-out ${
          dragActive 
            ? "border-blue-500 bg-blue-50 dark:bg-brand-500/10" 
            : "border-slate-300 dark:border-slate-600 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
        } p-8 sm:p-12 text-center cursor-pointer`}
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

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className={`p-4 rounded-full ${
            isLoading 
              ? 'bg-blue-100 dark:bg-brand-500/20' 
              : 'bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
            } transition-colors`}>
            {isLoading ? (
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            ) : (
              <Camera className="w-10 h-10 text-slate-400 dark:text-brand-400" />
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {isLoading ? t.analyzing : t.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto">
              {isLoading 
                ? t.aiSteps
                : t.dragDrop}
            </p>
          </div>

          {!isLoading && (
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              {t.button}
            </button>
          )}
        </div>
        
        {dragActive && (
          <div className="absolute inset-0 bg-blue-500/10 rounded-2xl pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default FileUpload;