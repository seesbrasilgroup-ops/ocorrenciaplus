import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import AnalysisResultView from './components/AnalysisResultView';
import PricingSection from './components/PricingSection';
import ShopDashboard from './components/ShopDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import AnimatedCar from './components/AnimatedCar'; 
import DriversLanding from './components/DriversLanding';
import ShopsLanding from './components/ShopsLanding';
import AboutPage from './components/AboutPage';
import VideoSection from './components/VideoSection';
import AuthModal from './components/AuthModal';
import EmergencyFlow from './components/EmergencyFlow';
import LiveTrackingMap from './components/LiveTrackingMap';
import { ViewState, AnalysisResult, Language, User } from './types';
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
  
  // User State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Emergency State
  const [emergencyMode, setEmergencyMode] = useState<'HELP' | 'SOLUTION' | null>(null);
  
  // Check premium status based on user role or simulated payment
  const [isPremium, setIsPremium] = useState(false);
  
  // State to control mobile intro animation
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Sync premium state with user role
  useEffect(() => {
    if (currentUser?.role === 'DRIVER_PREMIUM') {
      setIsPremium(true);
    } else if (currentUser?.role === 'DRIVER_BASIC') {
      setIsPremium(false);
    }
  }, [currentUser]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleFileSelect = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    // Don't reset premium if user is logged in as premium
    if (currentUser?.role !== 'DRIVER_PREMIUM') {
      setIsPremium(false); 
    }
    
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
  }, [language, currentUser]);

  const handleReset = () => {
    setAnalysisResult(null);
    setImageSrc(null);
    setView(ViewState.HOME);
    setError(null);
    // Maintain premium if logged in
    if (currentUser?.role !== 'DRIVER_PREMIUM') {
       setIsPremium(false);
    }
  };
  
  const handleUnlock = () => {
    const confirm = window.confirm("Simular pagamento aprovado?");
    if(confirm) {
      setIsPremium(true);
    }
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);

    // Redirect logic
    if (user.role === 'SHOP') {
      setView(ViewState.SHOP_DASHBOARD);
    } else if (user.role === 'SUPER_ADMIN') {
      setView(ViewState.SUPER_ADMIN_DASHBOARD);
    } else {
      // Drivers go to Home to scan
      setView(ViewState.HOME);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsPremium(false);
    setView(ViewState.HOME);
  };

  const handleEmergencyRequest = (mode: 'HELP' | 'SOLUTION') => {
     setEmergencyMode(mode); // Pre-set mode if directly clicked, or handle in component
     setView(ViewState.EMERGENCY_FLOW);
  };

  const handleEmergencyComplete = (mode: 'HELP' | 'SOLUTION', data: any) => {
     console.log('Emergency Data:', data);
     setEmergencyMode(mode);
     setView(ViewState.LIVE_TRACKING);
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
          currentUser={currentUser}
          onOpenAuth={() => setIsAuthModalOpen(true)}
          onLogout={handleLogout}
        />

        {isAuthModalOpen && (
          <AuthModal 
            language={language} 
            onLogin={handleLogin} 
            onClose={() => setIsAuthModalOpen(false)} 
          />
        )}

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
                
                {/* Logged in Welcome Message (Emotional Support) */}
                {currentUser && (currentUser.role === 'DRIVER_BASIC' || currentUser.role === 'DRIVER_PREMIUM') && (
                  <div className="mb-8 animate-in slide-in-from-top-4 duration-500">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        {t.hero.welcomeUser.replace('{name}', currentUser.name.split(' ')[0])}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        {t.hero.descriptionUser}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[60vh] lg:min-h-auto">
                  
                  {/* LEFT COLUMN: Info & Upload */}
                  <div className={`
                    flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1
                    ${!introFinished ? 'hidden lg:flex' : 'flex animate-in fade-in duration-1000'}
                  `}>
                    
                    {!currentUser && (
                      <div className="mb-10 w-full">
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                          {t.hero.title} <span className="text-brand-500">Plus</span>
                        </h1>
                      </div>
                    )}

                    <div className="relative w-full max-w-xl z-10 mb-10">
                      {/* Glow effects */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-400/20 dark:bg-brand-500/10 rounded-full blur-[80px] pointer-events-none opacity-60 animate-pulse-slow"></div>
                      
                      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl dark:shadow-none transition-colors duration-300 border border-white/50 dark:border-slate-800">
                        <FileUpload 
                          onFileSelect={handleFileSelect} 
                          isLoading={isLoading} 
                          language={language}
                        />
                      </div>
                    </div>
                    
                    {/* Steps Section - Moved Up */}
                    <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full opacity-90 mb-8">
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

                    {/* Upsell for Basic Users - Moved Down */}
                    {currentUser?.role === 'DRIVER_BASIC' && (
                      <div className="w-full mb-8 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl flex items-center justify-between gap-4">
                         <div className="text-left">
                           <p className="text-sm font-bold text-amber-800 dark:text-amber-400">Desbloqueie todos os recursos</p>
                           <p className="text-xs text-amber-700 dark:text-amber-500">Seja Premium e tenha assessoria jurídica completa.</p>
                         </div>
                         <button onClick={() => setView(ViewState.PRICING)} className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-lg transition-colors">
                            Ver Planos
                         </button>
                      </div>
                    )}
                      
                  </div>

                  {/* RIGHT COLUMN: Animated Car */}
                  <div className={`
                    order-1 lg:order-2 justify-center items-center h-full min-h-[300px] lg:min-h-[500px]
                    ${!introFinished ? 'flex' : 'hidden lg:flex'}
                  `}>
                    <AnimatedCar />
                  </div>

                </div>
              </div>
              
              {!currentUser && (
                <div className="bg-slate-50 dark:bg-slate-900/50">
                  <VideoSection language={language} />
                </div>
              )}
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
              onRegister={() => setIsAuthModalOpen(true)} 
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
              onRequestHelp={handleEmergencyRequest}
            />
          )}
          
          {view === ViewState.EMERGENCY_FLOW && (
             <EmergencyFlow 
               language={language} 
               onComplete={handleEmergencyComplete} 
               onCancel={() => setView(ViewState.ANALYSIS)} 
             />
          )}

          {view === ViewState.LIVE_TRACKING && emergencyMode && (
             <LiveTrackingMap 
               language={language} 
               mode={emergencyMode} 
               onReset={() => setView(ViewState.ANALYSIS)} 
             />
          )}
          
          {view === ViewState.PRICING && <PricingSection language={language} />}
          
          {view === ViewState.SHOP_DASHBOARD && (
            <ShopDashboard 
              language={language} 
              recentAnalysis={analysisResult}
              currentUser={currentUser}
              onSelectAnalysis={(result) => {
                setAnalysisResult(result);
                setImageSrc(null);
                setView(ViewState.ANALYSIS);
              }}
              onNewEstimate={() => {
                setView(ViewState.HOME);
              }}
            />
          )}

          {view === ViewState.SUPER_ADMIN_DASHBOARD && (
            <SuperAdminDashboard language={language} />
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