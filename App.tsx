
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import AnalysisResultView from './components/AnalysisResultView';
import PricingSection from './components/PricingSection';
import ShopDashboard from './components/ShopDashboard';
import MechanicDashboard from './components/MechanicDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';
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
import VideoSection from './components/VideoSection';
import SolutionsSection from './components/SolutionsSection';
import JourneySection from './components/JourneySection';
import { FeaturesSection, HowItWorksSection } from './components/LandingSections';
import { ViewState, AnalysisResult, Language, User } from './types';
import { analyzeImage, fileToGenerativePart } from './services/geminiService';
import { saveAnalysisToHistory } from './services/storageService';
import { translations } from './translations';
import { Zap, Car, Wrench, Target, Clock, ShieldCheck, CreditCard } from 'lucide-react';

const initialResult = null;

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('pt-BR');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(initialResult);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [hasAccessedSystem, setHasAccessedSystem] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState<'HELP' | 'SOLUTION' | null>(null);
  const [isPremium, setIsPremium] = useState(false);

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
    setHasAccessedSystem(true); 
    setIsAuthModalOpen(false);

    if (user.role === 'SHOP') {
      setView(ViewState.SHOP_DASHBOARD);
    } else if (user.role === 'MECHANIC') {
      setView(ViewState.MECHANIC_DASHBOARD);
    } else if (user.role === 'SUPER_ADMIN') {
      setView(ViewState.SUPER_ADMIN_DASHBOARD);
    } else {
      setView(ViewState.HOME);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsPremium(false);
    setView(ViewState.HOME);
  };

  const handleEmergencyRequest = (mode: 'HELP' | 'SOLUTION') => {
     setEmergencyMode(mode); 
     setView(ViewState.EMERGENCY_FLOW);
  };

  const handleEmergencyComplete = (mode: 'HELP' | 'SOLUTION', data: any) => {
     setEmergencyMode(mode);
     setView(ViewState.LIVE_TRACKING);
  };

  const t = translations[language];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 font-sans selection:bg-slate-200 dark:selection:bg-slate-800 flex flex-col">
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

        <main className={`pt-20 flex-grow ${view === ViewState.HOME ? 'pb-0' : 'pb-24'}`}>
          {error && (
            <div className="max-w-lg mx-auto px-6 mb-8 animate-in fade-in slide-in-from-top-4 pt-4">
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-300 p-4 rounded-lg flex items-center text-sm">
                <span className="mr-2 font-bold">Error</span> {error}
              </div>
            </div>
          )}

          {view === ViewState.HOME && (
            <>
              {/* NEW HERO SECTION - 2 COLUMNS WITH MAP BACKGROUND */}
              <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 min-h-[85vh] flex items-center">
                
                {/* FICTIONAL MAP BACKGROUND */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-46.6333,-23.5505,12.5,0,0/1600x900?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJja2VuaGZ5cm8wMDB4MnJ0Z3Z4b214aXBiIn0.7b1-M3Z-1')] bg-cover bg-center opacity-30 dark:opacity-10 grayscale mix-blend-multiply dark:mix-blend-normal"></div>
                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-slate-950/90 dark:via-slate-950/70 dark:to-slate-950"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/50 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-0 w-full relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* LEFT COLUMN: TEXT CONTENT */}
                    <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center animate-in fade-in slide-in-from-left-8 duration-700">
                       
                       {/* Tag */}
                       <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-8 border border-blue-100 dark:border-blue-800 backdrop-blur-sm">
                          <Zap className="w-3 h-3 fill-current" />
                          {t.hero.tag}
                       </div>

                       {/* Headline */}
                       <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-6 drop-shadow-sm">
                          {t.hero.titlePrefix} <span className="text-blue-600 dark:text-blue-400">{t.hero.titleHighlight}</span>
                       </h1>

                       {/* Description */}
                       <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                          {t.hero.description}
                       </p>

                       {/* Buttons - Full Width */}
                       <div className="flex flex-col gap-4 w-full">
                          <button 
                             onClick={() => setView(ViewState.LANDING_DRIVERS)}
                             className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                          >
                             <Car className="w-5 h-5" />
                             {t.hero.btnDriver}
                          </button>
                          <button 
                             onClick={() => setView(ViewState.LANDING_SHOPS)}
                             className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                          >
                             <Wrench className="w-5 h-5" />
                             {t.hero.btnShop}
                          </button>
                       </div>

                    </div>

                    {/* RIGHT COLUMN: SCANNER CARD */}
                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
                       {/* Gradient Shadow/Glow Effect - Blue to Orange */}
                       <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-[2.5rem] blur-xl opacity-60 dark:opacity-40"></div>

                       {/* The Card */}
                       <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-8">
                          
                          {/* Card Header */}
                          <div className="flex items-center justify-between mb-8">
                             <div className="flex items-center gap-3">
                                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-full">
                                  <Target className="w-5 h-5 text-red-500" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.hero.scannerTitle}</h3>
                             </div>
                             <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold text-green-600 dark:text-green-400">{t.hero.scannerOnline}</span>
                             </div>
                          </div>

                          {/* Card Body (Upload Area) */}
                          <div className="h-64 mb-8">
                             <FileUpload 
                                onFileSelect={handleFileSelect} 
                                isLoading={isLoading} 
                                language={language}
                             />
                          </div>

                          {/* Card Footer */}
                          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                             <div className="text-center">
                                <div className="flex justify-center mb-2 text-slate-400">
                                   <Clock className="w-5 h-5" />
                                </div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.hero.scannerFooter1}</span>
                             </div>
                             <div className="text-center border-l border-slate-100 dark:border-slate-800">
                                <div className="flex justify-center mb-2 text-slate-400">
                                   <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.hero.scannerFooter2}</span>
                             </div>
                             <div className="text-center border-l border-slate-100 dark:border-slate-800">
                                <div className="flex justify-center mb-2 text-slate-400">
                                   <CreditCard className="w-5 h-5" />
                                </div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.hero.scannerFooter3}</span>
                             </div>
                          </div>

                       </div>
                    </div>

                  </div>
                </div>
              </div>
              
              {/* Only show minimalist sections if NOT logged in/accessed */}
              {!currentUser && !hasAccessedSystem && (
                <>
                  <VideoSection language={language} />
                  <SolutionsSection language={language} setView={setView} />
                  <JourneySection 
                    language={language} 
                    onOpenAuth={() => setIsAuthModalOpen(true)}
                  />
                </>
              )}
            </>
          )}

          {/* OTHER VIEWS */}
          {view === ViewState.ABOUT && <AboutPage language={language} />}
          {view === ViewState.LANDING_DRIVERS && <DriversLanding language={language} onStart={() => setView(ViewState.HOME)} />}
          {view === ViewState.LANDING_SHOPS && <ShopsLanding language={language} onRegister={() => setIsAuthModalOpen(true)} />}
          {view === ViewState.LANDING_MECHANICS && <MechanicsLanding language={language} onRegister={() => setIsAuthModalOpen(true)} />}
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
          {view === ViewState.EMERGENCY_FLOW && <EmergencyFlow language={language} onComplete={handleEmergencyComplete} onCancel={() => setView(ViewState.ANALYSIS)} />}
          {view === ViewState.LIVE_TRACKING && emergencyMode && <LiveTrackingMap language={language} mode={emergencyMode} onReset={() => setView(ViewState.ANALYSIS)} />}
          {view === ViewState.PRICING && <PricingSection language={language} />}
          {view === ViewState.SHOP_DASHBOARD && <ShopDashboard language={language} recentAnalysis={analysisResult} currentUser={currentUser} onSelectAnalysis={(result) => { setAnalysisResult(result); setImageSrc(null); setView(ViewState.ANALYSIS); }} onNewEstimate={() => setView(ViewState.HOME)} />}
          {view === ViewState.MECHANIC_DASHBOARD && <MechanicDashboard language={language} currentUser={currentUser} onSelectAnalysis={(result) => { setAnalysisResult(result); setImageSrc(null); setView(ViewState.ANALYSIS); }} />}
          {view === ViewState.SUPER_ADMIN_DASHBOARD && <SuperAdminDashboard language={language} />}

        </main>

        <footer className="bg-blue-600 py-16 text-white border-t border-blue-500">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Col 1: Brand & Desc */}
            <div className="space-y-6">
               <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-2 shadow-lg">
                      <span className="text-white font-bold text-sm tracking-tighter">OC</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                      OC<span className="text-blue-200">+</span>
                  </h3>
               </div>
               <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                  {t.footer.desc}
               </p>
            </div>

            {/* Col 2: Solutions */}
            <div>
               <h4 className="font-bold text-white mb-6">{t.footer.col1}</h4>
               <ul className="space-y-4 text-sm text-blue-100">
                  <li><button onClick={() => setView(ViewState.LANDING_DRIVERS)} className="hover:text-white transition-colors">{t.footer.link1}</button></li>
                  <li><button onClick={() => setView(ViewState.LANDING_SHOPS)} className="hover:text-white transition-colors">{t.footer.link2}</button></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">{t.footer.link3}</span></li>
               </ul>
            </div>

            {/* Col 3: Company */}
            <div>
               <h4 className="font-bold text-white mb-6">{t.footer.col2}</h4>
               <ul className="space-y-4 text-sm text-blue-100">
                  <li><button onClick={() => setView(ViewState.ABOUT)} className="hover:text-white transition-colors">{t.footer.link4}</button></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">{t.footer.link5}</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">{t.footer.link6}</span></li>
               </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/20 text-center">
             <p className="text-blue-100 text-xs">{t.footer.copyright}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
