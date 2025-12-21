import React, { useState } from 'react';
import { getAdminStats } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, DollarSign, Activity, AlertCircle, Info, User, LayoutGrid, History } from 'lucide-react';
import { Language, AnalysisResult } from '../types';
import { translations } from '../translations';
import HistoryView from './HistoryView';

interface AdminDashboardProps {
  language: Language;
  recentAnalysis: AnalysisResult | null;
  onSelectAnalysis: (analysis: AnalysisResult) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ language, recentAnalysis, onSelectAnalysis }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');
  const t = translations[language].admin;
  const historyTitle = translations[language].history.title;
  const stats = getAdminStats(language);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        
        <div className="flex bg-gray-100 dark:bg-slate-800 p-1.5 rounded-xl border border-gray-200 dark:border-slate-700 self-start sm:self-auto transition-colors duration-300">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 dark:bg-brand-600' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700'
            }`}
          >
            <LayoutGrid className="w-4 h-4 mr-2" />
            Dashboard
          </button>
          <button 
             onClick={() => setActiveTab('history')}
             className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'history' 
                ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 dark:bg-brand-600' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700'
            }`}
          >
            <History className="w-4 h-4 mr-2" />
            {historyTitle}
          </button>
        </div>
      </div>
      
      {activeTab === 'history' ? (
        <HistoryView language={language} onSelectAnalysis={onSelectAnalysis} />
      ) : (
        <>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{t.revenue}</p>
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
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{t.analyses}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,284</h3>
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
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{t.users}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">892</h3>
                </div>
                <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-lg">
                  <Users className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                </div>
              </div>
              <span className="text-gray-500 text-xs font-medium mt-2 block">34 novos hoje</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{t.critical}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">145</h3>
                </div>
                <div className="bg-red-100 dark:bg-red-500/20 p-3 rounded-lg">
                  <AlertCircle className="text-red-600 dark:text-red-400 w-6 h-6" />
                </div>
              </div>
              <span className="text-red-600 dark:text-red-400 text-xs font-bold mt-2 block">Alta demanda de peças</span>
            </div>
          </div>

          {/* Hidden Profile Section (Moved from Analysis View) */}
          {recentAnalysis && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                {t.latestInsight}
              </h2>
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-xl p-6 border border-indigo-200 dark:border-indigo-500/30 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 transition-colors duration-300">
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-indigo-800 dark:text-indigo-300 font-bold">{recentAnalysis.vehicle.make} {recentAnalysis.vehicle.model} ({recentAnalysis.vehicle.year})</h3>
                    <span className="text-xs bg-indigo-200 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded">Ref: {recentAnalysis.id.slice(0, 8)}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-lg border border-indigo-200 dark:border-indigo-500/20">
                      <span className="text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block mb-1">{t.profileLabels.segment}</span>
                      <span className="text-gray-900 dark:text-white font-medium text-lg">{recentAnalysis.profile.segment}</span>
                    </div>
                    <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-lg border border-indigo-200 dark:border-indigo-500/20">
                      <span className="text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block mb-1">{t.profileLabels.churn}</span>
                      <span className="text-gray-900 dark:text-white font-medium text-lg">{recentAnalysis.profile.churnRisk}</span>
                    </div>
                    <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-lg border border-indigo-200 dark:border-indigo-500/20">
                      <span className="text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block mb-1">{t.profileLabels.upsell}</span>
                      <span className="text-gray-900 dark:text-white font-medium text-lg">{recentAnalysis.profile.upsellOpportunity}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-500/20">
                    <p className="text-sm text-indigo-800 dark:text-indigo-200">
                      <span className="font-bold">Recomendação:</span> {recentAnalysis.profile.recommendedServices.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.chartVolume}</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.chartRevenue}</h3>
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

export default AdminDashboard;