import SectionTitle from "./SectionTitle";

const others = [
  "Abordagem apenas dos conteúdos das constelações",
  "Poucas horas de prática",
  "Turmas imensas com docentes pouco experientes",
  "Ausência de base teórico-científica",
  "Ausência de bases espirituais para o trabalho",
];

const ours = [
  "Teoria sistêmica e teoria do campo do pensamento",
  "Foco em prática e vivências complementares",
  "Docente com 10+ anos de experiência, turmas reduzidas",
  "Base teórica e científica sólida",
  "Espiritualidade sistêmica e ancoramento",
];

const ComparisonSection = () => (
  <section className="section-white py-16 md:py-24">
    <div className="container max-w-4xl">
      <SectionTitle eyebrow="Diferenciais" label="Por que esta formação" />
      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-8">
        <div className="card-refined p-7 opacity-80">
          <div className="label-section text-muted-foreground mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            Outros cursos
          </div>
          <ul className="space-y-3">
            {others.map((t) => (
              <li key={t} className="text-sm text-muted-foreground font-body font-light flex gap-3" style={{ textAlign: "left" }}>
                <span className="text-muted-foreground/50">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-border text-sm font-body text-muted-foreground">
            A partir de <span className="font-medium text-foreground">R$ 10.000</span> parcelado
          </div>
        </div>

        <div className="card-refined border-accent-left p-7 bg-surface">
          <div className="label-section mb-4">Formação em Ciência Sistêmica</div>
          <ul className="space-y-3">
            {ours.map((t) => (
              <li key={t} className="text-sm text-foreground font-body font-light flex gap-3" style={{ textAlign: "left" }}>
                <span className="text-accent">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-border">
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
              Pré-inscrição
            </div>
            <div className="font-display text-2xl text-foreground font-medium">
              R$ 6.000 <span className="text-sm text-muted-foreground font-body font-light">à vista</span>
            </div>
            <div className="text-sm text-muted-foreground font-body mt-1">
              ou R$ 7.000 parcelado no cartão
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;