import React, { useState } from 'react';
import { translations } from '../translations';
import { Language, User, AnalysisResult } from '../types';
import { Wrench, Gauge, Activity, Cpu, Thermometer, Settings, ClipboardList, PenTool, CheckCircle, Clock, AlertTriangle, BadgeCheck, LayoutGrid, History, Bell, Navigation, MessageCircle, X, Check, MapPin, Truck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import HistoryView from './HistoryView';

interface MechanicDashboardProps {
  language: Language;
  currentUser: User | null;
  onSelectAnalysis: (analysis: AnalysisResult) => void;
}

const MechanicDashboard: React.FC<MechanicDashboardProps> = ({ language, currentUser, onSelectAnalysis }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history' | 'requests'>('dashboard');
  const t = translations[language].mechanicDashboard;

  const statsData = [
    { name: 'Mon', jobs: 4 },
    { name: 'Tue', jobs: 6 },
    { name: 'Wed', jobs: 5 },
    { name: 'Thu', jobs: 8 },
    { name: 'Fri', jobs: 7 },
  ];

  const jobs = [
    { id: 1, car: 'Ford Ka 1.0', plate: 'ABC-1234', issue: t.jobs.engine, status: 'IN_PROGRESS', icon: Thermometer, color: 'text-red-500 bg-red-100' },
    { id: 2, car: 'Fiat Toro', plate: 'XYZ-9876', issue: t.jobs.brakes, status: 'PENDING', icon: () => <div className="rounded-full border-2 border-slate-400 w-5 h-5 flex items-center justify-center"><div className="w-2 h-2 bg-slate-400 rounded-full"></div></div>, color: 'text-amber-500 bg-amber-100' },
    { id: 3, car: 'Honda Civic', plate: 'HDA-5555', issue: t.jobs.electronics, status: 'COMPLETED', icon: Cpu, color: 'text-blue-500 bg-blue-100' },
    { id: 4, car: 'VW Gol', plate: 'GOL-1000', issue: t.jobs.suspension, status: 'PENDING', icon: Activity, color: 'text-amber-500 bg-amber-100' },
  ];

  const [requests, setRequests] = useState([
    {
      id: 1,
      user: 'Carlos Lima',
      vehicle: 'Fiat Uno (2018)',
      distance: '2.1 km',
      type: 'Falha Motor / Parou',
      urgency: 'HIGH',
      status: 'PENDING',
      location: 'Rua das Flores, 120'
    },
    {
      id: 2,
      user: 'Mariana Souza',
      vehicle: 'Jeep Renegade (2021)',
      distance: '4.5 km',
      type: 'Bateria Descarregada',
      urgency: 'MEDIUM',
      status: 'PENDING',
      location: 'Av. Ipiranga, 890'
    }
  ]);

  const handleAcceptRequest = (id: number) => {
     setRequests(prev => prev.map(req => req.id === id ? { ...req, status: 'ACCEPTED' } : req));
  };

  const handleDeclineRequest = (id: number) => {
     setRequests(prev => prev.filter(req => req.id !== id));
  };

  const pendingRequestsCount = requests.filter(r => r.status === 'PENDING').length;

  const getStatusBadge = (status: string) => {
    switch(status) {
        case 'IN_PROGRESS': return <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center"><Clock className="w-3 h-3 mr-1"/> {t.jobs.inProgress}</span>;
        case 'COMPLETED': return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold flex items-center"><CheckCircle className="w-3 h-3 mr-1"/> {t.jobs.completed}</span>;
        default: return <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold flex items-center"><AlertTriangle className="w-3 h-3 mr-1"/> {t.jobs.pending}</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Header & Tabs */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
             <div className="flex items-center gap-2">
               <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.title}</h1>
               <BadgeCheck className="w-6 h-6 text-emerald-500" />
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{t.verifiedDesc}</p>
             <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 mt-2 w-fit">
                <Wrench className="w-4 h-4" />
                {currentUser?.shopName || 'Mecânica Central'}
             </div>
          </div>

          <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-slate-700 self-start md:self-auto">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' 
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
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' 
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
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' 
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

      {activeTab === 'history' ? (
        <HistoryView language={language} onSelectAnalysis={onSelectAnalysis} />
      ) : activeTab === 'requests' ? (
        <div className="animate-in fade-in duration-300">
           <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                 <Bell className="w-5 h-5 mr-2 text-emerald-500" />
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
                          <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center animate-in fade-in">
                             <div className="bg-emerald-500 text-white p-3 rounded-full mb-3 shadow-lg">
                                <Navigation className="w-8 h-8 animate-pulse" />
                             </div>
                             <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">{t.requestsView.navigating}</h3>
                             <button className="mt-4 px-6 py-2 bg-white text-emerald-700 font-bold rounded-full shadow-md flex items-center">
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
                                   <MapPin className="w-4 h-4 mr-1 text-emerald-500" />
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
                                className="flex-1 md:flex-none px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
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
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
             <button className="flex items-center justify-center gap-3 p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20">
                <Settings className="w-5 h-5" />
                {t.newDiagnostic}
             </button>
             <button className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-white rounded-xl font-medium transition-colors">
                <ClipboardList className="w-5 h-5 text-emerald-500" />
                {t.maintenance}
             </button>
             <button className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-white rounded-xl font-medium transition-colors">
                <PenTool className="w-5 h-5 text-emerald-500" />
                {t.partsOrder}
             </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Stats Column */}
             <div className="lg:col-span-2 space-y-6">
                
                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.stats.activeJobs}</span>
                         <Activity className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-3xl font-black text-slate-900 dark:text-white">12</span>
                   </div>
                   <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.stats.partsStock}</span>
                         <Settings className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-3xl font-black text-slate-900 dark:text-white">85%</span>
                   </div>
                   <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.stats.efficiency}</span>
                         <Gauge className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span className="text-3xl font-black text-slate-900 dark:text-white">9.4</span>
                   </div>
                </div>

                {/* Chart Area */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm h-80">
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Volume de Serviços</h3>
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={statsData}>
                         <defs>
                            <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                               <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                         </defs>
                         <XAxis dataKey="name" stroke="#94a3b8" />
                         <YAxis stroke="#94a3b8" />
                         <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                         <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                         />
                         <Area type="monotone" dataKey="jobs" stroke="#10b981" fillOpacity={1} fill="url(#colorJobs)" />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
             </div>

             {/* Job Queue Column */}
             <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                 <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t.jobs.title}</h3>
                 </div>
                 <div className="p-4 space-y-3 overflow-y-auto max-h-[600px]">
                    {jobs.map((job) => (
                       <div key={job.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700/50 hover:border-emerald-500 transition-colors cursor-pointer group">
                          <div className="flex justify-between items-start mb-2">
                             <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${job.color}`}>
                                   {typeof job.icon === 'function' ? <job.icon className="w-5 h-5"/> : <job.icon className="w-5 h-5" />}
                                </div>
                                <div>
                                   <h4 className="font-bold text-slate-900 dark:text-white text-sm">{job.car}</h4>
                                   <p className="text-xs text-slate-500">{job.plate}</p>
                                </div>
                             </div>
                             {getStatusBadge(job.status)}
                          </div>
                          <div className="mt-2 pl-[52px]">
                             <p className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded inline-block border border-slate-200 dark:border-slate-600">
                                {job.issue}
                             </p>
                          </div>
                       </div>
                    ))}
                 </div>
             </div>

          </div>
        </>
      )}
    </div>
  );
};

export default MechanicDashboard;