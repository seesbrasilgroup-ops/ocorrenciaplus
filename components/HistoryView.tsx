import React, { useEffect, useState } from 'react';
import { AnalysisResult, Language, ViewState } from '../types';
import { translations } from '../translations';
import { getHistory, deleteHistoryItem } from '../services/storageService';
import { Calendar, Car, Trash2, ChevronRight, AlertCircle } from 'lucide-react';

interface HistoryViewProps {
  language: Language;
  onSelectAnalysis: (analysis: AnalysisResult) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ language, onSelectAnalysis }) => {
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const t = translations[language].history;

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = deleteHistoryItem(id);
    setHistory(updated);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(language, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-brand-600 dark:text-brand-500" />
          {t.title}
        </h1>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed transition-colors duration-300">
          <Car className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400 text-lg">{t.empty}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectAnalysis(item)}
              className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors rounded-xl p-4 border border-slate-200 dark:border-slate-700 cursor-pointer group relative overflow-hidden shadow-sm"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pl-2">
                
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mr-3">
                      {item.vehicle.make} {item.vehicle.model}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {item.vehicle.year}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(item.timestamp)}
                    </span>
                    <span className={`flex items-center ${item.damage.severityScore > 70 ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-yellow-400'}`}>
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {item.damage.severityScore}% Severity
                    </span>
                  </div>
                </div>

                {/* Cost & Action */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                  <div className="text-right">
                     <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">{t.cost}</p>
                     <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {item.costs.currency} {Math.round((item.costs.totalMin + item.costs.totalMax) / 2).toLocaleString()}
                     </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => handleDelete(e, item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-400/10 rounded-lg transition-colors"
                      title={t.delete}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryView;