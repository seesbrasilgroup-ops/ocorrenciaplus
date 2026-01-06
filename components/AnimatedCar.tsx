
import React from 'react';

const AnimatedCar: React.FC = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center bg-transparent perspective-1000">
      <style>{`
        /* The entire sequence duration */
        :root {
            --anim-duration: 4s;
        }

        /* 1. Drive Off Animation (The Container) */
        @keyframes drive-off {
            0%, 60% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            80% {
                transform: translateY(100px) scale(1.5); /* Anticipation */
            }
            100% {
                transform: translateY(500px) scale(4); /* Zoom towards camera/bottom */
                opacity: 0;
            }
        }

        /* 2. Assembly Animations */
        @keyframes assemble-chassis {
            0% { transform: scale(0); opacity: 0; }
            15% { transform: scale(1.1); opacity: 1; }
            20% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes assemble-wheels {
            0%, 20% { transform: translateX(50px); opacity: 0; }
            30% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes assemble-cabin {
            0%, 30% { transform: translateY(-50px); opacity: 0; }
            40% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(0); opacity: 1; }
        }

        .car-container {
            animation: drive-off 4s cubic-bezier(0.7, 0, 0.3, 1) infinite;
            transform-origin: center center;
        }

        .anim-chassis { animation: assemble-chassis 4s ease-out infinite; }
        .anim-wheels-left { animation: assemble-wheels 4s ease-out infinite; }
        .anim-wheels-right { animation: assemble-wheels 4s ease-out infinite reverse; } 
        .anim-cabin { animation: assemble-cabin 4s ease-out infinite; }

      `}</style>

      <div className="car-container relative w-48 h-72">
        <svg viewBox="0 0 200 300" className="w-full h-full overflow-visible">
             {/* Wheels */}
             <g className="anim-wheels-left">
                <rect x="10" y="50" width="30" height="50" rx="10" fill="#1e293b" /> {/* Front Left */}
                <rect x="10" y="210" width="30" height="50" rx="10" fill="#1e293b" /> {/* Rear Left */}
             </g>
             <g className="anim-wheels-right" style={{transformOrigin: 'center'}}>
                 <style>{`
                    @keyframes assemble-wheels-right {
                        0%, 20% { transform: translateX(-50px); opacity: 0; }
                        30% { transform: translateX(0); opacity: 1; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    .anim-wheels-right { animation: assemble-wheels-right 4s ease-out infinite; }
                 `}</style>
                <rect x="160" y="50" width="30" height="50" rx="10" fill="#1e293b" /> {/* Front Right */}
                <rect x="160" y="210" width="30" height="50" rx="10" fill="#1e293b" /> {/* Rear Right */}
             </g>

             {/* Chassis */}
             <g className="anim-chassis" style={{transformOrigin: 'center'}}>
                <path 
                    d="M 40 20 
                       L 160 20 
                       Q 180 20 180 60 
                       L 180 240 
                       Q 180 280 160 280 
                       L 40 280 
                       Q 20 280 20 240 
                       L 20 60 
                       Q 20 20 40 20 Z" 
                    fill="#2563eb" 
                />
                {/* Hood details */}
                <path d="M 30 220 Q 100 210 170 220" stroke="rgba(0,0,0,0.1)" strokeWidth="3" fill="none" />
             </g>

             {/* Cabin/Glass */}
             <g className="anim-cabin" style={{transformOrigin: 'center'}}>
                {/* Windshield */}
                <path d="M 35 180 L 165 180 L 155 130 L 45 130 Z" fill="#1e293b" />
                <path d="M 38 178 L 162 178 L 153 132 L 47 132 Z" fill="#60a5fa" />
                
                {/* Roof */}
                <rect x="40" y="80" width="120" height="50" rx="10" fill="#1d4ed8" />
                
                {/* Rear Window */}
                <path d="M 45 80 L 155 80 L 160 60 L 40 60 Z" fill="#1e293b" />
                <path d="M 48 78 L 152 78 L 156 62 L 44 62 Z" fill="#60a5fa" />
             </g>

             {/* Lights */}
             <g className="anim-chassis">
                 {/* Headlights (Yellow) - facing bottom */}
                 <rect x="30" y="260" width="30" height="10" rx="2" fill="#fef08a" />
                 <rect x="140" y="260" width="30" height="10" rx="2" fill="#fef08a" />
                 
                 {/* Tail lights (Red) - Top */}
                 <rect x="30" y="20" width="30" height="6" rx="2" fill="#ef4444" />
                 <rect x="140" y="20" width="30" height="6" rx="2" fill="#ef4444" />
             </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedCar;
