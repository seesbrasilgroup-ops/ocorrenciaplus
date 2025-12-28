import React from 'react';

const AnimatedCar: React.FC = () => {
  return (
    <div className="w-full max-w-[280px] h-[200px] lg:max-w-full lg:h-[450px] mx-auto overflow-hidden relative flex items-center justify-center">
      <style>{`
        /* Animation Sequence Definitions */
        @keyframes drawLine {
          0% { stroke-dashoffset: 240; opacity: 0; }
          10% { opacity: 1; }
          40% { stroke-dashoffset: 0; }
          80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @keyframes assembleBody {
          0%, 20% { opacity: 0; transform: translateY(-20px) scale(0.9); }
          40% { opacity: 1; transform: translateY(0) scale(1); }
          80% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(50px) scale(1.5); }
        }
        
        @keyframes popIn {
          0%, 35% { transform: scale(0); opacity: 0; }
          45% { transform: scale(1.1); opacity: 1; }
          50% { transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.5); }
        }

        @keyframes driveTowardsUser {
          0%, 70% { transform: scale(1) translateY(0); opacity: 1; }
          /* Zoom effect towards camera: Huge scale up to simulate getting very close */
          95% { opacity: 1; }
          100% { transform: scale(5) translateY(40px); opacity: 0; }
        }

        @keyframes wheelBounce {
          0%, 40% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
          55% { transform: scaleX(1.1) translateY(2px); }
          60% { transform: scaleX(1) translateY(0); }
        }

        /* SIREN ANIMATION */
        @keyframes sirenStrobe {
          0%, 100% { fill: #b45309; filter: drop-shadow(0 0 0px rgba(245, 158, 11, 0)); opacity: 0.8; }
          50% { fill: #fcd34d; filter: drop-shadow(0 0 15px rgba(245, 158, 11, 1)); opacity: 1; }
        }

        /* Applying Animations */
        #wholeCar {
          animation: driveTowardsUser 6s ease-in-out infinite;
          transform-origin: center bottom;
        }

        #bumper {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          animation: drawLine 6s ease-in-out infinite;
        }

        #chassis-group {
          animation: assembleBody 6s ease-in-out infinite;
        }

        #headlightL, #headlightR {
          transform-box: fill-box;
          transform-origin: center;
          animation: popIn 6s ease-in-out infinite;
        }

        #mirrorL, #mirrorR {
          transform-box: fill-box;
          transform-origin: bottom;
          animation: popIn 6s ease-in-out infinite;
          animation-delay: 0.2s; /* Mirrors pop slightly later */
        }

        #tyreL, #tyreR {
          animation: wheelBounce 6s ease-in-out infinite;
        }

        #siren-bulb {
          animation: sirenStrobe 0.4s steps(2, start) infinite;
        }
      `}</style>

      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="250 160 300 320" 
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          <clipPath id="bonnetMask">
            <rect x="290" y="282.333" fill="#691BE2" width="239.833" height="74.914"/>    
          </clipPath>
          <clipPath id="tyreMask">
            <rect x="290" y="383.333" fill="#691BE2" width="239.833" height="74.914"/>
          </clipPath>
        </defs>
        
        <g id="wholeCar">
          <g clipPath="url(#tyreMask)">
            {/* Tires: Dark Blue/Grey (#1e293b) */}
            <path id="tyreL" fill="#1e293b" className="dark:fill-slate-400" d="M345.763,410.936h-29.098c-2.2,0-4-1.8-4-4v-40.935c0-2.2,1.8-4,4-4h29.098c2.2,0,4,1.8,4,4	v40.935C349.763,409.136,347.963,410.936,345.763,410.936z"/>
            <path id="tyreR" fill="#1e293b" className="dark:fill-slate-400" d="M502.303,410.936h-29.098c-2.2,0-4-1.8-4-4v-40.935c0-2.2,1.8-4,4-4h29.098c2.2,0,4,1.8,4,4	v40.935C506.303,409.136,504.503,410.936,502.303,410.936z"/>  
          </g>
          
          <g id="chassis-group">   
            {/* Bumper Line: Electric Blue (#2563eb) */}
            <line id="bumper" fill="none" stroke="#2563eb" className="dark:stroke-brand-400" strokeWidth="26" strokeLinecap="round" strokeMiterlimit="10" x1="290" y1="370" x2="528" y2="370"/>
            
            <g clipPath="url(#bonnetMask)">
              {/* Bonnet: Off-white/Light Blue (#eff6ff) */}
              <path id="bonnet" fill="#eff6ff" className="dark:fill-slate-200" d="M378,361.167v-47.833c0-17.05,13.95-31,31-31h1.833c17.05,0,31,13.95,31,31v47.833H290v-47.833c0-17.05,13.95-31,31-31h177.833c17.05,0,31,13.95,31,31v47.833"/>
            </g>
            
            {/* Frame/Windshield: Light Blue Fill (#dbeafe) with Blue Stroke (#2563eb) */}
            <polygon id="frame" fill="#dbeafe" fillOpacity="0.5" stroke="#2563eb" className="dark:fill-brand-900 dark:fill-opacity-50 dark:stroke-brand-400" strokeWidth="16" strokeMiterlimit="10" points="496.429,282.333 323.467,282.333 340.467,202.194 483.429,202.194 "/>
            
            {/* EMERGENCY SIREN (New Addition) */}
            <g id="siren-group" transform="translate(0, -5)">
               {/* Siren Base */}
               <rect x="396" y="202" width="32" height="6" rx="2" fill="#1e293b" />
               {/* Siren Light (The Bulb) */}
               <path id="siren-bulb" d="M400,202 L400,192 Q412,185 424,192 L424,202 Z" fill="#f59e0b" />
               {/* Reflection line on siren */}
               <path d="M404,194 Q412,190 420,194" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
            </g>

            {/* Headlights: Bright Blue (#3b82f6) */}
            <circle id="headlightL" fill="#3b82f6" className="dark:fill-brand-500" cx="331.714" cy="326.858" r="17.5"/>
            <circle id="headlightR" fill="#3b82f6" className="dark:fill-brand-500" cx="487.754" cy="326.858" r="17.5"/>  
            
            {/* Mirrors: Off-white (#eff6ff) with Blue Stroke */}
            <rect id="mirrorR" x="514.21" y="262.76" width="28.59" height="20.16" rx="6" ry="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" className="dark:fill-slate-200 dark:stroke-transparent"/>
            <rect id="mirrorL" x="276.94" y="262.76" width="28.59" height="20.16" rx="6" ry="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" className="dark:fill-slate-200 dark:stroke-transparent"/>      
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedCar;