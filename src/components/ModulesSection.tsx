import SectionTitle from "./SectionTitle";

const modules = [
  { n: "I", title: "A ciência sistêmica", date: "21 e 22 / 03", desc: "Introdução ao pensamento sistêmico." },
  { n: "II", title: "Ciclos da vida e postura fenomenológica", date: "25 e 26 / 04", desc: "As Leis Sistêmicas: pertencimento." },
  { n: "III", title: "As Leis Sistêmicas", date: "30 e 31 / 05", desc: "Ordem e equilíbrio." },
  { n: "IV", title: "O amor em movimento", date: "27 e 28 / 06", desc: "Pais e filhos." },
  { n: "V", title: "O amor em movimento", date: "25 e 26 / 07", desc: "O amor de casal." },
  { n: "VI", title: "Saúde e sexualidade", date: "22 e 23 / 08", desc: "O corpo como campo sistêmico." },
  { n: "VII", title: "A vida no mundo", date: "26 e 27 / 09", desc: "Função sistêmica, propósito e sentido da vida." },
  { n: "VIII", title: "Espiritualidade sistêmica", date: "24 e 25 / 10", desc: "As ordens da ajuda." },
  { n: "IX", title: "A prática das constelações", date: "28 e 29 / 11", desc: "Vivência integrada." },
  { n: "X", title: "A prática das constelações", date: "12 e 13 / 12", desc: "Encerramento e integração." },
];

const ModulesSection = () => (
  <section className="section-muted py-16 md:py-24">
    <div className="container max-w-3xl">
      <SectionTitle
        eyebrow="Cronograma 2026"
        label="Dez módulos, dez encontros"
        subtitle="Uma jornada coletiva de dez meses, presencial, com turmas reduzidas."
      />
      <ol className="relative border-l border-border ml-2 md:ml-4 mt-10">
        {modules.map((m) => (
          <li key={m.n} className="pl-6 md:pl-8 pb-8 relative">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-lg text-foreground font-semibold tracking-tight">
                <span className="text-accent mr-3">{m.n}.</span>
                {m.title}
              </h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">{m.date}</span>
            </div>
            <p className="text-sm text-muted-foreground font-body font-light leading-relaxed" style={{ textAlign: "left" }}>
              {m.desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ModulesSection;