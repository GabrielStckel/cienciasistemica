import SectionTitle from "./SectionTitle";

const pillars = [
  {
    n: "01",
    title: "Estado meditativo",
    body: "Silenciar a mente é esvaziar-se do próprio ego, deixar o passado de fora da condução do processo, observar sem analisar.",
  },
  {
    n: "02",
    title: "O campo do pensamento",
    body: "A neutralidade é a ausência de julgamentos — a permissão para que tudo seja como é, em conformidade com o fato tal qual ele ocorreu.",
  },
  {
    n: "03",
    title: "Não intencionalidade",
    body: "É o respeito supremo àquilo que o movimento traz, e à decisão do cliente sobre seu destino. Não cabe buscar uma solução — cabe apenas olhar.",
  },
];

const PillarsSection = () => (
  <section className="gradient-hero py-16 md:py-24">
    <div className="container max-w-4xl">
      <SectionTitle
        light
        eyebrow="As bases"
        label="Para facilitar constelações é preciso esvaziar-se"
        subtitle="A condução do inconsciente requer três bases fundamentais para que aquilo que precisa ser revelado venha à tona."
      />
      <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-12">
        {pillars.map((p) => (
          <div key={p.n} className="border-l-2 border-accent/60 pl-5 py-2">
            <div className="font-display text-xl text-accent/80 mb-3 font-semibold">{p.n}</div>
            <h3 className="font-display text-lg text-primary-foreground mb-3 font-semibold tracking-tight">{p.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-[1.85] font-body font-light">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;