import { useState } from "react";
import SectionTitle from "./SectionTitle";

const modules = [
  { n: "I", title: "A ciência sistêmica", date: "29–30 Ago 2026", desc: "Introdução ao pensamento sistêmico." },
  { n: "II", title: "Ciclos da vida e postura fenomenológica", date: "12–13 Set 2026", desc: "As Leis Sistêmicas: pertencimento." },
  { n: "III", title: "As Leis Sistêmicas", date: "10–11 Out 2026", desc: "Ordem e equilíbrio." },
  { n: "IV", title: "O amor em movimento", date: "14–15 Nov 2026", desc: "Pais e filhos." },
  { n: "V", title: "O amor em movimento", date: "19–20 Dez 2026", desc: "O amor de casal." },
  { n: "VI", title: "Saúde e sexualidade", date: "30–31 Jan 2027", desc: "O corpo como campo sistêmico." },
  { n: "VII", title: "A vida no mundo", date: "27–28 Fev 2027", desc: "Função sistêmica, propósito e sentido da vida." },
  { n: "VIII", title: "Espiritualidade sistêmica", date: "27–28 Mar 2027", desc: "As ordens da ajuda." },
  { n: "IX", title: "A prática das constelações", date: "24–25 Abr 2027", desc: "Vivência integrada." },
  { n: "X", title: "A prática das constelações", date: "29–30 Mai 2027", desc: "Encerramento e integração." },
];

const ModulesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? modules : modules.slice(0, 5);

  return (
    <section className="section-muted section-block">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow="Cronograma 2026"
          label="Dez módulos, dez encontros"
          subtitle="Uma jornada coletiva de dez meses, presencial, com turmas reduzidas."
        />
        <ol className="relative border-l border-border ml-2 md:ml-4 mt-8 md:mt-10">
          {visible.map((m) => (
            <li key={m.n} className="pl-5 md:pl-8 pb-7 md:pb-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-[17px] md:text-lg text-foreground font-semibold tracking-tight">
                  <span className="text-accent mr-2 md:mr-3">{m.n}.</span>
                  {m.title}
                </h3>
                <span className="hidden md:inline text-xs font-medium text-muted-foreground font-body tabular-nums whitespace-nowrap">
                  {m.date}
                </span>
              </div>
              <p className="text-[15px] md:text-sm text-muted-foreground font-body font-normal md:font-light leading-[1.6] md:leading-relaxed text-justify md:text-left">
                {m.desc}
              </p>
              <p className="md:hidden mt-1.5 text-[11px] font-medium text-muted-foreground font-body tabular-nums">
                {m.date}
              </p>
            </li>
          ))}
        </ol>
        {!showAll && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-accent border border-accent/40 rounded-full py-3 px-6 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              Ver todos os módulos <span aria-hidden>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModulesSection;