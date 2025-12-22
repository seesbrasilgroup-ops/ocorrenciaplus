import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Phone, Truck, ShieldAlert, AlertTriangle, UserCheck, Flame, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface EmergencyFlowProps {
  language: Language;
  onComplete: (mode: 'HELP' | 'SOLUTION', data: any) => void;
  onCancel: () => void;
}

const EmergencyFlow: React.FC<EmergencyFlowProps> = ({ language, onComplete, onCancel }) => {
  const t = translations[language].emergency;
  const [step, setStep] = useState<'SELECT' | 'QUESTIONNAIRE'>('SELECT');
  const [selectedMode, setSelectedMode] = useState<'HELP' | 'SOLUTION' | null>(null);
  
  // Questionnaire State
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});

  const handleSelectMode = (mode: 'HELP' | 'SOLUTION') => {
    setSelectedMode(mode);
    setStep('QUESTIONNAIRE');
  };

  const questions = [
    { key: 'drivable', icon: Truck, label: t.questions.drivable, type: 'yesno' },
    { key: 'injured', icon: UserCheck, label: t.questions.injured, type: 'yesno' },
    { key: 'fire', icon: Flame, label: t.questions.fire, type: 'yesno' },
    { key: 'people', icon: UserCheck, label: t.questions.people, type: 'number' },
    { key: 'location', icon: MapPin, label: t.questions.location, type: 'location' },
  ];

  const handleAnswer = (answer: any) => {
    const currentQ = questions[qIndex];
    const newAnswers = { ...answers, [currentQ.key]: answer };
    setAnswers(newAnswers);

    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      // Finish
      if (selectedMode) {
        onComplete(selectedMode, newAnswers);
      }
    }
  };

  if (step === 'SELECT') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4 animate-pulse">
            <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => handleSelectMode('HELP')}
            className="group relative overflow-hidden bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-transparent hover:border-blue-500 shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.btnHelp}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{t.btnHelpDesc}</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleSelectMode('SOLUTION')}
            className="group relative overflow-hidden bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-transparent hover:border-amber-500 shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Truck className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.btnSolution}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{t.btnSolutionDesc}</p>
              </div>
            </div>
          </button>
        </div>
        
        <button onClick={onCancel} className="mt-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 text-sm font-medium w-full text-center">
            {t.cancel}
        </button>
      </div>
    );
  }

  const currentQ = questions[qIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-slate-700 h-2">
          <div 
            className="bg-brand-500 h-2 transition-all duration-500"
            style={{ width: `${((qIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-brand-100 dark:bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <currentQ.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{currentQ.label}</h2>

          <div className="space-y-4">
            {currentQ.type === 'yesno' && (
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => handleAnswer('YES')}
                  className="flex-1 py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-transform hover:scale-105"
                >
                  Sim
                </button>
                <button 
                  onClick={() => handleAnswer('NO')}
                  className="flex-1 py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-transform hover:scale-105"
                >
                  Não
                </button>
              </div>
            )}
            
            {currentQ.type === 'number' && (
               <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map(num => (
                     <button
                        key={num}
                        onClick={() => handleAnswer(num)}
                        className="py-4 bg-gray-100 dark:bg-slate-700 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-gray-900 dark:text-white rounded-xl font-bold text-lg transition-colors"
                     >
                        {num}
                     </button>
                  ))}
               </div>
            )}

            {currentQ.type === 'location' && (
               <button 
                  onClick={() => handleAnswer('GPS_COORDS')}
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2"
               >
                  <MapPin className="w-5 h-5" />
                  Usar Minha Localização
               </button>
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-slate-900/50 p-4 flex justify-between items-center text-sm text-gray-500">
           <span>Questão {qIndex + 1} de {questions.length}</span>
           <button onClick={onCancel} className="hover:text-red-500">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFlow;
