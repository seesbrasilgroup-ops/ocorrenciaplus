import React, { useState } from 'react';
import { User, UserRole, Language } from '../types';
import { translations } from '../translations';
import { X, Car, Wrench, ShieldCheck, Mail, Lock } from 'lucide-react';

interface AuthModalProps {
  language: Language;
  onLogin: (user: User) => void;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ language, onLogin, onClose }) => {
  const [activeTab, setActiveTab] = useState<'DRIVER' | 'SHOP' | 'ADMIN'>('DRIVER');
  const t = translations[language].auth;

  // Mock Login logic
  const handleLogin = (roleVariant: 'BASIC' | 'PREMIUM' | 'SHOP' | 'ADMIN') => {
    let mockUser: User;
    
    if (roleVariant === 'BASIC') {
      mockUser = {
        id: 'u1',
        name: 'João Silva',
        email: 'joao@email.com',
        role: 'DRIVER_BASIC',
        avatar: 'https://i.pravatar.cc/150?u=joao'
      };
    } else if (roleVariant === 'PREMIUM') {
      mockUser = {
        id: 'u2',
        name: 'Maria Costa',
        email: 'maria@email.com',
        role: 'DRIVER_PREMIUM',
        avatar: 'https://i.pravatar.cc/150?u=maria'
      };
    } else if (roleVariant === 'SHOP') {
      mockUser = {
        id: 's1',
        name: 'Carlos Tech',
        email: 'oficina@tech.com',
        role: 'SHOP',
        shopName: 'AutoTech Center',
        verified: true,
        avatar: 'https://i.pravatar.cc/150?u=tech'
      };
    } else {
      mockUser = {
        id: 'a1',
        name: 'Super Admin',
        email: 'admin@ocplus.com',
        role: 'SUPER_ADMIN',
        avatar: 'https://i.pravatar.cc/150?u=admin'
      };
    }

    onLogin(mockUser);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 pb-4 text-center">
          <div className="w-16 h-16 bg-brand-100 dark:bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
             <span className="text-2xl font-black">OC+</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.title}</h2>
          <p className="text-slate-500 dark:text-slate-400">{t.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex px-8 border-b border-slate-100 dark:border-slate-800">
          <button 
            onClick={() => setActiveTab('DRIVER')}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'DRIVER' 
                ? 'border-brand-500 text-brand-600 dark:text-brand-400' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Car className="w-5 h-5" />
              {t.tabDriver}
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('SHOP')}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'SHOP' 
                ? 'border-amber-500 text-amber-600 dark:text-amber-400' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Wrench className="w-5 h-5" />
              {t.tabShop}
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('ADMIN')}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'ADMIN' 
                ? 'border-purple-500 text-purple-600 dark:text-purple-400' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-5 h-5" />
              {t.tabAdmin}
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-6 space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="email" 
                placeholder={t.emailPlaceholder}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="password" 
                placeholder={t.passwordPlaceholder}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white transition-all"
              />
            </div>
          </div>

          {/* Role Specific Actions for Demo */}
          <div className="pt-2 flex flex-col gap-3">
            {activeTab === 'DRIVER' && (
              <>
                 <button 
                  onClick={() => handleLogin('BASIC')}
                  className="w-full py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-xl transition-all"
                >
                  {t.basicLabel}
                </button>
                <button 
                  onClick={() => handleLogin('PREMIUM')}
                  className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all"
                >
                  {t.premiumLabel}
                </button>
              </>
            )}
            
            {activeTab === 'SHOP' && (
              <button 
                onClick={() => handleLogin('SHOP')}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/30 transition-all"
              >
                {t.button}
              </button>
            )}

            {activeTab === 'ADMIN' && (
              <button 
                onClick={() => handleLogin('ADMIN')}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all"
              >
                {t.button}
              </button>
            )}
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;