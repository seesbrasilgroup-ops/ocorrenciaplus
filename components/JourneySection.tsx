
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface JourneySectionProps {
  language: Language;
  onOpenAuth: () => void;
}

const JourneySection: React.FC<JourneySectionProps> = ({ language, onOpenAuth }) => {
  const t = translations[language].journeySection;
  const btnText = translations[language].nav.login; // Reusing "Entrar" / "Login"

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight drop-shadow-sm">
          {t.title} <span className="text-blue-600 dark:text-blue-400">{t.titleHighlight}</span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-6 font-medium">
          {t.subtitle}
        </p>
        
        <div className="flex justify-center mb-0 relative z-20">
            <button 
                onClick={onOpenAuth}
                className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1 text-lg"
            >
                {btnText}
            </button>
        </div>
        
        <div className="w-full h-[300px] -mt-12 md:-mt-20 flex items-center justify-center relative z-10">
            <style>{`
                :root {
                  --car-anim-duration: 8s;
                }

                #journey-svg #wholeCar {
                    transform-origin: center center;
                    animation: wholeCarAnim var(--car-anim-duration) ease-in-out infinite;
                }

                #journey-svg #bumper {
                    stroke-dasharray: 240;
                    stroke-dashoffset: 240;
                    animation: bumperAnim var(--car-anim-duration) ease-in-out infinite;
                }

                #journey-svg #bonnetGroup {
                    opacity: 0;
                    animation: bonnetAnim var(--car-anim-duration) ease-in-out infinite;
                }

                #journey-svg #frame {
                    transform-origin: center center;
                    transform: scaleX(0);
                    animation: frameAnim var(--car-anim-duration) ease-in-out infinite;
                }

                #journey-svg #headlightL, #journey-svg #headlightR {
                    transform-origin: 410px 326px; 
                    transform: scale(0);
                    animation: lightsAnim var(--car-anim-duration) ease-out infinite;
                }

                #journey-svg #mirrorL {
                    transform-origin: bottom right;
                    transform: scale(0);
                    animation: mirrorLAnim var(--car-anim-duration) ease-out infinite;
                }

                #journey-svg #mirrorR {
                    transform-origin: bottom left;
                    transform: scale(0);
                    animation: mirrorRAnim var(--car-anim-duration) ease-out infinite;
                }

                #journey-svg #tyreL, #journey-svg #tyreR {
                    transform-origin: center center;
                    transform: scaleY(0);
                    animation: tyresAnim var(--car-anim-duration) ease-out infinite;
                }

                #journey-svg #shadow {
                    transform-origin: center center;
                    opacity: 0;
                    animation: shadowAnim var(--car-anim-duration) ease-in-out infinite;
                }

                /* Keyframes aligned to 8s loop */
                
                @keyframes bumperAnim {
                    0% { stroke-dashoffset: 240; opacity: 1; }
                    10%, 80% { stroke-dashoffset: 0; opacity: 1; }
                    90%, 100% { opacity: 0; }
                }

                @keyframes bonnetAnim {
                    0%, 8% { opacity: 0; transform: translateY(20px); }
                    15%, 80% { opacity: 1; transform: translateY(0); }
                    90%, 100% { opacity: 0; }
                }

                @keyframes frameAnim {
                    0%, 12% { transform: scaleX(0); opacity: 1; }
                    20%, 80% { transform: scaleX(1); opacity: 1; }
                    90%, 100% { opacity: 0; }
                }

                @keyframes lightsAnim {
                    0%, 20% { transform: scale(0); opacity: 1; }
                    25%, 80% { transform: scale(1); opacity: 1; }
                    90%, 100% { opacity: 0; }
                }

                @keyframes mirrorLAnim {
                    0%, 28% { transform: scale(0) rotate(90deg) translate(10px, 20px); opacity: 1; }
                    35%, 80% { transform: scale(1) rotate(0deg) translate(0, 0); opacity: 1; }
                    90%, 100% { opacity: 0; }
                }
                @keyframes mirrorRAnim {
                    0%, 28% { transform: scale(0) rotate(-90deg) translate(-10px, 20px); opacity: 1; }
                    35%, 80% { transform: scale(1) rotate(0deg) translate(0, 0); opacity: 1; }
                    90%, 100% { opacity: 0; }
                }

                @keyframes tyresAnim {
                    0%, 25% { transform: scaleY(0); opacity: 0; }
                    30%, 80% { transform: scaleY(1); opacity: 1; }
                    90%, 100% { opacity: 0; }
                }

                @keyframes wholeCarAnim {
                    0%, 25% { transform: translateY(-40px) scale(1); opacity: 1; }
                    35%, 65% { transform: translateY(0) scale(1); opacity: 1; }
                    70% { transform: translateY(20px) scale(0.9); opacity: 1; } /* Anticipation */
                    85% { transform: translateY(600px) scale(3); opacity: 0; } /* Drive Out */
                    100% { transform: translateY(600px) scale(3); opacity: 0; }
                }

                @keyframes shadowAnim {
                    0%, 20% { transform: scaleX(0.5); opacity: 0; }
                    35%, 65% { transform: scaleX(1); opacity: 0.3; }
                    85%, 100% { opacity: 0; }
                }

            `}</style>

            <svg id="journey-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full overflow-visible">
                <defs>
                    <clipPath id="journey-bonnetMask">
                        <rect x="290" y="282.333" fill="#691BE2" width="239.833" height="74.914"/>    
                    </clipPath>
                    <clipPath id="journey-tyreMask">
                        <rect x="290" y="383.333" fill="#691BE2" width="239.833" height="74.914"/>
                    </clipPath>
                </defs>

                <ellipse id="shadow" fill="#000" cx="410.779" cy="411.598" rx="142.983" ry="7.438"/>
                
                <g id="wholeCar">
                    <g clipPath="url(#journey-tyreMask)">
                        <path id="tyreL" fill="#1e293b" d="M345.763,410.936h-29.098c-2.2,0-4-1.8-4-4v-40.935c0-2.2,1.8-4,4-4h29.098c2.2,0,4,1.8,4,4	v40.935C349.763,409.136,347.963,410.936,345.763,410.936z"/>
                        <path id="tyreR" fill="#1e293b" d="M502.303,410.936h-29.098c-2.2,0-4-1.8-4-4v-40.935c0-2.2,1.8-4,4-4h29.098c2.2,0,4,1.8,4,4	v40.935C506.303,409.136,504.503,410.936,502.303,410.936z"/>  
                    </g>
                    
                    <g id="chassis">   
                        {/* Bumper: Slate 700 */}
                        <line id="bumper" fill="none" stroke="#334155" strokeWidth="26" strokeLinecap="round" strokeMiterlimit="10" x1="290" y1="370" x2="528" y2="370"/>
                        
                        <g clipPath="url(#journey-bonnetMask)" id="bonnetGroup">
                             {/* Bonnet Stroke - Blue */}
                             <path id="bonnetEnd" fill="none" stroke="#2563eb" strokeWidth="2" d="M290,361.167v-47.833c0-17.05,13.95-31,31-31h177.833c17.05,0,31,13.95,31,31v47.833"/>
                             {/* Bonnet Fill - Blue */}
                             <path id="bonnetFill" fill="#2563eb" d="M292,361.167v-47.833c0-17.05,13.95-31,31-31h173.833c17.05,0,31,13.95,31,31v47.833"/>
                        </g>

                        {/* Frame (Windshield) Fill - Dark Blue (#1e3a8a), Stroke - Blue (#2563eb) */}
                        <polygon id="frame" fill="#1e3a8a" fillOpacity="1" stroke="#2563eb" strokeWidth="16" strokeMiterlimit="10" points="496.429,282.333 323.467,282.333 340.467,202.194 483.429,202.194 "/>
                        
                        {/* Headlights Slate 800 */}
                        <circle id="headlightL" fill="#1e293b" cx="331.714" cy="326.858" r="17.5"/>
                        <circle id="headlightR" fill="#1e293b" cx="487.754" cy="326.858" r="17.5"/>  
                        
                        {/* Mirrors - Blue */}
                        <rect id="mirrorR" x="514.21" y="262.76" width="28.59" height="20.16" rx="6" ry="6" fill="#2563eb"/>
                        <rect id="mirrorL" x="276.94" y="262.76" width="28.59" height="20.16" rx="6" ry="6" fill="#2563eb"/>      
                    </g>
                </g>
            </svg>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
