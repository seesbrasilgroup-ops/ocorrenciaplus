import React, { useState } from 'react';
import { getAdminStats } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, DollarSign, Activity, AlertCircle, LayoutGrid, History, CheckSquare, MessageCircle, BadgeCheck, ClipboardList, ScanLine, Bell, MapPin, Navigation, Truck, User, Check, X } from 'lucide-react';
import { Language, AnalysisResult, User as UserType } from '../types';
import { translations } from '../translations';
import HistoryView from './HistoryView';

interface ShopDashboardProps {
  language: Language;
  recentAnalysis: AnalysisResult | null;
  currentUser: UserType | null;
  onSelectAnalysis: (analysis: AnalysisResult) => void;
  onNewEstimate: () => void;
}

const ShopDashboard: React.FC<ShopDashboardProps> = ({ language, recentAnalysis, currentUser, onSelectAnalysis, onNewEstimate }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history' | 'requests'>('dashboard');
  const t = translations[language].shopDashboard;
  const tAdmin = translations[language].admin; // Reuse generic stats translations
  const stats = getAdminStats(language);

  const verified = currentUser?.verified;

  // Mock Requests State
  const [requests, setRequests] = useState([
    {
      id: 1,
      user: 'Ana Silva',
      vehicle: 'Hyundai HB20 (2022)',
      distance: '3.2 km',
      type: 'Guincho / Colisão',
      urgency: 'HIGH',
      status: 'PENDING',
      location: 'Av. Paulista, 1000'
    },
    {
      id: 2,
      user: 'Roberto Carlos',
      vehicle: 'Toyota Corolla (2019)',
      distance: '5.8 km',
      type: 'Orçamento Presencial',
      urgency: 'MEDIUM',
      status: 'PENDING',
      location: 'Rua Augusta, 500'
    }
  ]);

  const handleAcceptRequest = (id: number) => {
     setRequests(prev => prev.map(req => req.id === id ? { ...req, status: 'ACCEPTED' } : req));
  };

  const handleDeclineRequest = (id: number) => {
     setRequests(prev => prev.filter(req => req.id !== id));
  };

  const pendingRequestsCount = requests.filter(r => r.status === 'PENDING').length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Header & Status */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {t.title}
              {verified && <BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-500/10" />}
            </h1>
            {verified && (
               <p className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  {t.verifiedDesc}
               </p>
            )}
          </div>
          
          <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-slate-700 self-start md:self-auto">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              {t.tabs.dashboard}
            </button>
            <button 
               onClick={() => setActiveTab('history')}
               className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'history' 
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              <History className="w-4 h-4 mr-2" />
              {t.tabs.history}
            </button>
            <button 
               onClick={() => setActiveTab('requests')}
               className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all relative ${
                activeTab === 'requests' 
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              <Bell className="w-4 h-4 mr-2" />
              {t.tabs.requests}
              {pendingRequestsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center animate-bounce">
                  {pendingRequestsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
         <button 
            onClick={onNewEstimate}
            className="flex items-center justify-center gap-3 p-4 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-lg shadow-amber-500/20"
         >
            <ScanLine className="w-5 h-5" />
            {t.newEstimate}
         </button>
         <button className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-slate-700 dark:text-white rounded-xl font-medium transition-colors">
            <ClipboardList className="w-5 h-5 text-amber-500" />
            {t.checklist}
         </button>
         <button className="flex items-center justify-center gap-3 p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-green-600/20">
            <MessageCircle className="w-5 h-5" />
            {t.whatsapp}
         </button>
      </div>
      
      {activeTab === 'history' ? (
        <HistoryView language={language} onSelectAnalysis={onSelectAnalysis} />
      ) : activeTab === 'requests' ? (
        <div className="animate-in fade-in duration-300">
           <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                 <Bell className="w-5 h-5 mr-2 text-amber-500" />
                 {t.requestsView.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{t.requestsView.subtitle}</p>
           </div>
           
           {requests.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed">
                 <Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                 <p className="text-slate-500">{t.requestsView.empty}</p>
              </div>
           ) : (
              <div className="grid grid-cols-1 gap-6">
                 {requests.map(req => (
                    <div key={req.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
                       {req.status === 'ACCEPTED' && (
                          <div className="absolute inset-0 bg-green-500/10 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center animate-in fade-in">
                             <div className="bg-green-500 text-white p-3 rounded-full mb-3 shadow-lg">
                                <Navigation className="w-8 h-8 animate-pulse" />
                             </div>
                             <h3 className="text-xl font-bold text-green-700 dark:text-green-400">{t.requestsView.navigating}</h3>
                             <button className="mt-4 px-6 py-2 bg-white text-green-700 font-bold rounded-full shadow-md flex items-center">
                                <MessageCircle className="w-4 h-4 mr-2" /> {t.requestsView.contact}
                             </button>
                          </div>
                       )}

                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                          <div className="flex items-start gap-4">
                             <div className={`p-4 rounded-xl ${req.urgency === 'HIGH' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                <Truck className="w-8 h-8" />
                             </div>
                             <div>
                                <div className="flex items-center gap-2 mb-1">
                                   <h3 className="font-bold text-lg text-slate-900 dark:text-white">{req.user}</h3>
                                   <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                      {req.vehicle}
                                   </span>
                                </div>
                                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                                   <MapPin className="w-4 h-4 mr-1 text-amber-500" />
                                   {req.location}
                                </div>
                                <div className="flex items-center gap-4">
                                   <span className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">
                                      {req.type}
                                   </span>
                                   <span className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center">
                                      <Navigation className="w-3 h-3 mr-1" />
                                      {req.distance} {t.requestsView.distance}
                                   </span>
                                </div>
                             </div>
                          </div>

                          <div className="flex gap-3 w-full md:w-auto">
                             <button 
                                onClick={() => handleDeclineRequest(req.id)}
                                className="flex-1 md:flex-none px-6 py-3 border border-slate-200 dark:border-slate-600 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                             >
                                <X className="w-4 h-4" /> {t.requestsView.decline}
                             </button>
                             <button 
                                onClick={() => handleAcceptRequest(req.id)}
                                className="flex-1 md:flex-none px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-lg shadow-green-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                             >
                                <Check className="w-4 h-4" /> {t.requestsView.accept}
                             </button>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           )}
        </div>
      ) : (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{tAdmin.revenue}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">R$ 42.3k</h3>
                </div>
                <div className="bg-green-100 dark:bg-green-500/20 p-3 rounded-lg">
                  <DollarSign className="text-green-600 dark:text-green-400 w-6 h-6" />
                </div>
              </div>
              <span className="text-green-600 dark:text-green-400 text-xs font-bold mt-2 block">+12% vs mês anterior</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{tAdmin.analyses}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">128</h3>
                </div>
                <div className="bg-brand-100 dark:bg-brand-500/20 p-3 rounded-lg">
                  <Activity className="text-brand-600 dark:text-brand-400 w-6 h-6" />
                </div>
              </div>
              <span className="text-brand-600 dark:text-brand-400 text-xs font-bold mt-2 block">+8% vs mês anterior</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{tAdmin.users}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">89</h3>
                </div>
                <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-lg">
                  <Users className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                </div>
              </div>
              <span className="text-gray-500 text-xs font-medium mt-2 block">12 novos leads</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{tAdmin.critical}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">14</h3>
                </div>
                <div className="bg-red-100 dark:bg-red-500/20 p-3 rounded-lg">
                  <AlertCircle className="text-red-600 dark:text-red-400 w-6 h-6" />
                </div>
              </div>
              <span className="text-red-600 dark:text-red-400 text-xs font-bold mt-2 block">Oportunidades de alto valor</span>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{tAdmin.chartVolume}</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.3} />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="analyses" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{tAdmin.chartRevenue}</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.3} />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopDashboard;