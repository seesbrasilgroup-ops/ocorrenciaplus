import React from 'react';
import { Language } from '../types';
import { MapPin, Phone, Star, ShieldCheck, Navigation, Clock, UserCheck, ArrowRight } from 'lucide-react';

interface EmergencyServiceSectionProps {
  language: Language;
}

const EmergencyServiceSection: React.FC<EmergencyServiceSectionProps> = ({ language }) => {
  // Hardcoded text for visual consistency as per request, using the requested tone
  const content = {
    'pt-BR': {
      badge: 'Solução Presencial',
      title: 'Não fique apenas no',
      titleHighlight: 'Virtual',
      subtitle: 'Transforme o laudo da IA em ação imediata.',
      desc: 'Gostou da análise? Com um toque, enviamos um especialista parceiro até o local. Ele valida o orçamento gerado pelo app e já pode iniciar os trâmites de reparo ou guincho.',
      features: [
        { title: 'Profissionais Verificados', desc: 'Rede credenciada com selo OC+' },
        { title: 'Preço Garantido', desc: 'O valor do app é respeitado pelo parceiro' },
        { title: 'Chegada em Minutos', desc: 'Rastreamento em tempo real no mapa' }
      ],
      card: {
        status: 'A caminho',
        time: '12 min',
        name: 'Roberto M.',
        role: 'Técnico Credenciado',
        plate: 'Guincho • ABC-1234'
      }
    },
    'en': {
      badge: 'On-site Solution',
      title: 'Don\'t stay just',
      titleHighlight: 'Virtual',
      subtitle: 'Turn AI reports into immediate action.',
      desc: 'Liked the analysis? With one tap, we dispatch a partner expert to your location. They validate the app-generated estimate and can start repair or towing procedures immediately.',
      features: [
        { title: 'Verified Professionals', desc: 'OC+ certified network' },
        { title: 'Guaranteed Price', desc: 'Partner respects the app estimate' },
        { title: 'Arrives in Minutes', desc: 'Real-time map tracking' }
      ],
      card: {
        status: 'En route',
        time: '12 min',
        name: 'Roberto M.',
        role: 'Certified Tech',
        plate: 'Tow • ABC-1234'
      }
    },
    'es': {
      badge: 'Solución Presencial',
      title: 'No te quedes solo en lo',
      titleHighlight: 'Virtual',
      subtitle: 'Transforma el informe de IA en acción inmediata.',
      desc: '¿Te gustó el análisis? Con un toque, enviamos un experto socio al lugar. Valida el presupuesto generado por la app y puede iniciar los trámites de reparación o grúa.',
      features: [
        { title: 'Profesionales Verificados', desc: 'Red acreditada con sello OC+' },
        { title: 'Precio Garantizado', desc: 'El socio respeta el valor de la app' },
        { title: 'Llegada en Minutos', desc: 'Rastreo en tiempo real' }
      ],
      card: {
        status: 'En camino',
        time: '12 min',
        name: 'Roberto M.',
        role: 'Técnico Acreditado',
        plate: 'Grúa • ABC-1234'
      }
    }
  };

  const t = content[language];

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative border-t border-slate-200 dark:border-slate-800">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Right Text Content (Now on Right for Desktop due to row-reverse, visually creates zigzag) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Navigation className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">{t.titleHighlight}</span>.
              <br />
              <span className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 block mt-2">{t.subtitle}</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              {t.desc}
            </p>
            
            <div className="grid gap-6">
              {t.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 min-w-[40px] h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-emerald-500">
                    {idx === 0 ? <ShieldCheck className="w-5 h-5" /> : idx === 1 ? <Star className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-10 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center mx-auto lg:mx-0">
               Solicitar Apoio Agora <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Left Visual Content (Map Interface) */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <div className="relative transform rotate-y-[5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
              
              {/* Phone/Map Container */}
              <div className="bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] p-3 shadow-2xl border-4 border-white dark:border-slate-700 relative overflow-hidden max-w-sm mx-auto">
                 {/* Screen Area */}
                 <div className="bg-slate-100 dark:bg-slate-900 rounded-[2rem] overflow-hidden relative h-[500px]">
                    
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 opacity-60 dark:opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-46.6333,-23.5505,13,0,0/400x600?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJja2VuaGZ5cm8wMDB4MnJ0Z3Z4b214aXBiIn0.7b1-M3Z-1')] bg-cover bg-center"></div>
                    
                    {/* Map Grid Pattern Overlay for Tech Feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] pointer-events-none"></div>

                    {/* Route Path (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-lg">
                       <path d="M 280 100 Q 200 250 120 400" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="10 5" className="animate-[dash_20s_linear_infinite]" />
                       <circle cx="120" cy="400" r="8" fill="#3b82f6" className="animate-pulse" /> {/* User Location */}
                    </svg>
                    
                    {/* Car/Provider Icon Moving */}
                    <div className="absolute top-[80px] right-[40px] bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg z-10 animate-bounce">
                       <Navigation className="w-6 h-6 text-emerald-500 fill-emerald-500" transform="rotate(135)" />
                    </div>

                    {/* Top Status Bar */}
                    <div className="absolute top-6 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-xl p-3 shadow-lg flex justify-between items-center z-20">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase">{t.card.status}</span>
                       </div>
                       <span className="text-sm font-black text-slate-900 dark:text-white">{t.card.time}</span>
                    </div>

                    {/* Bottom Driver Card */}
                    <div className="absolute bottom-6 left-4 right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl z-20 border border-slate-100 dark:border-slate-700">
                       <div className="flex items-center gap-4">
                          <div className="relative">
                             <img src="https://i.pravatar.cc/150?u=mechanic" alt="Professional" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-600 shadow-sm" />
                             <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-[10px] p-1 rounded-full border-2 border-white dark:border-slate-800">
                                <ShieldCheck className="w-3 h-3" />
                             </div>
                          </div>
                          <div className="flex-1">
                             <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.card.name}</h4>
                             <p className="text-xs text-slate-500 dark:text-slate-400">{t.card.role}</p>
                             <div className="flex items-center gap-1 mt-1">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">4.9</span>
                             </div>
                          </div>
                          <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg shadow-emerald-500/30 transition-colors">
                             <Phone className="w-5 h-5" />
                          </button>
                       </div>
                       
                       <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                          <span>{t.card.plate}</span>
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                             <UserCheck className="w-3 h-3" /> Verificado
                          </span>
                       </div>
                    </div>

                 </div>
              </div>

              {/* Floating Elements around Phone */}
               <div className="absolute top-20 -left-12 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-[blob_7s_infinite]">
                 <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Local</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Identificado</p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServiceSection;