import { Instagram } from "lucide-react";

const CtaSection = () => (
  <section id="inscricao" className="gradient-hero pt-20 md:pt-28 pb-10 md:pb-12">
    <div className="container max-w-2xl text-center">
      <div className="label-section text-accent mb-4">Vagas limitadas</div>
      <h2 className="font-display text-3xl md:text-4xl text-primary-foreground font-semibold mb-5 leading-tight tracking-tight">
        Comece a viver a Ciência Sistêmica em 2026
      </h2>
      <p className="text-primary-foreground/90 text-[15px] md:text-base font-body font-normal leading-relaxed max-w-lg mx-auto">
        A terapia não é o suficiente — é preciso aprender a viver. Garanta sua vaga com valor especial de pré-inscrição.
      </p>

      <div className="mt-14 md:mt-20 pt-6 md:pt-8 border-t border-primary-foreground/15 flex flex-col items-center gap-2 md:gap-3">
        <div className="flex items-center gap-2">
          <p className="font-display text-sm font-medium text-primary-foreground tracking-wide">
            Jonas Peres
          </p>
          <a
            href="https://www.instagram.com/jonas_peress/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
        </div>
        <p className="text-primary-foreground/50 text-xs font-body text-center" style={{ hyphens: "none" }}>
          © {new Date().getFullYear()} Jonas Peres · Formação em Ciência Sistêmica
        </p>
      </div>
    </div>
  </section>
);

export default CtaSection;