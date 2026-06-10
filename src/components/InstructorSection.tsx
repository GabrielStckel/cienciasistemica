import SectionTitle from "./SectionTitle";
import jonas from "@/assets/jonas-peres.jpg";

const stats = [
  { n: "10+", l: "anos como constelador" },
  { n: "3.000h", l: "de constelações conduzidas" },
  { n: "5.000+", l: "clientes e alunos atendidos" },
];

const InstructorSection = () => (
  <section className="relative py-10 md:py-24 [overflow-x:clip] bg-gradient-to-b from-[hsl(220_30%_95%)] via-background to-[hsl(220_30%_96%)]">
    {/* blue glow bleeding up into the previous section — left only */}
    <div className="pointer-events-none absolute -top-56 -left-10 w-[560px] h-[560px] rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute -bottom-32 -left-10 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
    {/* fade seam at the top */}
    <div className="pointer-events-none absolute -top-12 inset-x-0 h-24 bg-gradient-to-b from-[hsl(210_25%_97%)] to-transparent" aria-hidden="true" />
    <div className="container max-w-4xl relative">
      {/* Mobile header */}
      <div className="md:hidden mb-4 text-center">
        <div className="label-section mb-2">Aprenda com quem já chegou lá</div>
        <h2 className="font-display text-2xl text-foreground mb-1 font-semibold leading-tight tracking-tight">
          Jonas Peres
        </h2>
        <p className="text-muted-foreground text-[11px] uppercase tracking-wider font-body">
          Constelações Familiares & Desenvolvimento Humano
        </p>
      </div>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-14 items-center">
        <div className="max-w-[260px] md:max-w-none mx-auto w-full relative">
          <div className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 rounded-xl border border-accent/40" aria-hidden="true" />
          <img
            src={jonas}
            alt="Jonas Peres, constelador e terapeuta"
            loading="lazy"
            className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-2xl ring-1 ring-foreground/5"
          />
        </div>
        <div>
          {/* Desktop header */}
          <div className="hidden md:block">
            <div className="label-section mb-3">Aprenda com quem já chegou lá</div>
            <h2 className="font-display text-4xl text-foreground mb-4 font-semibold leading-tight tracking-tight">
              Jonas Peres
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6 font-body" style={{ textAlign: "left" }}>
              Constelações Familiares & Desenvolvimento Humano
            </p>
          </div>
          <div className="space-y-4 md:space-y-5 text-foreground/90 text-[15px] leading-[1.65] md:leading-[1.85] font-body font-normal md:font-light mb-6 md:mb-8 text-left md:text-justify mt-5 md:mt-0">
            <p>
              Os mais de 10 anos como constelador e terapeuta são o coração de
              uma vida inteira destinada ao servir consciente à vida — com o
              suporte de uma espiritualidade laica e filosófica, que traz clareza,
              sabedoria e verdade ao meu processo e ao de quem posso auxiliar.
            </p>
            <p>
              Mais de 3.000 horas conduzindo constelações e vivências
              terapêuticas, presenciais e online. Mais de 5.000 clientes e alunos
              que viveram o poder transformador do autoconhecimento, resolvendo
              questões urgentes e aprendendo a conduzir melhor suas vidas,
              seguindo o meu método.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4 border-t border-border pt-5 md:pt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-xl md:text-3xl text-accent font-semibold">{s.n}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1 font-body leading-tight" style={{ textAlign: "left" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;