import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import AnalysisResultView from './components/AnalysisResultView';
import PricingSection from './components/PricingSection';
import AdminDashboard from './components/AdminDashboard';
import AnimatedCar from './components/AnimatedCar'; 
import DriversLanding from './components/DriversLanding';
import ShopsLanding from './components/ShopsLanding';
import AboutPage from './components/AboutPage';
import { ViewState, AnalysisResult, Language } from './types';
import { analyzeImage, fileToGenerativePart } from './services/geminiService';
import { saveAnalysisToHistory } from './services/storageService';
import { translations } from './translations';
import { Camera, ScanLine, FileText, ArrowRight } from 'lucide-react';

const initialResult = null;

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('pt-BR');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(initialResult);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isPremium, setIsPremium] = useState(false);
  
  // State to control mobile intro animation
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Only runs once on mount. 
    // Wait 3.5s for the car animation to play "one frame/loop" on mobile then show content.
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleFileSelect = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    setIsPremium(false); 
    
    try {
      const objectUrl = URL.createObjectURL(file);
      setImageSrc(objectUrl);
      const base64Data = await fileToGenerativePart(file);
      const result = await analyzeImage(base64Data, language);
      saveAnalysisToHistory(result);
      setAnalysisResult(result);
      setView(ViewState.ANALYSIS);
    } catch (err: any) {
      console.error(err);
      setError(translations[language].upload.error);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  const handleReset = () => {
    setAnalysisResult(null);
    setImageSrc(null);
    setView(ViewState.HOME);
    setError(null);
    setIsPremium(false);
  };
  
  const handleUnlock = () => {
    const confirm = window.confirm("Simular pagamento aprovado?");
    if(confirm) {
      setIsPremium(true);
    }
  };

  const t = translations[language];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300 overflow-x-hidden">
        <Navbar 
          currentView={view} 
          setView={setView} 
          language={language}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="pt-20 pb-12">
          {error && (
            <div className="max-w-3xl mx-auto px-4 mb-6">
              <div className="bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/50 text-red-700 dark:text-red-200 p-4 rounded-lg flex items-center">
                <span className="mr-2">⚠️</span> {error}
              </div>
            </div>
          )}

          {view === ViewState.HOME && (
            <>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-20 pb-12 sm:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[60vh] lg:min-h-auto">
                  
                  {/* LEFT COLUMN: Info & Upload */}
                  {/* LOGIC: On mobile, hidden initially until introFinished. On Desktop, always flex. */}
                  <div className={`
                    flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1
                    ${!introFinished ? 'hidden lg:flex' : 'flex animate-in fade-in duration-1000'}
                  `}>
                    
                    <div className="mb-10 w-full">
                      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                        {t.hero.title} <span className="text-brand-500">Plus</span>
                      </h1>
                    </div>

                    <div className="relative w-full max-w-xl z-10 mb-10">
                      {/* Glow effects positioned relative to the upload box */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-400/20 dark:bg-brand-500/10 rounded-full blur-[80px] pointer-events-none opacity-60 animate-pulse-slow"></div>
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-300 dark:bg-brand-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-blob"></div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 dark:bg-purple-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                      
                      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl dark:shadow-none transition-colors duration-300 border border-white/50 dark:border-slate-800">
                        <FileUpload 
                          onFileSelect={handleFileSelect} 
                          isLoading={isLoading} 
                          language={language}
                        />
                      </div>
                    </div>
                      
                    <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full opacity-90">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                          <Camera className="w-4 h-4 text-brand-500" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.hero.steps.step1}</span>
                      </div>

                      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 hidden sm:block" />

                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                          <ScanLine className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.hero.steps.step2}</span>
                      </div>

                      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 hidden sm:block" />

                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                          <FileText className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.hero.steps.step3}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Animated Car */}
                  {/* LOGIC: On mobile, Visible initially. Hidden after introFinished. On Desktop, always flex. */}
                  <div className={`
                    order-1 lg:order-2 justify-center items-center h-full min-h-[300px] lg:min-h-[500px]
                    ${!introFinished ? 'flex' : 'hidden lg:flex'}
                  `}>
                    <AnimatedCar />
                  </div>

                </div>
              </div>
            </>
          )}

          {view === ViewState.ABOUT && (
             <AboutPage language={language} />
          )}

          {view === ViewState.LANDING_DRIVERS && (
            <DriversLanding 
              language={language} 
              onStart={() => setView(ViewState.HOME)} 
            />
          )}

          {view === ViewState.LANDING_SHOPS && (
            <ShopsLanding 
              language={language} 
              onRegister={() => setView(ViewState.ADMIN)} 
            />
          )}

          {view === ViewState.ANALYSIS && analysisResult && (
            <AnalysisResultView 
              result={analysisResult} 
              imageSrc={imageSrc} 
              onReset={handleReset} 
              language={language}
              isPremium={isPremium}
              onUnlock={handleUnlock}
            />
          )}
          
          {view === ViewState.PRICING && <PricingSection language={language} />}
          
          {view === ViewState.ADMIN && (
            <AdminDashboard 
              language={language} 
              recentAnalysis={analysisResult}
              onSelectAnalysis={(result) => {
                setAnalysisResult(result);
                setImageSrc(null);
                setView(ViewState.ANALYSIS);
              }}
            />
          )}

        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 py-8 text-center text-slate-500 dark:text-slate-500 text-sm transition-colors duration-300">
          <p>© {new Date().getFullYear()} OC+. {t.footer.rights}</p>
          <p className="mt-2">{t.footer.madeFor}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;