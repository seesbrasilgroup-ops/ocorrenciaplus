
import React, { useState } from 'react';
import { User, UserRole, Language } from '../types';
import { translations } from '../translations';
import { X, Car, Wrench, ShieldCheck, Mail, Lock, Settings, UserPlus, Phone, FileText, Building2, LogIn } from 'lucide-react';

interface AuthModalProps {
  language: Language;
  onLogin: (user: User) => void;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ language, onLogin, onClose }) => {
  const [activeTab, setActiveTab] = useState<'DRIVER' | 'SHOP' | 'MECHANIC' | 'ADMIN'>('DRIVER');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shopName, setShopName] = useState('');
  const [doc, setDoc] = useState(''); // CPF or CNPJ

  const t = translations[language].auth;

  const getPortalTitle = () => {
    switch(activeTab) {
      case 'DRIVER': return language === 'pt-BR' ? 'Portal do Motorista' : 'Driver Portal';
      case 'SHOP': return language === 'pt-BR' ? 'Portal da Oficina' : 'Shop Portal';
      case 'MECHANIC': return language === 'pt-BR' ? 'Portal do Mecânico' : 'Mechanic Portal';
      case 'ADMIN': return language === 'pt-BR' ? 'Acesso Administrativo' : 'Admin Access';
      default: return t.title;
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // LOGIN LOGIC - STRICT SEGREGATION
    if (isLogin) {
      if (password !== '12345678') {
        setError(t.error);
        return;
      }

      let mockUser: User | null = null;
      let accessDenied = false;

      // Enforce that only the correct email works for the specific ACTIVE TAB
      switch (activeTab) {
        case 'DRIVER':
          if (email === 'motorista@ocplus.com') {
            mockUser = {
              id: 'u2',
              name: 'Motorista Premium',
              email: 'motorista@ocplus.com',
              role: 'DRIVER_PREMIUM',
              avatar: 'https://i.pravatar.cc/150?u=driver'
            };
          } else {
             // If trying to use other emails in Driver tab, or random emails
             accessDenied = true;
          }
          break;

        case 'SHOP':
          if (email === 'oficina@ocplus.com') {
            mockUser = {
              id: 's1',
              name: 'Auto Center Plus',
              email: 'oficina@ocplus.com',
              role: 'SHOP',
              shopName: 'Auto Center Plus',
              verified: true,
              avatar: 'https://i.pravatar.cc/150?u=shop'
            };
          } else {
            accessDenied = true;
          }
          break;

        case 'MECHANIC':
          if (email === 'mecanico@ocplus.com') {
            mockUser = {
              id: 'm1',
              name: 'Roberto Mecânico',
              email: 'mecanico@ocplus.com',
              role: 'MECHANIC',
              shopName: 'Roberto Reparos',
              verified: true,
              avatar: 'https://i.pravatar.cc/150?u=mech'
            };
          } else {
            accessDenied = true;
          }
          break;

        case 'ADMIN':
          if (email === 'admin@ocplus.com') {
            mockUser = {
              id: 'a1',
              name: 'Super Admin',
              email: 'admin@ocplus.com',
              role: 'SUPER_ADMIN',
              avatar: 'https://i.pravatar.cc/150?u=admin'
            };
          } else {
            accessDenied = true;
          }
          break;
      }

      if (mockUser && !accessDenied) {
        onLogin(mockUser);
      } else {
        // Customized error message based on context
        if (['motorista@ocplus.com', 'oficina@ocplus.com', 'mecanico@ocplus.com', 'admin@ocplus.com'].includes(email)) {
           setError(language === 'pt-BR' 
             ? `Este e-mail não pertence ao perfil de ${activeTab === 'DRIVER' ? 'Motorista' : activeTab === 'SHOP' ? 'Oficina' : activeTab === 'MECHANIC' ? 'Mecânico' : 'Admin'}. Troque a aba acima.` 
             : 'Wrong portal for this email. Please switch tabs.');
        } else {
           setError(t.error);
        }
      }
    } 
    // REGISTRATION LOGIC (MOCK)
    else {
      // Simulate account creation based on active tab
      let newUser: User;

      if (activeTab === 'DRIVER') {
        newUser = {
          id: `new_${Date.now()}`,
          name: name || 'Novo Motorista',
          email: email,
          role: 'DRIVER_BASIC', // Default to basic on signup
          avatar: 'https://i.pravatar.cc/150?u=new_driver'
        };
      } else if (activeTab === 'SHOP') {
        newUser = {
          id: `new_${Date.now()}`,
          name: name || 'Nova Oficina',
          email: email,
          role: 'SHOP',
          shopName: shopName || name,
          verified: false,
          avatar: 'https://i.pravatar.cc/150?u=new_shop'
        };
      } else if (activeTab === 'MECHANIC') {
        newUser = {
          id: `new_${Date.now()}`,
          name: name || 'Novo Mecânico',
          email: email,
          role: 'MECHANIC',
          shopName: shopName || 'Freelancer',
          verified: false,
          avatar: 'https://i.pravatar.cc/150?u=new_mech'
        };
      } else {
         // Admin registration (usually restricted, but allowing for demo)
         newUser = {
            id: `new_${Date.now()}`,
            name: name || 'Novo Admin',
            email: email,
            role: 'SUPER_ADMIN',
            avatar: 'https://i.pravatar.cc/150?u=new_admin'
         }
      }

      onLogin(newUser);
    }
  };

  const toggleMode = () => {
     setIsLogin(!isLogin);
     setError(null);
     // Clear fields
     setName('');
     setPhone('');
     setShopName('');
     setDoc('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tabs - Always visible to select role for Login hints or Registration type */}
        <div className="flex px-4 pt-4 border-b border-slate-100 dark:border-slate-800 overflow-x-auto shrink-0 no-scrollbar bg-slate-50 dark:bg-slate-950/50">
          <button 
            onClick={() => { setActiveTab('DRIVER'); setError(null); }}
            type="button"
            className={`flex-1 min-w-[80px] pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'DRIVER' 
                ? 'border-blue-600 text-blue-600 dark:text-blue-400' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Car className="w-5 h-5" />
              {t.tabDriver}
            </div>
          </button>
          <button 
            onClick={() => { setActiveTab('SHOP'); setError(null); }}
            type="button"
            className={`flex-1 min-w-[80px] pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'SHOP' 
                ? 'border-amber-500 text-amber-600 dark:text-amber-400' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Building2 className="w-5 h-5" />
              {t.tabShop}
            </div>
          </button>
          <button 
            onClick={() => { setActiveTab('MECHANIC'); setError(null); }}
            type="button"
            className={`flex-1 min-w-[80px] pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'MECHANIC' 
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Settings className="w-5 h-5" />
              {t.tabMechanic}
            </div>
          </button>
          <button 
            onClick={() => { setActiveTab('ADMIN'); setError(null); }}
            type="button"
            className={`flex-1 min-w-[80px] pb-3 text-sm font-bold border-b-2 transition-colors ${
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

        <div className="p-8 pb-4 text-center shrink-0">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-colors duration-300 ${
             activeTab === 'DRIVER' ? 'bg-blue-600 shadow-blue-600/30' :
             activeTab === 'SHOP' ? 'bg-amber-500 shadow-amber-500/30' :
             activeTab === 'MECHANIC' ? 'bg-emerald-600 shadow-emerald-600/30' :
             'bg-purple-600 shadow-purple-600/30'
          }`}>
             {activeTab === 'DRIVER' && <Car className="w-7 h-7 text-white" />}
             {activeTab === 'SHOP' && <Building2 className="w-7 h-7 text-white" />}
             {activeTab === 'MECHANIC' && <Settings className="w-7 h-7 text-white" />}
             {activeTab === 'ADMIN' && <ShieldCheck className="w-7 h-7 text-white" />}
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
             {isLogin ? getPortalTitle() : t.registerTitle}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
             {isLogin ? t.subtitle : t.registerSubtitle}
          </p>
        </div>

        {/* Content - Scrollable if needed */}
        <div className="p-8 pt-2 overflow-y-auto custom-scrollbar flex-grow">
          <form onSubmit={handleAuth} className="space-y-4">
             {error && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-xs font-bold text-center border border-red-100 dark:border-red-800 animate-pulse">
                   {error}
                </div>
             )}

             {/* Registration Specific Fields */}
             {!isLogin && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                   {/* Common Name Field */}
                   <div className="relative">
                      <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                         type="text" 
                         placeholder={t.namePlaceholder}
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 dark:text-white transition-all"
                         required
                      />
                   </div>

                   {/* Role Specific Registration Fields */}
                   {(activeTab === 'SHOP' || activeTab === 'MECHANIC') && (
                      <div className="relative">
                         <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                         <input 
                            type="text" 
                            placeholder={t.shopNamePlaceholder}
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 dark:text-white transition-all"
                            required
                         />
                      </div>
                   )}

                   <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                         <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                         <input 
                            type="tel" 
                            placeholder={t.phonePlaceholder}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 dark:text-white transition-all text-sm"
                         />
                      </div>
                      {(activeTab !== 'ADMIN') && (
                          <div className="relative">
                             <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                             <input 
                                type="text" 
                                placeholder={t.docPlaceholder}
                                value={doc}
                                onChange={(e) => setDoc(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 dark:text-white transition-all text-sm"
                             />
                          </div>
                      )}
                   </div>
                </div>
             )}

             {/* Common Fields (Email/Pass) */}
             <div className="space-y-4">
               <div className="relative">
                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                 <input 
                   type="email" 
                   placeholder={t.emailPlaceholder}
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 dark:text-white transition-all"
                   required
                 />
               </div>
               <div className="relative">
                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                 <input 
                   type="password" 
                   placeholder={t.passwordPlaceholder}
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 dark:text-white transition-all"
                   required
                 />
               </div>
             </div>

             {/* Submit Button */}
             <button 
                type="submit"
                className={`w-full py-3.5 mt-2 font-bold rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 ${
                   activeTab === 'DRIVER' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30' :
                   activeTab === 'SHOP' ? 'bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-amber-500/30' :
                   activeTab === 'MECHANIC' ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30' :
                   'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/30'
                }`}
             >
                <LogIn className="w-5 h-5" />
                {isLogin ? t.button : t.registerButton}
             </button>
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-6 text-center">
             <button 
                type="button"
                onClick={toggleMode}
                className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
             >
                {isLogin ? t.toggleToRegister : t.toggleToLogin}
             </button>
          </div>
          
          {/* Demo Hint */}
          {isLogin && (
             <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-center border border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-400 mb-1 font-bold uppercase tracking-wider">Demo Access ({activeTab})</p>
                <code className="text-[10px] text-slate-500 dark:text-slate-400 block bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
                   {activeTab === 'DRIVER' && 'motorista@ocplus.com'}
                   {activeTab === 'SHOP' && 'oficina@ocplus.com'}
                   {activeTab === 'MECHANIC' && 'mecanico@ocplus.com'}
                   {activeTab === 'ADMIN' && 'admin@ocplus.com'}
                </code>
                <p className="text-[10px] text-slate-400 mt-1">Pass: 12345678</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
