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
  <section className="section-muted py-16 md:py-24">
    <div className="container max-w-4xl">
      <SectionTitle
        eyebrow="O mapa"
        label="A arquitetura da consciência humana"
        subtitle="O que opera em nós é 95% inconsciente — apenas 5% é consciente. Compreender essa arquitetura é o primeiro passo do trabalho sistêmico."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {layers.map((l) => (
          <div key={l.n} className="card-refined border-accent-left p-5">
            <div className="font-display text-accent text-sm font-semibold mb-2">{l.n}</div>
            <h3 className="font-display text-base text-foreground font-semibold tracking-tight mb-2">{l.title}</h3>
            <p className="text-foreground/75 text-[13px] leading-relaxed font-body font-light">{l.body}</p>
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