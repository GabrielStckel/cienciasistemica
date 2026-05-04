const CtaSection = () => (
  <section id="inscricao" className="gradient-hero py-20 md:py-28">
    <div className="container max-w-2xl text-center">
      <div className="label-section text-accent mb-4">Vagas limitadas</div>
      <h2 className="font-display text-3xl md:text-4xl text-primary-foreground font-medium mb-5 leading-tight">
        Comece a viver a Ciência Sistêmica em 2026
      </h2>
      <p className="text-primary-foreground/60 text-[15px] font-body font-light leading-relaxed mb-10 max-w-lg mx-auto">
        A terapia não é o suficiente — é preciso aprender a viver. Garanta sua vaga com valor especial de pré-inscrição.
      </p>
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body text-sm font-medium tracking-wide rounded-sm hover:bg-accent/90 transition-colors"
      >
        Quero minha pré-inscrição
      </a>
      <p className="text-primary-foreground/40 text-xs font-body mt-6">
        R$ 6.000 à vista · ou R$ 7.000 parcelado no cartão
      </p>
    </div>
  </section>
);

export default CtaSection;