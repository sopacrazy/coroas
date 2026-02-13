
import React from 'react';
import { ChevronDown, Moon, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.9)), url("https://picsum.photos/id/116/1920/1080?grayscale&blur=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative stars / particles effect simulated via overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex justify-center mb-6">
          <Moon size={48} className="text-yellow-600/50 animate-pulse" />
        </div>

        <h1 className="font-cinzel text-5xl md:text-8xl mb-6 tracking-tighter text-white font-bold leading-tight">
          COROAS DAS <span className="text-yellow-600 gold-glow">SOMBRAS</span>
        </h1>

        <p className="font-lora italic text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          "A noite não escolhe por amor… ela escolhe por necessidade."
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/Gt7BpUnOEMk0zvNf2EexGa?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-900/30 hover:bg-green-800/50 border border-green-600/50 text-green-400 font-cinzel tracking-widest transition-all w-full md:w-auto uppercase text-sm flex items-center justify-center gap-2 group"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            Participar do RPG
          </a>
          <button
            onClick={() => document.getElementById('sinopse')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-yellow-700/20 hover:bg-yellow-700/40 border border-yellow-600/50 text-yellow-500 font-cinzel tracking-widest transition-all w-full md:w-auto uppercase text-sm"
          >
            Descobrir Prythian
          </button>
          <button
            onClick={() => document.getElementById('jogabilidade')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/50 text-white font-cinzel tracking-widest transition-all w-full md:w-auto uppercase text-sm"
          >
            Regras de Jogo
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
