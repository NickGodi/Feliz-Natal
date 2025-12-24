
import React from 'react';

const ChristmasTrees: React.FC = () => {
  const Tree = ({ className }: { className: string }) => (
    <div className={`fixed bottom-0 z-20 pointer-events-none opacity-40 transition-opacity duration-1000 ${className}`}>
      <svg width="200" height="300" viewBox="0 0 100 150">
        {/* Layered Tree Layers */}
        <path d="M50,10 L85,60 L15,60 Z" fill="#064e3b" />
        <path d="M50,40 L90,90 L10,90 Z" fill="#065f46" />
        <path d="M50,70 L100,130 L0,130 Z" fill="#047857" />
        {/* Trunk */}
        <rect x="42" y="130" width="16" height="20" fill="#451a03" />
        {/* Star */}
        <path d="M50,2 L53,8 L59,9 L55,13 L56,19 L50,16 L44,19 L45,13 L41,9 L47,8 Z" fill="#fbbf24" />
        {/* Ornaments */}
        <circle cx="35" cy="110" r="3" fill="#ef4444" />
        <circle cx="65" cy="100" r="3" fill="#facc15" />
        <circle cx="50" cy="80" r="3" fill="#3b82f6" />
        <circle cx="40" cy="55" r="2.5" fill="#ef4444" />
      </svg>
    </div>
  );

  return (
    <>
      <Tree className="left-[-40px] md:left-0" />
      <Tree className="right-[-40px] md:right-0 transform scale-x-[-1]" />
    </>
  );
};

export default ChristmasTrees;
