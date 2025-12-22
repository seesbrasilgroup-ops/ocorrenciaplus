import React, { useState } from 'react';
import { Language, AdminTab } from '../types';
import { translations } from '../translations';
import { Users, DollarSign, Activity, TrendingUp, Filter, Search, MoreVertical, Shield, Headset, BarChart, ShoppingCart, Handshake, Gavel, FileText, Menu, X, History } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as ReBarChart, Bar } from 'recharts';
import HistoryView from './HistoryView';

interface SuperAdminDashboardProps {
  language: Language;
}

const SuperAdminDashboard: React.FC<SuperAdminDashboardProps> = ({ language }) => {
  const t = translations[language].superAdmin;
  const [activeTab, setActiveTab] = useState<AdminTab>('OVERVIEW');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Mock Data
  const data = [
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 200 },
    { name: 'Thu', value: 278 },
    { name: 'Fri', value: 189 },
  ];

  const menuItems = [
    { id: 'OVERVIEW', label: t.menu.overview, icon: Activity },
    { id: 'HISTORY', label: t.menu.history, icon: History },
    { id: 'SERVICE', label: t.menu.service, icon: Headset },
    { id: 'MONITORING', label: t.menu.monitoring, icon: Shield },
    { id: 'COSTS', label: t.menu.costs, icon: DollarSign },
    { id: 'EARNINGS', label: t.menu.earnings, icon: TrendingUp },
    { id: 'SALES', label: t.menu.sales, icon: ShoppingCart },
    { id: 'PARTNERSHIPS', label: t.menu.partnerships, icon: Handshake },
    { id: 'LEGAL', label: t.menu.legal, icon: Gavel },
    { id: 'REPORTS', label: t.menu.reports, icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'HISTORY':
         return (
             <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <HistoryView language={language} onSelectAnalysis={(item) => console.log('Admin selected item', item)} />
             </div>
         );
      case 'SERVICE':
        return (
           <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-bold dark:text-white mb-4">Central de Atendimento</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.stats.activeCalls}</h3>
                    <p className="text-3xl font-bold dark:text-white">12</p>
                    <span className="text-red-500 text-xs">High Wait Time</span>
                 </div>
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.stats.avgTime}</h3>
                    <p className="text-3xl font-bold dark:text-white">4m 32s</p>
                 </div>
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.stats.satisfaction}</h3>
                    <p className="text-3xl font-bold text-green-500">4.8/5</p>
                 </div>
              </div>
           </div>
        );
      case 'MONITORING':
         return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
               <h2 className="text-2xl font-bold dark:text-white mb-4">Monitoramento em Tempo Real</h2>
               <div className="bg-slate-900 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-46.6333,-23.5505,10,0,0/800x600?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJja2VuaGZ5cm8wMDB4MnJ0Z3Z4b214aXBiIn0.7b1-M3Z-1')] opacity-50 bg-cover bg-center"></div>
                  <p className="text-white z-10 font-bold bg-black/50 px-4 py-2 rounded">Live Map View (Simulated)</p>
               </div>
            </div>
         );
      default:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Overview KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.totalUsers}</h3>
                  <p className="text-3xl font-bold dark:text-white">12,450</p>
               </div>
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.stats.totalRevenue}</h3>
                  <p className="text-3xl font-bold text-green-500">R$ 482k</p>
               </div>
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.activeShops}</h3>
                  <p className="text-3xl font-bold text-blue-500">842</p>
               </div>
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm uppercase">{t.conversionRate}</h3>
                  <p className="text-3xl font-bold text-purple-500">4.2%</p>
               </div>
            </div>

            {/* Main Chart */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 h-96">
               <h3 className="text-lg font-bold dark:text-white mb-4">Receita vs Custos</h3>
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip contentStyle={{backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: 'white'}} />
                     <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
           {isSidebarOpen && <span className="font-bold text-slate-700 dark:text-slate-200 uppercase text-xs tracking-wider">Menu</span>}
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
              {isSidebarOpen ? <X size={20} className="dark:text-white"/> : <Menu size={20} className="dark:text-white"/>}
           </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
           {menuItems.map((item) => (
              <button
                 key={item.id}
                 onClick={() => setActiveTab(item.id as AdminTab)}
                 className={`w-full flex items-center px-6 py-3 transition-colors ${
                    activeTab === item.id 
                       ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-r-4 border-brand-500' 
                       : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                 }`}
              >
                 <item.icon size={20} />
                 {isSidebarOpen && <span className="ml-3 font-medium text-sm">{item.label}</span>}
              </button>
           ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
         <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.title}</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Admin Portal • {new Date().toLocaleDateString()}</p>
            {renderContent()}
         </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
