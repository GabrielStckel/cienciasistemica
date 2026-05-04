import jonas from "@/assets/jonas-peres.jpg";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(220 86% 56% / 0.45) 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(220 90% 70% / 0.35) 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-10 container max-w-6xl flex items-center justify-between pt-7">
        <div className="font-display text-primary-foreground text-lg font-semibold tracking-tight">
          Jonas Peres
        </div>
        <span className="hidden md:inline-flex items-center gap-2 text-[11px] font-body font-medium tracking-[0.25em] uppercase text-primary-foreground/60">
          <span className="w-6 h-px bg-primary-foreground/40" />
          Turma 2026
        </span>
      </div>

      <div className="relative z-10 container max-w-6xl grid md:grid-cols-12 gap-10 md:gap-12 items-center pt-16 md:pt-24 pb-24 md:pb-32">
        {/* Left: copy */}
        <div className="md:col-span-7 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/70">
              Formação 2026 · 10 módulos
            </span>
          </div>

          <h1 className="font-display text-primary-foreground leading-[1.05] tracking-tight font-semibold text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-7">
            Ciência Sistêmica<span className="text-accent">.</span>
            <br />
            <span className="italic font-medium text-primary-foreground/85">Uma forma de viver.</span>
          </h1>

          <p
            className="font-body text-base md:text-lg text-primary-foreground/75 max-w-xl leading-relaxed mb-10"
            style={{ textAlign: "left" }}
          >
            Uma formação para quem quer parar de repetir padrões, organizar suas inteligências
            emocional, mental e espiritual — e tomar a vida com leveza e propósito, segundo
            Bert Hellinger.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#inscricao" className="btn-primary">
              Garantir minha vaga
              <span aria-hidden>→</span>
            </a>
            <a href="#sobre" className="btn-ghost-light">
              Conhecer o curso
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-primary-foreground/15 pt-6">
            <div>
              <div className="font-display text-2xl font-semibold text-primary-foreground">10</div>
              <div className="text-[11px] font-body uppercase tracking-wider text-primary-foreground/55 mt-1">Módulos</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-primary-foreground">10 meses</div>
              <div className="text-[11px] font-body uppercase tracking-wider text-primary-foreground/55 mt-1">Imersão</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-primary-foreground">2026</div>
              <div className="text-[11px] font-body uppercase tracking-wider text-primary-foreground/55 mt-1">Início</div>
            </div>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="md:col-span-5 relative animate-[fade-up_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-60"
              style={{ background: "radial-gradient(circle at 50% 30%, hsl(220 86% 56% / 0.5), transparent 70%)" }}
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-primary-foreground/10 shadow-2xl">
              <img
                src={jonas}
                alt="Jonas Peres, constelador e terapeuta"
                className="w-full aspect-[4/5] object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 55%, hsl(214 67% 8% / 0.75) 100%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display text-primary-foreground text-xl font-semibold">Jonas Peres</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/70 font-body">
                  Constelador · há 10+ anos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;