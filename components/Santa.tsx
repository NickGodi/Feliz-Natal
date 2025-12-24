
import React from 'react';

const Santa: React.FC = () => {
  return (
    <div className="fixed top-20 left-0 w-full pointer-events-none z-10 overflow-hidden h-32">
      <div 
        className="absolute flex items-center gap-2 whitespace-nowrap opacity-40 filter brightness-150"
        style={{
          animation: 'fly-across 20s linear infinite',
          left: '-200px'
        }}
      >
        {/* Reindeer and Sleigh SVG */}
        <svg width="150" height="60" viewBox="0 0 24 24" fill="white">
          <path d="M22,15.5V17H19V15.5C19,14.67 18.33,14 17.5,14H16.5C15.67,14 15,14.67 15,15.5V17H4.5A2.5,2.5 0 0,1 2,14.5V14H3V14.5A1.5,1.5 0 0,0 4.5,16H15V15.5C15,14.67 15.67,14 16.5,14H17.5C18.33,14 19,14.67 19,15.5M16.5,10.5C16.5,9.67 17.17,9 18,9H19V10.5C19,11.33 18.33,12 17.5,12H16.5V10.5M12,12H14V14H12V12M9,12H11V14H9V12M6,12H8V14H6V12Z" />
          <text x="0" y="20" fontSize="12" fill="white" className="font-christmas">Ho Ho Ho!</text>
        </svg>
      </div>
      <style>{`
        @keyframes fly-across {
          0% { transform: translateX(-200px) translateY(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateX(calc(100vw + 200px)) translateY(-20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Santa;
