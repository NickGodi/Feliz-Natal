
import React from 'react';

const ChristmasLights: React.FC = () => {
  const colors = ['bg-red-500', 'bg-yellow-400', 'bg-blue-500', 'bg-green-500', 'bg-pink-500'];
  
  return (
    <div className="fixed top-0 left-0 w-full flex justify-around pointer-events-none z-20">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-px h-6 bg-gray-600"></div>
          <div 
            className={`w-3 h-3 rounded-full shadow-lg ${colors[i % colors.length]} animate-pulse`}
            style={{ 
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 10px 2px currentColor`
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ChristmasLights;
