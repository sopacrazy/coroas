
import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Snowflake, 
  Sun, 
  Flower2, 
  Moon, 
  ShieldAlert,
  Stars,
  Waves,
  Zap,
  Skull
} from 'lucide-react';

const HistorySection: React.FC = () => {
  const courts = [
    {
      name: "Corte Noturna",
      icon: <Moon className="text-blue-400" />,
      desc: "Sombras, estrelas e segredos. O herdeiro da Noite enxerga além do que é dito.",
      gifts: ["Manipulação das sombras", "Leitura de intenções ocultas", "Conhecimento de segredos antigos"],
      warning: "Dizem que quem governa a noite… governa tudo o que acontece nas sombras."
    },
    {
      name: "Corte Solar",
      icon: <Sun className="text-yellow-400" />,
      desc: "Diplomacia, brilho e ambição. A luz pode aquecer… ou incinerar.",
      gifts: ["Magia luminosa", "Persuasão poderosa", "Influência política refinada"],
      warning: "A Corte Solar não esquece traições — apenas espera o momento certo para iluminar a verdade."
    },
    {
      name: "Corte Primaveril",
      icon: <Flower2 className="text-pink-400" />,
      desc: "Beleza, ilusão e decadência. Nada floresce sem raízes profundas.",
      gifts: ["Manipulação de ilusões", "Encanto emocional", "Controle sobre a natureza"],
      warning: "A Primavera sorri antes de envenenar."
    },
    {
      name: "Corte Invernal",
      icon: <Snowflake className="text-cyan-200" />,
      desc: "Honra, frieza e tradições rígidas. O gelo preserva… e também destrói.",
      gifts: ["Manipulação de gelo", "Controle emocional extremo", "Disciplina militar"],
      warning: "A Corte Invernal raramente perdoa — e nunca esquece."
    },
    {
      name: "Corte Escarlate",
      icon: <Flame className="text-red-500" />,
      desc: "Fogo, sangue e pactos proibidos. Seu herdeiro caminha entre salvação e ruína.",
      gifts: ["Manipulação de fogo", "Pactos mágicos antigos", "Intensidade emocional perigosa"],
      warning: "A Escarlate nunca joga limpo — joga para vencer."
    }
  ];

  return (
    <section id="historia" className="py-24 px-6 relative overflow-hidden bg-[#020617]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-900/10 blur-[180px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles size={48} className="text-yellow-600/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Stars size={24} className="text-yellow-500 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-6 tracking-[0.2em] uppercase">Crônicas de Prythian</h2>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl mb-24 border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 glass-panel rounded-full border-yellow-600/30">
            <span className="font-cinzel text-xs tracking-[0.3em] text-yellow-500 uppercase">O Equilíbrio Frágil</span>
          </div>
          <div className="font-lora text-lg md:text-xl text-slate-300 leading-relaxed space-y-6">
            <p>
              Durante séculos, Prythian manteve um equilíbrio frágil entre suas Cortes. Tratados antigos, selados com sangue feérico e magia primordial, impediram novas guerras — mas nunca curaram as feridas deixadas por elas.
            </p>
            <p className="border-l-4 border-yellow-600/40 pl-6 italic text-slate-400">
              Agora, esse equilíbrio começa a ruir. A magia antiga, que corre pelas montanhas da Corte Noturna, desperta de forma instável. As estrelas já não brilham como antes, e os oráculos sussurram sobre um futuro onde o poder da noite pode cair… ou se tornar absoluto.
            </p>
            <p>
              É nesse cenário que surge a <span className="text-white font-bold">Herdeira da Corte Noturna</span>. Criada para governar, moldada pela escuridão e pelas estrelas, ela carrega em si um poder que ainda não compreende por completo. Seu destino não está apenas ligado ao trono — mas ao futuro de todas as Cortes.
            </p>
          </div>
        </div>

        {/* The Selection Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
             <div className="h-px flex-1 bg-white/10"></div>
             <h3 className="font-cinzel text-2xl md:text-3xl text-yellow-500 tracking-widest uppercase flex items-center gap-4">
               🌌 A Seleção
             </h3>
             <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="font-lora text-slate-300 text-lg space-y-6">
              <p>
                A Seleção reúne jovens de linhagens nobres, sangues antigos e poderes raros. Cada Corte envia seus herdeiros e representantes mais promissores para a Corte Noturna, onde residirão sob o mesmo teto durante todo o processo.
              </p>
              <p>
                Mas esta não é uma disputa comum. A Herdeira não busca apenas um consorte; ela busca alianças, lealdade e talvez algo mais perigoso: <span className="text-yellow-500 italic">verdadeiros laços mágicos</span>.
              </p>
              <div className="p-6 bg-yellow-900/10 border border-yellow-700/20 rounded-xl italic text-slate-400 text-sm">
                "Rejeitar um laço pode trazer consequências irreversíveis. Aceitá-lo pode mudar o destino de Prythian."
              </div>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-white/10 bg-white/5 h-full">
              <h4 className="font-cinzel text-white mb-6 tracking-widest text-sm border-b border-white/10 pb-4">OBJETIVOS DOS HERDEIROS</h4>
              <ul className="space-y-6 font-cinzel text-xs md:text-sm tracking-[0.2em] text-slate-400">
                <li className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full group-hover:scale-150 transition-transform"></div> 
                  ALGUNS DESEJAM PODER
                </li>
                <li className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full group-hover:scale-150 transition-transform"></div> 
                  OUTROS BUSCAM REDENÇÃO
                </li>
                <li className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full group-hover:scale-150 transition-transform"></div> 
                  HÁ QUEM QUEIRA APENAS SOBREVIVER
                </li>
                <li className="flex items-center gap-4 group cursor-default">
                  <div className="w-2 h-2 bg-red-800 rounded-full group-hover:shadow-[0_0_10px_rgba(153,27,27,0.8)] transition-all"></div> 
                  ENVIADOS PARA ESPIONAR OU DESTRUIR
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Courts Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-cinzel text-3xl text-white mb-4 tracking-[0.3em] uppercase">👑 OS HERDEIROS DAS CORTES</h3>
            <p className="text-slate-500 font-lora italic">"Cada escolha ecoa além das muralhas. Nenhuma coroa é leve."</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map((court, idx) => (
              <div key={idx} className="flex flex-col glass-panel rounded-2xl border-white/5 hover:border-yellow-600/30 transition-all duration-700 group overflow-hidden">
                <div className="p-8 pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-yellow-900/20 transition-colors">
                      {court.icon}
                    </div>
                    <div className="text-[10px] font-cinzel tracking-widest text-slate-600 uppercase">Prythian Heritage</div>
                  </div>
                  <h4 className="font-cinzel text-xl text-white mb-4 tracking-wider group-hover:text-yellow-500 transition-colors">{court.name}</h4>
                  <p className="font-lora text-sm text-slate-400 mb-6 italic leading-relaxed">
                    "{court.desc}"
                  </p>
                </div>
                
                <div className="px-8 py-6 bg-white/[0.02] border-t border-white/5 flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap size={14} className="text-yellow-600" />
                    <span className="text-[10px] font-cinzel tracking-widest text-yellow-600 uppercase">Dom Natural</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {court.gifts.map((gift, gIdx) => (
                      <li key={gIdx} className="text-xs text-slate-300 font-inter flex items-center gap-2">
                        <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                        {gift}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex gap-3">
                      <ShieldAlert size={16} className="text-red-900/50 shrink-0" />
                      <p className="text-[11px] font-lora text-slate-500 italic leading-snug">
                        {court.warning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shadows and Prophecy */}
        <div className="relative mb-32">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none"></div>
           <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <h4 className="font-cinzel text-2xl text-white tracking-widest flex items-center gap-3">
                  <Skull className="text-red-900" /> Sombras Sob a Montanha
                </h4>
                <div className="font-lora text-slate-300 text-lg space-y-4">
                  <p>Enquanto bailes e provas acontecem, algo antigo desperta sob a montanha da Corte Noturna. Profecias esquecidas voltam à tona e a Herdeira percebe que nem todos vieram por escolha própria.</p>
                  <p className="italic text-slate-500">A magia reage à presença dos herdeiros, como se o próprio solo de Prythian estivesse julgando cada passo dado nos salões estrelados.</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-12 glass-panel rounded-[40px] border-double border-4 border-white/5">
                 <div className="text-center">
                    <Waves className="text-blue-900/40 mb-6 mx-auto" size={48} />
                    <p className="font-cinzel text-slate-400 text-sm tracking-[0.4em] uppercase mb-4">O Veredito Final</p>
                    <p className="font-lora italic text-white text-xl">
                      "Quando a noite escolher seu par, uma Corte cairá… ou todas se erguerão."
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Final Branding / CTA */}
        <div className="text-center pt-20 border-t border-white/5">
           <div className="inline-flex items-center gap-4 px-8 py-3 glass-panel rounded-full border-yellow-600/20 mb-12">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
             <span className="font-cinzel text-xs tracking-[0.5em] text-white/60">PRYTHIAN • CINCO CORTES • UMA SELEÇÃO</span>
             <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
