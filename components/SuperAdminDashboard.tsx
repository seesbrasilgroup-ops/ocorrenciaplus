import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Users, DollarSign, Activity, TrendingUp, Filter, Search, MoreVertical, Shield } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface SuperAdminDashboardProps {
  language: Language;
}

// Mock Data
const usersList = [
  { id: 1, name: 'Carlos AutoCenter', type: 'SHOP', status: 'Active', date: '2023-10-12', revenue: 'R$ 450' },
  { id: 2, name: 'João Silva', type: 'DRIVER', status: 'Active', date: '2023-10-13', revenue: 'R$ 19' },
  { id: 3, name: 'Funilaria Express', type: 'SHOP', status: 'Pending', date: '2023-10-14', revenue: 'R$ 0' },
  { id: 4, name: 'Maria Souza', type: 'DRIVER', status: 'Active', date: '2023-10-15', revenue: 'R$ 0' },
  { id: 5, name: 'Pedro Santos', type: 'DRIVER', status: 'Blocked', date: '2023-10-15', revenue: 'R$ 19' },
];

const activityData = [
  { name: 'Mon', users: 40, revenue: 240 },
  { name: 'Tue', users: 30, revenue: 139 },
  { name: 'Wed', users: 20, revenue: 980 },
  { name: 'Thu', users: 27, revenue: 390 },
  { name: 'Fri', users: 18, revenue: 480 },
  { name: 'Sat', users: 23, revenue: 380 },
  { name: 'Sun', users: 34, revenue: 430 },
];

const SuperAdminDashboard: React.FC<SuperAdminDashboardProps> = ({ language }) => {
  const t = translations[language].superAdmin;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Shield className="w-8 h-8 text-purple-600" />
          {t.title}
        </h1>
        <p className="text-gray-500 mt-2">Welcome back, Super Admin. Here is what's happening today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.totalUsers}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">12,450</h3>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded">+12% this week</span>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.totalRevenue}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">R$ 482k</h3>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded">+8.2% vs last month</span>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.activeShops}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">842</h3>
            </div>
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <span className="text-xs font-medium text-gray-500">54 pending verification</span>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.conversionRate}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">4.2%</h3>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <span className="text-xs font-bold text-red-500 bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded">-1.2% this week</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Analytics */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{t.recentActivity}</h3>
            <div className="h-72">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
               <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.userList}</h3>
               <div className="flex gap-2">
                  <div className="relative">
                     <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                     <input type="text" placeholder="Search users..." className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" />
                  </div>
                  <button className="p-2 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                     <Filter className="w-4 h-4 text-gray-500" />
                  </button>
               </div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-gray-100 dark:border-slate-700">
                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase">User</th>
                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase">{t.role}</th>
                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase">{t.status}</th>
                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase">LTV</th>
                        <th className="p-4 text-xs font-semibold text-gray-500 uppercase text-right">{t.actions}</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                     {usersList.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                           <td className="p-4">
                              <div className="font-bold text-gray-900 dark:text-white">{user.name}</div>
                              <div className="text-xs text-gray-500">ID: #{user.id}</div>
                           </td>
                           <td className="p-4">
                              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                 user.type === 'SHOP' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                              }`}>
                                 {user.type}
                              </span>
                           </td>
                           <td className="p-4">
                              <span className={`text-xs font-medium ${
                                 user.status === 'Active' ? 'text-green-500' : 
                                 user.status === 'Pending' ? 'text-amber-500' : 'text-red-500'
                              }`}>
                                 {user.status}
                              </span>
                           </td>
                           <td className="p-4 text-sm text-gray-500">{user.date}</td>
                           <td className="p-4 text-sm font-bold text-gray-900 dark:text-white">{user.revenue}</td>
                           <td className="p-4 text-right">
                              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                                 <MoreVertical className="w-4 h-4" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </div>
        </div>

        {/* Right Column: User Distribution */}
        <div className="lg:col-span-1 space-y-8">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">User Distribution</h3>
              <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                       { name: 'Drivers', value: 8500 },
                       { name: 'Shops', value: 3950 }
                    ]}>
                       <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                       <XAxis dataKey="name" stroke="#9ca3af" />
                       <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                        cursor={{fill: 'transparent'}}
                       />
                       <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                 Dominance: <span className="text-brand-500 font-bold">Drivers (68%)</span>
              </div>
           </div>

           <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Pro Features</h3>
              <p className="opacity-90 text-sm mb-4">Manage platform settings, pricing models and API integrations.</p>
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold backdrop-blur-sm transition-colors">
                 System Settings
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SuperAdminDashboard;