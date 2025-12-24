
import React, { useState, useEffect } from 'react';
import Snowfall from './components/Snowfall';
import ChristmasLights from './components/ChristmasLights';
import Santa from './components/Santa';
import ChristmasTrees from './components/ChristmasTrees';
import { getChristmasMessage } from './services/geminiService';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchMessage = async () => {
      const msg = await getChristmasMessage();
      setMessage(msg);
      // Artificial delay for smooth entry
      setTimeout(() => setIsLoaded(true), 500);
    };

    fetchMessage();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#050b18] via-[#0f172a] to-[#050b18] text-white overflow-hidden">
      {/* Background & Decorative Elements */}
      <Snowfall />
      <ChristmasLights />
      <Santa />
      <ChristmasTrees />
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-green-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center z-30 max-w-2xl text-center px-4">
        <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <h1 className="font-christmas text-7xl md:text-9xl text-red-500 mb-8 glow-text animate-float select-none">
            Feliz Natal
          </h1>
          
          <div className="relative p-1">
             {/* Subtle Decorative Golden Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-700/30 via-yellow-200/20 to-yellow-700/30 rounded-2xl animate-pulse"></div>
            
            <div className="relative bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/5 shadow-2xl">
              <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-gray-100 drop-shadow-sm">
                {message || 'Carregando sua mensagem de Natal...'}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Floor shadow */}
      <div className="fixed bottom-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0"></div>
    </div>
  );
};

export default App;
