
import React from 'react';
import { Dices, Users, Sword, ShieldAlert } from 'lucide-react';

const Gameplay: React.FC = () => {
  const features = [
    {
      icon: <Dices className="text-yellow-500" size={32} />,
      title: "Sistema de Atributos",
      description: "Utilizamos um sistema customizado baseado em D20 para testes de resistência e magia, mas o foco está na narrativa e diplomacia."
    },
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: "Diplomacia das Cortes",
      description: "Suas palavras podem ser mais afiadas que espadas. Alianças políticas com outras cortes definem o rumo da história."
    },
    {
      icon: <Sword className="text-red-500" size={32} />,
      title: "O Preço da Magia",
      description: "Toda magia de Prythian tem um custo. Usar seus poderes instáveis pode atrair a atenção de seres antigos ou exaurir seu espírito."
    },
    {
      icon: <ShieldAlert className="text-purple-400" size={32} />,
      title: "Intriga e Segredos",
      description: "Cada personagem começa com um segredo obscuro. Se ele for revelado durante a Seleção, as consequências podem ser fatais para sua linhagem."
    }
  ];

  return (
    <section id="jogabilidade" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-widest text-white uppercase mb-4">Como Funciona o Jogo</h2>
          <div className="h-1 w-24 bg-yellow-600 mx-auto"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto font-inter">
            Coroas das Sombras é um RPG de interpretação pesada, focado na "Seleção" — um evento político e social onde cada ação molda o mundo de Prythian.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-lg hover:border-yellow-600/30 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="font-cinzel text-lg text-white mb-4 tracking-wider">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-yellow-900/20 to-transparent border border-yellow-700/20">
          <h4 className="font-cinzel text-white text-xl mb-4">Breve História do Mundo</h4>
          <p className="text-slate-300 font-lora italic leading-relaxed">
            Há milênios, as Sete Cortes de Prythian vivem sob a Muralha. Mas após a queda de Hybern e os novos tratados, as tensões subiram. O céu da Corte Noturna mudou; as estrelas agora piscam em códigos que apenas os antigos conseguem decifrar. A Seleção não é uma festa de debutantes — é uma manobra desesperada de Rhysand e Feyre para manter as fronteiras intactas e os segredos enterrados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
