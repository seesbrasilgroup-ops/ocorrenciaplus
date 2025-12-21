import React, { useState, useRef, useEffect } from 'react';
import { ViewState, Language } from '../types';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  language: Language;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, language, theme, toggleTheme }) => {
  const t = translations[language].nav;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
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
    if (!isMobileMenuOpen) setIsMobileServicesOpen(false); // Reset sub-menu when opening
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-brand-900/90 backdrop-blur-md border-b border-gray-200 dark:border-brand-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(ViewState.HOME)}>
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              OC<span className="text-brand-600 dark:text-brand-500">+</span>
            </span>
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
              <button
                onClick={() => setView(ViewState.ADMIN)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  currentView === ViewState.ADMIN 
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 dark:bg-brand-600' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-700 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {t.admin}
              </button>
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 focus:outline-none"
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
            
            {/* Mobile Services Accordion */}
            <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-slate-800/50 mb-4">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="flex items-center">
                  {t.services}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-3 space-y-2">
                  <button
                    onClick={() => handleNavClick(ViewState.LANDING_DRIVERS)}
                    className="w-full flex items-center p-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{t.drivers}</span>
                  </button>
                  <button
                    onClick={() => handleNavClick(ViewState.LANDING_SHOPS)}
                    className="w-full flex items-center p-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{t.shops}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Standard Links */}
            <button
              onClick={() => handleNavClick(ViewState.ABOUT)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center ${
                currentView === ViewState.ABOUT
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.about}
            </button>

            <button
              onClick={() => handleNavClick(ViewState.PRICING)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                currentView === ViewState.PRICING
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.plans}
            </button>

            <button
              onClick={() => handleNavClick(ViewState.ADMIN)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center ${
                currentView === ViewState.ADMIN
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.admin}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;