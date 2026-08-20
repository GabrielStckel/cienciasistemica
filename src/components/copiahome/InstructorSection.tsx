import { instructor } from "@/content/course";
import jonas from "@/assets/jonas-peres.jpg";
import jonasSm from "@/assets/jonas-peres-160.webp";
import jonasLg from "@/assets/jonas-peres-800.webp";

const InstructorSection = () => (
  <section className="relative section-block overflow-hidden bg-background text-foreground">
    {/* subtle dark overlay to deepen the section */}
    <div className="pointer-events-none absolute inset-0 bg-[hsl(220_60%_5%)]/[0.06]" aria-hidden="true" />
    {/* bottom fade for smooth transition into the dark section below */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 md:h-24 bg-gradient-to-b from-transparent to-[hsl(220_60%_5%)]/5 md:to-[hsl(220_60%_5%)]/15" aria-hidden="true" />
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
      }}
      aria-hidden="true"
    />
    <div className="container max-w-4xl relative">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-14 items-center">
        {/* Header — single instance, responsive */}
        <div className="mb-5 md:mb-0 text-center md:text-left md:col-start-2 md:row-start-1 md:self-end">
          <h2 className="font-display text-[26px] md:text-4xl text-foreground mb-2 md:mb-3 font-semibold leading-[1.15] md:leading-tight tracking-tight">
            {instructor.name}
          </h2>
          <div className="label-section text-[11px] text-accent mb-2 md:mb-4">Aprenda com quem já chegou lá</div>
          <p className="text-muted-foreground text-[11px] md:text-sm uppercase tracking-wider font-body">
            Constelações Familiares
            <br />
            &amp; Desenvolvimento Humano
          </p>
        </div>

        <div className="max-w-[260px] md:max-w-none mx-auto w-full relative md:col-start-1 md:row-start-1 md:row-span-2 md:self-center">
          {/* offset accent frame */}
          <div className="absolute -inset-3 md:-inset-4 rounded-2xl bg-gradient-to-br from-accent/30 via-primary/20 to-transparent blur-xl opacity-70" aria-hidden="true" />
          <div className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 rounded-xl border border-accent/40" aria-hidden="true" />
          <img
            src={jonas}
            srcSet={`${jonasSm} 160w, ${jonasLg} 800w`}
            sizes="(min-width: 768px) 40vw, 260px"
            width={800}
            height={1029}
            alt="Jonas Peres, constelador e terapeuta"
            loading="lazy"
            className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-2xl ring-1 ring-foreground/5"
          />
        </div>

        <div className="md:col-start-2 md:row-start-2">
          <div className="space-y-4 md:space-y-5 text-foreground/85 text-[15px] leading-[1.65] md:leading-[1.85] font-body font-normal md:font-light mb-6 md:mb-8 text-left md:text-justify mt-5 md:mt-0">
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
          <div className="grid grid-cols-3 gap-3 md:gap-4 border-t border-foreground/10 pt-5 md:pt-6">
            {instructor.stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-[22px] md:text-3xl text-primary font-semibold">{s.n}</div>
                <div className="text-left text-[11px] md:text-xs text-muted-foreground mt-1 font-body leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;
