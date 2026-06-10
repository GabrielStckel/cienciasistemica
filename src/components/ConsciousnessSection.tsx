import SectionTitle from "./SectionTitle";

const layers = [
  {
    n: "01",
    title: "Fonte",
    body: "A origem — o campo do qual tudo emerge e ao qual tudo retorna.",
  },
  {
    n: "02",
    title: "Inconsciente coletivo",
    body: "A memória compartilhada da humanidade e dos sistemas a que pertencemos.",
  },
  {
    n: "03",
    title: "Consciência familiar",
    body: "As lealdades, os pertencimentos e as dinâmicas herdadas do sistema familiar.",
  },
  {
    n: "04",
    title: "Consciência pessoal",
    body: "Emocional, inconsciente individual, mental — o Eu/Ego no qual vivemos o dia a dia.",
  },
];

const ConsciousnessSection = () => (
  <section className="section-muted py-10 md:py-24">
    <div className="container max-w-4xl">
      <SectionTitle
        eyebrow="O mapa"
        label="A arquitetura da consciência humana"
        subtitle="O que opera em nós é 95% inconsciente — apenas 5% é consciente. Compreender essa arquitetura é o primeiro passo do trabalho sistêmico."
      />

      <div className="mt-6 md:mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
        {layers.map((l) => (
          <div
            key={l.n}
            className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_180px_1fr] items-baseline gap-x-3 gap-y-1 md:gap-6 py-4 md:py-5"
          >
            <div className="font-display text-accent text-sm md:text-base font-semibold tabular-nums">{l.n}</div>
            <h3 className="font-display text-[15px] md:text-base text-foreground font-semibold tracking-tight">
              {l.title}
            </h3>
            <p className="col-span-2 md:col-span-1 text-foreground/80 text-[14px] md:text-[15px] leading-relaxed font-body text-justify md:text-left">
              {l.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest font-body text-muted-foreground">
        <span><span className="text-accent font-semibold">95%</span> Inconsciente</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
        <span><span className="text-accent font-semibold">5%</span> Consciente</span>
      </div>
    </div>
  </section>
);

export default ConsciousnessSection;