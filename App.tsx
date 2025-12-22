import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import AnalysisResultView from './components/AnalysisResultView';
import PricingSection from './components/PricingSection';
import ShopDashboard from './components/ShopDashboard';
import MechanicDashboard from './components/MechanicDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import AnimatedCar from './components/AnimatedCar'; 
import DriversLanding from './components/DriversLanding';
import ShopsLanding from './components/ShopsLanding';
import MechanicsLanding from './components/MechanicsLanding';
import AboutPage from './components/AboutPage';
import DemoReportSection from './components/DemoReportSection';
import EmergencyServiceSection from './components/EmergencyServiceSection';
import FinancialAidSection from './components/FinancialAidSection';
import AuthModal from './components/AuthModal';
import EmergencyFlow from './components/EmergencyFlow';
import LiveTrackingMap from './components/LiveTrackingMap';
import { ViewState, AnalysisResult, Language, User } from './types';
import { analyzeImage, fileToGenerativePart } from './services/geminiService';
import { saveAnalysisToHistory } from './services/storageService';
import { translations } from './translations';
import { Camera, ScanLine, FileText, ArrowRight, Sparkles } from 'lucide-react';

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
  
  // UX State: Track if user has accessed system to hide intro animation
  const [hasAccessedSystem, setHasAccessedSystem] = useState(false);
  
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
    setHasAccessedSystem(true); // User has accessed, hide animation frame for future visits in this session
    setIsAuthModalOpen(false);

    // Redirect logic
    if (user.role === 'SHOP') {
      setView(ViewState.SHOP_DASHBOARD);
    } else if (user.role === 'MECHANIC') {
      setView(ViewState.MECHANIC_DASHBOARD);
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

        {/* Adjusted main padding only for non-home views or ensure home view handles it */}
        <main className={`pt-16 ${view === ViewState.HOME ? 'pb-0' : 'pb-12'}`}>
          {error && (
            <div className="max-w-3xl mx-auto px-4 mb-6 mt-4">
              <div className="bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/50 text-red-700 dark:text-red-200 p-4 rounded-lg flex items-center">
                <span className="mr-2">⚠️</span> {error}
              </div>
            </div>
          )}

          {view === ViewState.HOME && (
            <>
              {/* SPLIT SCREEN HERO LAYOUT */}
              <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-64px)] transition-all duration-500">
                
                {/* LEFT SIDE: Scan & Content */}
                <div className={`w-full ${!hasAccessedSystem ? 'lg:w-1/2' : 'lg:w-full max-w-5xl mx-auto'} flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 bg-slate-50 dark:bg-slate-900 z-10 order-2 lg:order-1 transition-all duration-500 ease-in-out`}>
                   <div className="max-w-xl mx-auto w-full">
                      
                      {/* Welcome Message */}
                      {currentUser && (currentUser.role === 'DRIVER_BASIC' || currentUser.role === 'DRIVER_PREMIUM') && (
                        <div className="mb-8 animate-in slide-in-from-top-4 duration-500">
                          <div className="bg-white dark:bg-slate-800 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                              {t.hero.welcomeUser.replace('{name}', currentUser.name.split(' ')[0])}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300">
                              {t.hero.descriptionUser}
                            </p>
                          </div>
                        </div>
                      )}

                      {!currentUser && (
                        <div className="mb-10 w-full text-center lg:text-left">
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                            {t.hero.title} <span className="text-brand-600 dark:text-brand-500">Mais</span>
                          </h1>
                          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {t.hero.description}
                          </p>
                        </div>
                      )}

                      {/* File Upload Component */}
                      <div className="relative w-full z-10 mb-10">
                        {/* Subtle glow for scan area */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[60px] pointer-events-none opacity-50"></div>
                        <FileUpload 
                          onFileSelect={handleFileSelect} 
                          isLoading={isLoading} 
                          language={language}
                        />
                      </div>

                      {/* Steps */}
                      <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full opacity-90 mb-8">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                            <Camera className="w-4 h-4 text-brand-500" />
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.hero.steps.step1}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 hidden sm:block" />
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                            <ScanLine className="w-4 h-4 text-purple-500" />
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.hero.steps.step2}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 hidden sm:block" />
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                            <FileText className="w-4 h-4 text-green-500" />
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.hero.steps.step3}</span>
                        </div>
                      </div>

                      {/* Upsell for Basic Users */}
                      {currentUser?.role === 'DRIVER_BASIC' && (
                        <div className="w-full p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl flex items-center justify-between gap-4">
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
                </div>

                {/* RIGHT SIDE: Blue Gradient & Animation - HIDDEN AFTER ACCESS */}
                {!hasAccessedSystem && (
                  <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-brand-600 via-blue-700 to-indigo-900 overflow-hidden flex items-center justify-center py-20 lg:py-0 order-1 lg:order-2 animate-in fade-in duration-700">
                     {/* Decorative Noise/Pattern */}
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                     
                     {/* Decorative Circles */}
                     <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                     <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                     {/* Floating Elements (Visual Polish) */}
                     <div className="absolute top-1/4 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hidden lg:block animate-blob">
                        <Sparkles className="w-6 h-6 text-yellow-300" />
                     </div>
                     
                     {/* Main Animation Container */}
                     <div className={`relative z-10 w-full max-w-lg transition-opacity duration-1000 ${!introFinished ? 'opacity-100' : 'opacity-100'}`}>
                        <AnimatedCar />
                        
                        <div className="text-center mt-8 px-4">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              OC+ System Online
                           </div>
                        </div>
                     </div>
                  </div>
                )}

              </div>
              
              {/* Only show landing sections if NOT logged in/accessed */}
              {!currentUser && !hasAccessedSystem && (
                <>
                  <DemoReportSection language={language} />
                  <EmergencyServiceSection language={language} />
                  <FinancialAidSection language={language} />
                </>
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

          {view === ViewState.LANDING_MECHANICS && (
            <MechanicsLanding 
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

          {view === ViewState.MECHANIC_DASHBOARD && (
             <MechanicDashboard 
               language={language}
               currentUser={currentUser}
               onSelectAnalysis={(result) => {
                setAnalysisResult(result);
                setImageSrc(null);
                setView(ViewState.ANALYSIS);
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