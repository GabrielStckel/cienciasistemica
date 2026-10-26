import { instructor } from "@/content/course";
import jonas from "@/assets/jonas-peres.jpg";
import jonasSm from "@/assets/jonas-peres-160.webp";
import jonasLg from "@/assets/jonas-peres-800.webp";

/** Azul-marinho da marca (mesmo tom de --primary), usado na faixa de credenciais sob o retrato. */
const NAVY = "hsl(214 67% 14%)";

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

    <div className="container max-w-5xl relative">
      <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-y-8 md:gap-x-16 md:gap-y-7 items-center">
        {/* Apresentação: selo, nome e especialidade */}
        <header className="text-center md:text-left md:col-start-2 md:row-start-1 md:self-end">
          <div className="label-section text-[11px] text-accent mb-3 md:mb-4">Aprenda com quem já chegou lá</div>
          <h2 className="font-display text-[34px] md:text-[3.25rem] text-foreground font-semibold leading-[1.05] tracking-tight">
            {instructor.name}
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-[11.5px] md:text-[13px] uppercase tracking-[0.14em] leading-[1.6] font-body">
            Constelações Familiares
            <br />
            &amp; Desenvolvimento Humano
          </p>
        </header>

        {/* Retrato com faixa de credenciais: a foto se funde no azul-marinho onde ficam os números */}
        <figure className="relative mx-auto w-full max-w-[360px] md:max-w-none md:col-start-1 md:row-start-1 md:row-span-2 md:self-center">
          <div
            className="relative overflow-hidden rounded-2xl ring-1 ring-foreground/10 shadow-[0_32px_64px_-28px_hsl(214_67%_14%/0.55)]"
            style={{ background: NAVY }}
          >
            <div className="relative">
              <img
                src={jonas}
                srcSet={`${jonasSm} 160w, ${jonasLg} 800w`}
                sizes="(min-width: 768px) 42vw, 360px"
                width={800}
                height={1029}
                alt="Jonas Peres, constelador e terapeuta"
                loading="lazy"
                className="block w-full aspect-[4/5] object-cover object-[50%_20%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{ background: `linear-gradient(to bottom, transparent, ${NAVY})` }}
              />
            </div>

            <div className="relative grid grid-cols-3 -mt-5 md:-mt-6 pb-5 md:pb-7 px-2 md:px-5">
              {instructor.stats.map((s, i) => (
                <div
                  key={s.l}
                  className={`px-1.5 md:px-3 text-center ${i > 0 ? "border-l border-white/15" : ""}`}
                >
                  <div className="font-display text-[22px] md:text-[28px] leading-none font-semibold text-white">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[11px] md:text-[12.5px] leading-snug text-white/70 font-body">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </figure>

        {/* Texto */}
        <div className="md:col-start-2 md:row-start-2 md:self-start space-y-4 md:space-y-5 text-foreground/85 text-[15px] md:text-base leading-[1.7] md:leading-[1.8] font-body font-normal md:font-light [&_p]:!hyphens-auto">
          <p>
            Os mais de 10 anos como constelador e terapeuta são o coração de
            uma vida inteira destinada ao servir consciente à vida, com o
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
      </div>
    </div>
  </section>
);

export default InstructorSection;
