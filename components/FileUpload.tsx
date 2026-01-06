
import React, { useState, useRef } from 'react';
import { Loader2, CloudUpload } from 'lucide-react';
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
    <div 
      className={`w-full h-full rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8 cursor-pointer
        ${dragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
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

      <div className="relative mb-4">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400">
           {isLoading ? (
             <Loader2 className="w-8 h-8 animate-spin" />
           ) : (
             <CloudUpload className="w-8 h-8" />
           )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
        {isLoading ? t.analyzing : t.title}
      </h3>
      
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {isLoading ? t.aiSteps : t.dragDrop}
      </p>

    </div>
  );
};

export default FileUpload;
