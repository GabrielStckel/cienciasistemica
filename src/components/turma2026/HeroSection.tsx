import jonas from "@/assets/jonas-peres.jpg";
import jonasSm from "@/assets/jonas-peres-160.webp";
import jonasLg from "@/assets/jonas-peres-800.webp";
import { CITY, formatShort, startsAt } from "@/content/course";
import { track } from "@/lib/analytics";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen min-h-[100svh] flex items-center justify-center text-primary-foreground"
      style={{ background: "hsl(220 60% 5%)" }}
    >
      {/* Static atmospheric vignette — no animation for performance */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, hsl(220 86% 56% / 0.32) 0%, hsl(220 80% 30% / 0.18) 35%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 100%, hsl(220 86% 56% / 0.18) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, hsl(220 60% 4%) 95%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl px-5 sm:px-6 pt-10 pb-14 md:py-28 flex flex-col items-center text-center">
        {/* Top metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-7 md:mb-10">
          <span
            className="flex items-center gap-2 px-2.5 py-1 rounded-full border backdrop-blur-md text-[10px] tracking-[0.2em] font-bold uppercase text-primary-foreground/85"
            style={{
              background: "hsl(0 0% 100% / 0.05)",
              borderColor: "hsl(0 0% 100% / 0.10)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Formação 2026
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-foreground/25" />
          <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-primary-foreground/70">
            10 Módulos
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-foreground/25" />
          <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-primary-foreground/70">
            10 Meses
          </span>
        </div>

        {/* Headline */}
        <p className="font-display text-lg sm:text-3xl md:text-4xl text-primary-foreground/75 font-light mb-3 md:mb-3 tracking-tight">
          Curso de formação em
        </p>
        <h1
          className="font-display font-semibold leading-[0.95] sm:leading-[0.92] tracking-tight text-[2.1rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] mb-6 md:mb-8 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ textShadow: "0 0 60px hsl(220 86% 56% / 0.35)" }}
        >
          Ciência Sistêmica
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-sm sm:text-[15px] md:text-lg text-primary-foreground/80 leading-[1.6] md:leading-relaxed font-light font-body mb-10 md:mb-12 text-center">
          Viva sem repetir padrões negativos, se torne a sua melhor
          <br className="hidden md:inline" />{" "}
          versão e contribua com o mundo através do seu propósito.
        </p>

        {/* Actions */}
        <div className="sm:hidden w-full mb-12">
          <a
            href="#inscricao"
            className="btn-primary group w-full justify-center text-sm py-3.5"
            style={{ boxShadow: "0 0 24px hsl(220 86% 56% / 0.28)" }}
            onClick={() => track("hero_modalities_click", { source: "hero_mobile" })}
          >
            Ver as modalidades
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="hidden sm:flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 sm:mb-16 md:mb-24">
          <a
            href="#inscricao"
            className="btn-primary group w-full sm:w-auto text-sm md:text-base py-3 md:py-3.5"
            style={{ boxShadow: "0 0 40px hsl(220 86% 56% / 0.35)" }}
            onClick={() => track("hero_modality_click", { modality: "presencial" })}
          >
            Presencial
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#inscricao"
            className="btn-primary group w-full sm:w-auto text-sm md:text-base py-3 md:py-3.5"
            style={{ boxShadow: "0 0 40px hsl(220 86% 56% / 0.35)" }}
            onClick={() => track("hero_modality_click", { modality: "hibrida" })}
          >
            Híbrida
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Profile platform card */}
        <div className="relative w-full max-w-4xl">
          <div
            className="absolute inset-x-0 -bottom-8 md:-bottom-10 h-20 md:h-32 blur-3xl opacity-50 pointer-events-none"
            style={{ background: "linear-gradient(to top, hsl(220 86% 56% / 0.18), transparent)" }}
          />
          <div
            className="relative rounded-xl md:rounded-2xl border p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 backdrop-blur-md"
            style={{
              background: "hsl(0 0% 100% / 0.03)",
              borderColor: "hsl(0 0% 100% / 0.10)",
            }}
          >
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
              <div className="relative shrink-0">
                <div
                  className="w-14 h-14 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden border"
                  style={{ borderColor: "hsl(0 0% 100% / 0.10)" }}
                >
                  <img
                    src={jonas}
                    srcSet={`${jonasSm} 160w, ${jonasLg} 800w`}
                    sizes="(max-width: 768px) 56px, 96px"
                    width={96}
                    height={96}
                    loading="eager"
                    fetchPriority="high"
                    alt="Jonas Peres, constelador"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-4 h-4 md:w-7 md:h-7 rounded-full bg-accent flex items-center justify-center"
                  style={{ border: "2px solid hsl(214 67% 14%)" }}
                >
                  <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary-foreground" />
                </div>
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-display text-sm md:text-2xl font-semibold">Jonas Peres</h3>
                <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-primary-foreground/70 uppercase mt-1.5 md:mt-1 font-body leading-snug">
                  <span className="block md:inline">Constelador</span>
                  <span className="hidden md:inline"> · </span>
                  <span className="block md:inline">Há 10+ anos</span>
                </p>
              </div>
            </div>

            <div className="h-px md:h-14 w-full md:w-px bg-primary-foreground/10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 md:gap-10 w-full md:w-auto">
              <div className="text-left md:text-left">
                <p className="text-[9px] md:text-[11px] uppercase tracking-wider text-primary-foreground/60 mb-1 md:mb-1 font-body">Início</p>
                <p className="font-body font-medium text-[10px] md:text-sm">{formatShort(startsAt("presencial"))}</p>
              </div>
              <div className="text-left md:text-left">
                <p className="text-[9px] md:text-[11px] uppercase tracking-wider text-primary-foreground/60 mb-1 md:mb-1 font-body">Local</p>
                <p className="font-body font-medium text-[10px] md:text-sm">{CITY}</p>
              </div>
              <div className="text-left md:text-left">
                <p className="text-[9px] md:text-[11px] uppercase tracking-wider text-primary-foreground/60 mb-1 md:mb-1 font-body">Vagas</p>
                <p className="font-body font-medium text-[10px] md:text-sm">Limitadas</p>
              </div>
              <div className="text-left md:text-left">
                <p className="text-[9px] md:text-[11px] uppercase tracking-wider text-primary-foreground/60 mb-1 md:mb-1 font-body">Status</p>
                <p className="font-body font-medium text-[10px] md:text-sm text-accent">• Aberto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;