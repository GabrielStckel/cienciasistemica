import { useEffect, useState } from "react";

const ALL_PARTICLES = [
  { endX: "-30vw", delay: "0s", dur: "12s", size: "3px" },
  { endX: "28vw", delay: "2s", dur: "11s", size: "3px" },
  { endX: "-22vw", delay: "4s", dur: "14s", size: "4px" },
  { endX: "18vw", delay: "1.5s", dur: "13s", size: "3px" },
  { endX: "-35vw", delay: "5s", dur: "14s", size: "3px" },
  { endX: "35vw", delay: "3s", dur: "11.5s", size: "3px" },
  { endX: "-15vw", delay: "6s", dur: "13s", size: "3px" },
  { endX: "25vw", delay: "1.5s", dur: "12s", size: "3px" },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsMobile(mq.matches);
    setReducedMotion(rm.matches);
    const onMq = () => setIsMobile(mq.matches);
    const onRm = () => setReducedMotion(rm.matches);
    mq.addEventListener("change", onMq);
    rm.addEventListener("change", onRm);
    return () => {
      mq.removeEventListener("change", onMq);
      rm.removeEventListener("change", onRm);
    };
  }, []);

  const particles = reducedMotion ? [] : isMobile ? ALL_PARTICLES.slice(0, 4) : ALL_PARTICLES;

  return (
    <section className="relative gradient-hero overflow-hidden">
      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ filter: "blur(4px)" }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[340px] md:w-[500px] h-full opacity-[0.20] animate-[beam-pulse_8s_ease-in-out_infinite]"
            style={{
              background: "linear-gradient(180deg, hsl(220 90% 70% / 0.5) 0%, hsl(220 86% 56% / 0.2) 40%, transparent 100%)",
              clipPath: "polygon(35% 0%, 65% 0%, 90% 100%, 10% 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[120px] opacity-[0.15] animate-[beam-pulse_10s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, hsl(220 90% 60% / 0.5) 0%, hsl(220 80% 50% / 0.15) 40%, transparent 70%)",
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: "50%",
              top: "-5%",
              opacity: 0,
              background: "hsl(220 90% 80%)",
              boxShadow: "0 0 8px 3px hsl(220 90% 70% / 0.4)",
              animation: `diagonal-fall ${p.dur} ease-out infinite ${p.delay}`,
              willChange: "transform, opacity",
              ["--end-x" as string]: p.endX,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 py-32">
        <div
          className="animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] text-center"
          style={{ textShadow: "0 2px 12px hsl(220 90% 10% / 0.6), 0 0 30px hsl(220 86% 56% / 0.15)" }}
        >
          <div className="inline-block mb-8">
            <span className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary-foreground/50">
              Turma 2026 · Jonas Peres
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.15] mb-6 tracking-wide">
            Formação em
            <br />
            <span>Ciência Sistêmica</span>
          </h1>

          <p className="font-body text-sm md:text-base text-primary-foreground/60 max-w-md mx-auto leading-relaxed text-center">
            Segundo Bert Hellinger.
            <br />
            Viva sem repetir padrões, torne-se sua melhor versão e contribua com o mundo através do seu propósito.
          </p>

          <a
            href="#inscricao"
            className="inline-block mt-10 px-8 py-3 bg-accent text-accent-foreground font-body text-sm font-medium tracking-wide rounded-sm hover:bg-accent/90 transition-colors"
          >
            Quero me inscrever
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;