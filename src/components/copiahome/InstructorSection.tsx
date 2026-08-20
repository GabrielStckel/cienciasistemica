import { instructor } from "@/content/course";
import jonas from "@/assets/jonas-peres.jpg";
import jonasSm from "@/assets/jonas-peres-160.webp";
import jonasLg from "@/assets/jonas-peres-800.webp";

const InstructorSection = () => (
  <section
    className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    style={{ background: "hsl(220 60% 5%)" }}
  >
    {/* Background noise texture */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
      }}
      aria-hidden="true"
    />

    <div className="container max-w-6xl relative">
      <div className="flex flex-col lg:flex-row lg:items-stretch overflow-hidden rounded-sm ring-1 ring-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        {/* Image side */}
        <div className="relative w-full lg:w-1/2 min-h-[380px] md:min-h-[500px] lg:min-h-[680px] overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-t from-[hsl(220_60%_5%)] via-transparent to-transparent opacity-80"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(220_60%_5%)] opacity-40 hidden lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute inset-6 md:inset-8 border border-white/20 pointer-events-none hidden lg:block"
            aria-hidden="true"
          />
          <img
            src={jonas}
            srcSet={`${jonasSm} 160w, ${jonasLg} 800w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={800}
            height={1029}
            alt="Jonas Peres, constelador e terapeuta"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content side */}
        <div
          className="relative w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20"
          style={{ background: "hsl(220 47% 11%)" }}
        >
          {/* Subtle glow */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[120px]"
            style={{ background: "hsl(220 86% 56% / 0.10)" }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Label */}
            <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-10 md:w-12 bg-[hsl(220_86%_56%)]" />
              <span className="text-[hsl(220_86%_56%)] text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase font-body">
                Aprenda com quem já chegou lá
              </span>
            </div>

            {/* Name */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[hsl(213_100%_95%)] font-semibold leading-[0.9] md:leading-[0.9] mb-4 md:mb-6">
              Jonas
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Peres
            </h2>

            {/* Subtitle */}
            <p className="font-display text-lg md:text-xl text-[hsl(213_100%_95%)]/90 italic mb-8 md:mb-10 tracking-wide">
              Constelações Familiares &amp; Desenvolvimento Humano
            </p>

            {/* Bio */}
            <div className="space-y-5 md:space-y-6 text-[hsl(213_100%_95%)]/70 text-[15px] md:text-base leading-[1.7] md:leading-[1.8] font-body font-light mb-10 md:mb-14 max-w-lg">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-10 lg:gap-12 pt-6 md:pt-8 border-t border-white/10">
              {instructor.stats.map((s) => (
                <div key={s.l} className="group cursor-default">
                  <div className="font-display text-[22px] md:text-3xl lg:text-4xl text-[hsl(213_100%_95%)] font-semibold transition-colors group-hover:text-[hsl(220_86%_56%)]">
                    {s.n}
                  </div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[hsl(220_86%_56%)]/60 font-semibold mt-1 md:mt-2 leading-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;
