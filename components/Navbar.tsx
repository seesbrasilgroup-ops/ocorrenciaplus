
import React, { useState, useRef, useEffect } from 'react';
import { ViewState, Language, User } from '../types';
import { Sun, Moon, ChevronDown, Menu, X, User as UserIcon, LogOut, Bell, Check, Zap } from 'lucide-react';
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getDashboardView = () => {
    if (!currentUser) return ViewState.HOME;
    if (currentUser.role === 'SHOP') return ViewState.SHOP_DASHBOARD;
    if (currentUser.role === 'MECHANIC') return ViewState.MECHANIC_DASHBOARD;
    if (currentUser.role === 'SUPER_ADMIN') return ViewState.SUPER_ADMIN_DASHBOARD;
    return ViewState.HOME;
  };

  const getNotifications = () => {
    if (!currentUser) return [];
    // Mock Notifications
    return [
      { id: 1, title: 'Bem-vindo', desc: 'Configure seu perfil.', time: 'Agora', unread: true },
    ];
  };

  const notifications = getNotifications();
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 border-b border-gray-100 dark:border-slate-800 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* MINIMALIST LOGO */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(ViewState.HOME)}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 transition-transform group-hover:scale-95 shadow-lg shadow-blue-600/20">
                <span className="text-white font-bold text-lg tracking-tighter">OC</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              OC<span className="text-blue-600 font-bold">+</span>
            </span>
            
            {/* Badges for logged users only */}
            {currentUser?.role === 'SHOP' && <span className="ml-3 text-[10px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-500 px-2 py-1 rounded-md tracking-wide">PARTNER</span>}
            {currentUser?.role === 'MECHANIC' && <span className="ml-3 text-[10px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-500 px-2 py-1 rounded-md tracking-wide">EXPERT</span>}
            {currentUser?.role === 'SUPER_ADMIN' && <span className="ml-3 text-[10px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-500 px-2 py-1 rounded-md tracking-wide">ADMIN</span>}
          </div>
          
          <div className="flex items-center gap-8">
            
            {/* Minimal Desktop Menu */}
            {!currentUser && (
              <div className="hidden lg:flex items-center space-x-8">
                <button onClick={() => handleNavClick(ViewState.LANDING_DRIVERS)} className={`text-sm font-medium transition-colors ${currentView === ViewState.LANDING_DRIVERS ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>{t.drivers}</button>
                <button onClick={() => handleNavClick(ViewState.LANDING_SHOPS)} className={`text-sm font-medium transition-colors ${currentView === ViewState.LANDING_SHOPS ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>{t.shops}</button>
                <button onClick={() => handleNavClick(ViewState.LANDING_MECHANICS)} className={`text-sm font-medium transition-colors ${currentView === ViewState.LANDING_MECHANICS ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>{t.mechanics}</button>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-4">
              
              {currentUser && (
                <div className="relative" ref={notificationRef}>
                   <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Bell className="w-5 h-5" />
                      {unreadCount > 0 && <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>}
                   </button>
                   {isNotificationsOpen && (
                      <div className="absolute top-full right-0 mt-4 w-72 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden z-50 py-2">
                         {notifications.map((n) => (
                            <div key={n.id} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                               <p className="text-sm font-medium text-slate-900 dark:text-white">{n.title}</p>
                               <p className="text-xs text-slate-500">{n.desc}</p>
                            </div>
                         ))}
                      </div>
                   )}
                </div>
              )}

              <button onClick={toggleTheme} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              {currentUser ? (
                <div className="relative" ref={userMenuRef}>
                  <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center gap-2 pl-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-xs">
                        {currentUser.name.charAt(0)}
                    </div>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden z-50 py-1">
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-800">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{currentUser.name}</p>
                        <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                      </div>
                      {(currentUser.role === 'SHOP' || currentUser.role === 'MECHANIC' || currentUser.role === 'SUPER_ADMIN') && (
                        <button onClick={() => { handleNavClick(getDashboardView()); setIsUserMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center">
                          <Menu className="w-4 h-4 mr-2" /> {t.admin}
                        </button>
                      )}
                      <button onClick={() => { onLogout(); setIsUserMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 flex items-center">
                        <LogOut className="w-4 h-4 mr-2" /> {t.logout}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={onOpenAuth} className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-all shadow-md shadow-blue-600/20">
                  {t.login}
                </button>
              )}

              {!currentUser && (
                <button onClick={toggleMobileMenu} className="lg:hidden text-slate-900 dark:text-white">
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && !currentUser && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800">
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => handleNavClick(ViewState.LANDING_DRIVERS)} className="block w-full text-left text-lg font-medium text-slate-900 dark:text-white">{t.drivers}</button>
            <button onClick={() => handleNavClick(ViewState.LANDING_SHOPS)} className="block w-full text-left text-lg font-medium text-slate-900 dark:text-white">{t.shops}</button>
            <button onClick={() => handleNavClick(ViewState.LANDING_MECHANICS)} className="block w-full text-left text-lg font-medium text-slate-900 dark:text-white">{t.mechanics}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
