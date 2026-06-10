import jonas from "@/assets/jonas-peres.jpg";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden min-h-screen flex items-center justify-center text-primary-foreground">
      {/* Ambient blobs */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full pointer-events-none"
        style={{ background: "hsl(220 86% 56% / 0.10)", filter: "blur(120px)" }}
      />
      <div
        className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full pointer-events-none"
        style={{ background: "hsl(220 86% 56% / 0.07)", filter: "blur(100px)" }}
      />

      {/* Top overlay nav */}
      <div className="absolute top-8 left-8 right-8 md:left-12 md:right-12 z-20 flex items-center justify-between">
        <span className="font-display text-lg md:text-xl font-semibold tracking-tight">
          Jonas Peres
        </span>
        <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
          Turma 2026
        </span>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-24 md:py-28 flex flex-col items-center text-center">
        {/* Top metadata */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-[10px] tracking-[0.25em] font-semibold uppercase text-primary-foreground/55">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Formação 2026
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-foreground/25" />
          <span>10 Módulos</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-foreground/25" />
          <span>10 Meses</span>
        </div>

        {/* Headline */}
        <p className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground/75 font-light mb-3 tracking-tight">
          Curso de formação em
        </p>
        <h1 className="font-display font-semibold leading-[0.92] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] mb-8 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          Ciência Sistêmica
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base md:text-lg text-primary-foreground/65 leading-relaxed font-light font-body mb-12" style={{ textAlign: "center" }}>
          Viva sem repetir padrões negativos, se torne a sua melhor versão e
          contribua com o mundo através do seu propósito.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 md:mb-24">
          <a href="#inscricao" className="btn-primary">
            Garantir minha vaga
            <span aria-hidden>→</span>
          </a>
          <a href="#sobre" className="btn-ghost-light">
            Conhecer o curso
          </a>
        </div>

        {/* Profile platform card */}
        <div className="relative w-full max-w-4xl">
          <div
            className="absolute inset-x-0 -bottom-10 h-32 blur-3xl opacity-50 pointer-events-none"
            style={{ background: "linear-gradient(to top, hsl(220 86% 56% / 0.18), transparent)" }}
          />
          <div
            className="relative rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md"
            style={{
              background: "hsl(0 0% 100% / 0.03)",
              borderColor: "hsl(0 0% 100% / 0.10)",
            }}
          >
            <div className="flex items-center gap-5 md:gap-6">
              <div className="relative">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border"
                  style={{ borderColor: "hsl(0 0% 100% / 0.10)" }}
                >
                  <img
                    src={jonas}
                    alt="Jonas Peres, constelador"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center"
                  style={{ border: "4px solid hsl(214 67% 14%)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl md:text-2xl font-semibold">Jonas Peres</h3>
                <p className="text-[10px] tracking-[0.2em] text-primary-foreground/55 uppercase mt-1 font-body">
                  <span className="block md:inline">Constelador</span>
                  <span className="hidden md:inline"> · </span>
                  <span className="block md:inline">Há 10+ anos</span>
                </p>
              </div>
            </div>

            <div className="h-px md:h-14 w-full md:w-px bg-primary-foreground/10" />

            <div className="grid grid-cols-3 gap-6 md:gap-10 w-full md:w-auto">
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-wider text-primary-foreground/45 mb-1 font-body">Início</p>
                <p className="font-body font-medium text-sm">Mar/26</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-wider text-primary-foreground/45 mb-1 font-body">Vagas</p>
                <p className="font-body font-medium text-sm">Limitadas</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-wider text-primary-foreground/45 mb-1 font-body">Status</p>
                <p className="font-body font-medium text-sm text-accent">• Aberto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;