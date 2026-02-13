
import React from 'react';
import { Crown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <Crown className="text-yellow-600" size={24} />
          <span className="font-cinzel tracking-widest text-white/80">Coroas das Sombras</span>
        </div>
        
        <p className="text-slate-500 text-sm text-center font-inter mb-8">
          Inspirado no universo de ACOTAR. Todos os direitos reservados aos respectivos criadores.
          <br />
          Desenvolvido para amantes de RPG e fantasia épica.
        </p>

        <div className="flex gap-8 mb-8">
          <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors text-xs uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors text-xs uppercase tracking-widest">Discord</a>
          <a href="#" className="text-slate-500 hover:text-yellow-500 transition-colors text-xs uppercase tracking-widest">Wiki</a>
        </div>

        <div className="text-slate-600 text-[10px] uppercase tracking-tighter">
          &copy; {new Date().getFullYear()} Prythian Chronicles. A noite escolhe.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
