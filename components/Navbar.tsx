import React, { useState, useRef, useEffect } from 'react';
import { ViewState, Language, User } from '../types';
import { Sun, Moon, ChevronDown, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  language: Language;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, language, theme, toggleTheme, currentUser, onOpenAuth, onLogout }) => {
  const t = translations[language].nav;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getDashboardView = () => {
    if (!currentUser) return ViewState.HOME;
    if (currentUser.role === 'SHOP') return ViewState.SHOP_DASHBOARD;
    if (currentUser.role === 'SUPER_ADMIN') return ViewState.SUPER_ADMIN_DASHBOARD;
    return ViewState.HOME; // Basic/Premium users go to Home with updated UI
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-brand-900/90 backdrop-blur-md border-b border-gray-200 dark:border-brand-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(ViewState.HOME)}>
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              OC<span className="text-brand-600 dark:text-brand-500">+</span>
            </span>
            {currentUser?.role === 'SHOP' && <span className="ml-2 text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded border border-amber-200">SHOP</span>}
            {currentUser?.role === 'SUPER_ADMIN' && <span className="ml-2 text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded border border-purple-200">ADMIN</span>}
          </div>
          
          <div className="flex items-center gap-4">
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              
              {/* Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    currentView === ViewState.LANDING_DRIVERS || currentView === ViewState.LANDING_SHOPS
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-brand-700 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  {t.services}
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => handleNavClick(ViewState.LANDING_DRIVERS)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors border-b border-gray-100 dark:border-slate-700/50"
                    >
                      <div>
                        <span className="block text-sm font-bold text-gray-900 dark:text-white">{t.drivers}</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">B2C Solution</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick(ViewState.LANDING_SHOPS)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div>
                        <span className="block text-sm font-bold text-gray-900 dark:text-white">{t.shops}</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">B2B Solution</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setView(ViewState.ABOUT)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  currentView === ViewState.ABOUT 
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-700 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {t.about}
              </button>

              <button
                onClick={() => setView(ViewState.PRICING)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  currentView === ViewState.PRICING 
                    ? 'bg-blue-600 text-white shadow-md shadow-brand-500/20 dark:bg-brand-600' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-700 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {t.plans}
              </button>
            </div>

            {/* Auth & Theme & Mobile */}
            <div className="flex items-center gap-2 border-l border-gray-200 dark:border-slate-700 pl-4 ml-2">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 transition-all focus:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              {currentUser ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
                  >
                    <img 
                      src={currentUser.avatar || 'https://i.pravatar.cc/150'} 
                      alt="User" 
                      className="w-8 h-8 rounded-full bg-gray-200"
                    />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 hidden sm:block truncate max-w-[100px]">
                      {currentUser.name.split(' ')[0]}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-700">
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{currentUser.name}</p>
                        <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                      </div>
                      
                      {(currentUser.role === 'SHOP' || currentUser.role === 'SUPER_ADMIN') && (
                        <button
                          onClick={() => {
                            handleNavClick(getDashboardView());
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center"
                        >
                          <Menu className="w-4 h-4 mr-2" />
                          {t.admin}
                        </button>
                      )}

                      <button
                        onClick={() => {
                          onLogout();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        {t.logout}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-all shadow-lg shadow-slate-500/20"
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  {t.login}
                </button>
              )}

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 focus:outline-none ml-1"
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-brand-900 border-b border-gray-200 dark:border-brand-800 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-6 space-y-2">
            <button
              onClick={() => handleNavClick(ViewState.HOME)}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(ViewState.ABOUT)}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick(ViewState.PRICING)}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {t.plans}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;