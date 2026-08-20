const Block = ({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative rounded-lg bg-accent text-accent-foreground px-4 py-4 md:px-5 md:py-6 shadow-[0_18px_40px_-20px_hsl(220_86%_56%/0.6)] ${className}`}
  >
    <h3 className="font-display font-semibold leading-tight tracking-tight">{title}</h3>
    {children}
  </div>
);

const SmallBlock = () => (
  <div className="h-5 md:h-6 rounded-md bg-accent/55 border border-accent/40" />
);

const ConsciousnessSection = () => (
  <section className="gradient-hero section-block overflow-hidden">
    <div className="container max-w-5xl">
      {/* Título */}
      <header className="mb-8 md:mb-14">
        <h2 className="font-display uppercase tracking-tight text-primary-foreground text-[26px] leading-[1.1] sm:text-4xl md:text-5xl font-bold">
          A arquitetura da consciência humana
        </h2>
        <p className="mt-2 font-display uppercase tracking-wide text-primary-foreground/85 text-base md:text-2xl font-semibold">
          Inconsciente <span className="text-accent">95%</span>
        </p>
      </header>

      {/* ---------- Diagrama: desktop ---------- */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1.25fr_28px_1fr_28px_1fr_28px_1.15fr] items-stretch">
          <Block title="Fonte" className="flex items-center text-3xl [&>h3]:text-3xl" />
          <div className="flex items-center">
            <div className="h-px w-full bg-primary-foreground/60" />
          </div>
          <Block title="Inconsciente coletivo" className="flex items-center [&>h3]:text-xl" />
          <div className="flex items-center">
            <div className="h-px w-full bg-primary-foreground/60" />
          </div>
          <Block title="Consciência familiar" className="flex items-center [&>h3]:text-xl" />
          <div className="flex items-center">
            <div className="h-px w-full bg-primary-foreground/60" />
          </div>
          <Block title="Consciência pessoal" className="[&>h3]:text-xl">
            <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] leading-snug font-body text-accent-foreground/85">
              <span>Emocional<br />inconsciente<br />individual</span>
              <span>Mental<br />Eu/Ego</span>
            </div>
          </Block>
        </div>

        {/* Ramificação + rótulo 5% */}
        <div className="grid grid-cols-[1fr_1.15fr] gap-7">
          <div className="relative pl-6 pt-0">
            {/* linha vertical descendo da Fonte */}
            <div className="absolute left-6 top-0 bottom-6 w-px bg-primary-foreground/45" />
            <div className="pt-8 pl-8 flex items-start gap-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full max-w-[320px]">
                <SmallBlock />
                <SmallBlock />
                <SmallBlock />
                <SmallBlock />
              </div>
              <span className="font-body text-sm text-primary-foreground/80 leading-tight shrink-0 pt-0.5">
                Outras<br />pessoas
              </span>
            </div>
          </div>
          <div className="pt-8">
            <p className="font-display text-xl font-semibold text-primary-foreground">
              Consciente <span className="text-accent">5%</span>
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Diagrama: mobile ---------- */}
      <div className="md:hidden">
        <div className="space-y-0">
          <Block title="Fonte" className="[&>h3]:text-2xl" />
          {/* ramo outras pessoas */}
          <div className="pl-5 border-l border-primary-foreground/40 py-4 ml-6">
            <div className="grid grid-cols-2 gap-2 max-w-[220px]">
              <SmallBlock />
              <SmallBlock />
              <SmallBlock />
              <SmallBlock />
            </div>
            <span className="mt-2 block font-body text-xs text-primary-foreground/75">Outras pessoas</span>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-6 bg-primary-foreground/50" />
          </div>
          <Block title="Inconsciente coletivo" className="[&>h3]:text-lg" />
          <div className="flex justify-center">
            <div className="w-px h-6 bg-primary-foreground/50" />
          </div>
          <Block title="Consciência familiar" className="[&>h3]:text-lg" />
          <div className="flex justify-center">
            <div className="w-px h-6 bg-primary-foreground/50" />
          </div>
          <Block title="Consciência pessoal" className="[&>h3]:text-lg">
            <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] leading-snug font-body text-accent-foreground/85">
              <span>Emocional<br />inconsciente individual</span>
              <span>Mental<br />Eu/Ego</span>
            </div>
          </Block>
        </div>
        <p className="mt-5 text-right font-display text-base font-semibold text-primary-foreground">
          Consciente <span className="text-accent">5%</span>
        </p>
      </div>
    </div>
  </section>
);

export default ConsciousnessSection;
