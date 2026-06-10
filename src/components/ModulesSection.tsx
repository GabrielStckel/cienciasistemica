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
    <section className="section-muted py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow="Cronograma 2026"
          label="Dez módulos, dez encontros"
          subtitle="Uma jornada coletiva de dez meses, presencial, com turmas reduzidas."
        />
        <ol className="relative border-l border-border ml-2 md:ml-4 mt-10">
          {visible.map((m) => (
            <li key={m.n} className="pl-6 md:pl-8 pb-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg text-foreground font-semibold tracking-tight">
                  <span className="text-accent mr-3">{m.n}.</span>
                  {m.title}
                </h3>
                <span className="hidden md:inline text-xs font-medium text-muted-foreground font-body tabular-nums whitespace-nowrap">
                  {m.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed" style={{ textAlign: "left" }}>
                {m.desc}
              </p>
              <p className="md:hidden mt-2 text-xs font-medium text-muted-foreground font-body tabular-nums">
                {m.date}
              </p>
            </li>
          ))}
        </ol>
        {!showAll && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll(true)}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-accent hover:text-accent/80 transition-colors py-2 px-4"
            >
              Ver todos os módulos →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModulesSection;