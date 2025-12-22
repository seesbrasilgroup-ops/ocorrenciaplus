import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MapPin, Phone, MessageSquare, Truck, ShieldCheck, Navigation } from 'lucide-react';

interface LiveTrackingMapProps {
  language: Language;
  mode: 'HELP' | 'SOLUTION';
  onReset: () => void;
}

const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({ language, mode, onReset }) => {
  const t = translations[language].emergency;
  const [status, setStatus] = useState<'FINDING' | 'FOUND' | 'ARRIVING'>('FINDING');

  useEffect(() => {
    // Simulate flow
    const timer1 = setTimeout(() => setStatus('FOUND'), 3000);
    const timer2 = setTimeout(() => setStatus('ARRIVING'), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-slate-100 overflow-hidden">
      {/* Fake Map Background */}
      <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-46.6333, -23.5505,12,0,0/800x600?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJja2VuaGZ5cm8wMDB4MnJ0Z3Z4b214aXBiIn0.7b1-M3Z-1')] bg-cover bg-center opacity-40">
        {/* Abstract Map Grid if image fails */}
        <div className="w-full h-full bg-[#e5e7eb] relative opacity-50">
           <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse z-20"></div>
           {/* Random markers */}
           <div className="absolute top-1/3 left-1/4">
              <MapPin className="w-8 h-8 text-amber-500 fill-amber-500/20" />
           </div>
           <div className="absolute bottom-1/3 right-1/4">
              <MapPin className="w-8 h-8 text-amber-500 fill-amber-500/20" />
           </div>
        </div>
      </div>

      {/* Floating Status Card */}
      <div className="absolute bottom-8 left-4 right-4 md:left-auto md:right-8 md:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        <div className={`h-2 w-full ${status === 'FINDING' ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`}></div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-full ${status === 'FINDING' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
              {status === 'FINDING' ? <Navigation className="w-6 h-6 animate-spin" /> : <Truck className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                {status === 'FINDING' ? t.finding : status === 'FOUND' ? t.driverFound : `${t.driverArriving} 12 min`}
              </h3>
              <p className="text-sm text-gray-500">
                 {mode === 'HELP' ? t.agentCall : 'AutoTech Center • 4.9 ★'}
              </p>
            </div>
          </div>

          {status !== 'FINDING' && mode === 'SOLUTION' && (
            <div className="space-y-4">
               <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <img src="https://i.pravatar.cc/150?u=mechanic" alt="Driver" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                     <p className="font-bold text-sm dark:text-white">Roberto M.</p>
                     <p className="text-xs text-gray-500">Guincho • Placa ABC-1234</p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-blue-500 ml-auto" />
               </div>
               
               <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
                     <Phone className="w-4 h-4" /> Ligar
                  </button>
                  <button className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
                     <MessageSquare className="w-4 h-4" /> Chat
                  </button>
               </div>
            </div>
          )}

          {status !== 'FINDING' && mode === 'HELP' && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-700 dark:text-blue-300 text-sm">
               <p>{t.contacting}</p>
               <p className="font-bold mt-1">Nossa equipe já recebeu seus dados.</p>
            </div>
          )}
          
          <button onClick={onReset} className="w-full mt-4 py-2 text-gray-400 hover:text-gray-600 text-sm">
             {t.cancel}
          </button>
        </div>
      </div>
      
      {/* Map Badge */}
      <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
         <span className="text-xs font-bold text-gray-700 dark:text-white uppercase tracking-wider">{t.mapBadge}</span>
      </div>
    </div>
  );
};

export default LiveTrackingMap;
