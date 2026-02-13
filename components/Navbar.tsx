
import React, { useState } from 'react';
import { Menu, X, Crown, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sinopse', label: 'Sinopse' },
    { id: 'jogabilidade', label: 'Jogabilidade' },
    { id: 'historia', label: 'História' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo('inicio')}
        >
          <Crown className="text-yellow-500 group-hover:scale-110 transition-transform" />
          <span className="font-cinzel text-xl tracking-widest text-white/90 uppercase">
            Coroas das Sombras
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-inter text-sm tracking-widest uppercase transition-all hover:text-yellow-500 ${activeSection === link.id ? 'text-yellow-500 font-bold' : 'text-slate-400'
                }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://chat.whatsapp.com/Gt7BpUnOEMk0zvNf2EexGa?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-green-500/30 text-green-400 hover:bg-green-900/20 rounded-sm font-cinzel text-xs tracking-widest uppercase transition-all"
          >
            <MessageCircle size={14} />
            Participar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 glass-panel z-40 flex flex-col items-center justify-center gap-8 py-20">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-2xl font-cinzel tracking-widest uppercase ${activeSection === link.id ? 'text-yellow-500' : 'text-slate-300'
                }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://chat.whatsapp.com/Gt7BpUnOEMk0zvNf2EexGa?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-cinzel tracking-widest uppercase text-green-400 flex items-center gap-3 mt-4"
          >
            <MessageCircle size={24} />
            Participar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
