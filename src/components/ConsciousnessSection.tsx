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
  <section className="section-muted py-16 md:py-28">
    <div className="container max-w-6xl">
      <SectionTitle
        eyebrow="O mapa"
        label="A arquitetura da consciência humana"
        subtitle="O que opera em nós é 95% inconsciente — apenas 5% é consciente. Compreender essa arquitetura é o primeiro passo do trabalho sistêmico."
      />

      {/* Mobile / tablet — stack */}
      <div className="grid sm:grid-cols-2 gap-4 mt-12 lg:hidden">
        {layers.map((l) => (
          <div key={l.n} className="card-refined border-accent-left p-5">
            <div className="font-display text-accent text-sm font-semibold mb-2">{l.n}</div>
            <h3 className="font-display text-base text-foreground font-semibold tracking-tight mb-2">{l.title}</h3>
            <p className="text-foreground/80 text-[15px] leading-relaxed font-body" style={{ textAlign: "left" }}>{l.body}</p>
          </div>
        ))}
      </div>

      {/* Desktop — iceberg / depth diagram */}
      <div className="hidden lg:grid mt-16 grid-cols-[120px_1fr] gap-10">
        {/* Vertical depth scale */}
        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-foreground/10" />
          {/* 5% mark */}
          <div className="absolute left-0 right-0 flex items-center gap-3" style={{ top: "5%" }}>
            <div className="h-px flex-1 bg-accent/70" />
          </div>
          <div className="absolute right-full pr-3 text-right" style={{ top: "calc(2.5% - 0.6rem)" }}>
            <div className="font-display text-accent text-xl font-semibold leading-none">5%</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Consciente</div>
          </div>
          {/* 95% label */}
          <div className="absolute right-full pr-3 text-right" style={{ top: "50%", transform: "translateY(-50%)" }}>
            <div className="font-display text-foreground text-xl font-semibold leading-none">95%</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Inconsciente</div>
          </div>
          {/* dots aligned to layer rows */}
          {layers.map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent"
              style={{ top: `calc(${(i + 0.5) * 25}% - 5px)` }}
            />
          ))}
        </div>

        {/* Layered rows */}
        <div className="relative">
          {layers.map((l, i) => {
            const depth = i / (layers.length - 1); // 0 → 1
            return (
              <div
                key={l.n}
                className="grid grid-cols-[80px_220px_1fr] items-baseline gap-8 py-7 border-b border-foreground/10 last:border-0"
                style={{
                  paddingLeft: `${depth * 32}px`,
                  background: `linear-gradient(to right, hsl(220 86% 56% / ${0.04 + depth * 0.06}), transparent 60%)`,
                }}
              >
                <div className="font-display text-accent text-2xl font-semibold tabular-nums">{l.n}</div>
                <h3 className="font-display text-xl text-foreground font-semibold tracking-tight">
                  {l.title}
                </h3>
                <p className="text-foreground/80 text-[16px] leading-relaxed font-body" style={{ textAlign: "left" }}>
                  {l.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ConsciousnessSection;