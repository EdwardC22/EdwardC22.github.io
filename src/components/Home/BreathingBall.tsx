import React from "react";

const BreathingBall: React.FC = () => {
  return (
    <div className="breathing-ball-wrapper flex items-center justify-end h-full w-full pr-0" style={{paddingRight: 0}}>
      <div className="relative" style={{marginRight: '-100px'}}>
        <div className="breathing-ball"></div>
        <div className="breathing-ball-wave"></div>
      </div>
      <style>{`
        .breathing-ball {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle at 60% 40%, #a5b4fc 60%, #6366f1 100%);
          box-shadow: 0 0 120px 40px #818cf8, 0 0 220px 80px #6366f1;
          animation: breathing 2.8s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }
        .breathing-ball-wave {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 420px;
          height: 420px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.32) 55%, rgba(165,180,252,0.18) 80%, rgba(99,102,241,0.10) 100%);
          box-shadow: 0 0 60px 30px rgba(99,102,241,0.25), 0 0 120px 60px rgba(99,102,241,0.12);
          z-index: 1;
          pointer-events: none;
          animation: wave-breathing 2.8s ease-in-out infinite;
        }
        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 120px 40px #818cf8, 0 0 220px 80px #6366f1;
            opacity: 0.85;
          }
          50% {
            transform: scale(1.18);
            box-shadow: 0 0 180px 80px #a5b4fc, 0 0 320px 120px #6366f1;
            opacity: 1;
          }
        }
        @keyframes wave-breathing {
          0%, 100% {
            opacity: 0.85;
            filter: blur(0px);
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.35;
            filter: blur(6px);
            transform: translate(-50%, -50%) scale(1.32);
          }
        }
      `}</style>
    </div>
  );
};

export default BreathingBall;
