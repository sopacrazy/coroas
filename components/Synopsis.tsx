
import React from 'react';
import { ScrollText } from 'lucide-react';

const Synopsis: React.FC = () => {
  return (
    <section id="sinopse" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12 border-b border-yellow-600/30 pb-4">
          <ScrollText className="text-yellow-600" />
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-widest text-white uppercase">A Sinopse</h2>
        </div>

        <div className="space-y-8 font-lora text-lg md:text-xl text-slate-300 leading-relaxed text-justify">
          <p>
            Em Prythian, o equilíbrio entre as Cortes sempre foi sustentado por pactos antigos, magia ancestral e coroas manchadas de segredos. Mas quando a noite começa a reagir de forma instável e profecias esquecidas voltam a sussurrar entre as estrelas, torna-se claro que a paz está prestes a ruir.
          </p>
          
          <p>
            Para evitar uma nova guerra, a Corte Noturna convoca algo jamais visto: <strong className="text-yellow-500/80">a Seleção das Cortes</strong>.
          </p>

          <p>
            Herdeiros de diferentes territórios são reunidos sob o mesmo céu estrelado, não apenas para disputar alianças e laços de poder, mas para decidir o futuro de Prythian. Cada um carrega ambições ocultas, deveres impostos e verdades que podem destruir reinos inteiros.
          </p>

          <div className="relative py-12 px-8 border-l-2 border-yellow-700/50 my-12 bg-white/5 italic">
            <p className="mb-4">Por trás de bailes, provas e acordos políticos, a magia antiga observa.</p>
            <p className="mb-4">Laços surgem sem permissão.</p>
            <p className="mb-4">Traições caminham nas sombras.</p>
            <p>E nem toda coroa foi feita para ser usada.</p>
          </div>

          <p>
            Enquanto a Seleção avança, uma verdade se torna inevitável: A noite não escolhe por amor… ela escolhe por necessidade.
          </p>

          <p className="text-center font-cinzel text-2xl md:text-3xl text-white mt-12 py-8 border-t border-b border-white/5">
            Em <span className="text-yellow-600">Coroas das Sombras</span>, o destino não pertence aos mais fortes — mas àqueles dispostos a pagar o preço da escuridão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;
