const Node = ({
  index,
  title,
  caption,
  children,
  size = "md",
}: {
  index: string;
  title: string;
  caption?: string;
  children?: React.ReactNode;
  size?: "md" | "lg";
}) => (
  <div className="group relative h-full">
    {/* halo */}
    <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-accent/25 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative h-full rounded-2xl p-px bg-gradient-to-b from-primary-foreground/40 via-accent/40 to-accent/10">
      <div className="relative h-full overflow-hidden rounded-2xl bg-[linear-gradient(160deg,hsl(220_86%_56%)_0%,hsl(220_86%_44%)_55%,hsl(222_70%_30%)_100%)] px-4 py-5 md:px-6 md:py-7 text-accent-foreground shadow-[0_28px_60px_-28px_hsl(220_86%_56%/0.85)] transition-transform duration-500 group-hover:-translate-y-1">
        <div className="pointer-events-none absolute -top-16 -right-10 h-32 w-32 rounded-full bg-primary-foreground/20 blur-2xl" />
        <span className="relative font-body text-[10px] md:text-[11px] tracking-[0.28em] text-accent-foreground/70">
          {index}
        </span>
        <h3
          className={`relative mt-2 font-display font-bold leading-[1.1] tracking-tight ${
            size === "lg" ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
          }`}
        >
          {title}
        </h3>
        {caption && (
          <p className="relative mt-2 font-body text-[12px] md:text-[13px] leading-snug text-accent-foreground/80">
            {caption}
          </p>
        )}
        {children}
      </div>
    </div>
  </div>
);

const Connector = ({ vertical = false }: { vertical?: boolean }) =>
  vertical ? (
    <div className="relative mx-auto h-8 w-px bg-gradient-to-b from-accent/20 via-accent to-accent/20">
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_hsl(220_86%_56%)]" />
    </div>
  ) : (
    <div className="relative flex items-center">
      <div className="h-px w-full bg-gradient-to-r from-accent/20 via-primary-foreground/70 to-accent/20" />
      <span className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_hsl(220_86%_56%)]" />
    </div>
  );


const Pill = ({ label, value }: { label: string; value: string }) => (
  <span className="inline-flex items-baseline gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/[0.06] px-4 py-1.5 backdrop-blur-sm">
    <span className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em] text-primary-foreground/75">
      {label}
    </span>
    <span className="font-display text-lg md:text-xl font-bold text-accent">{value}</span>
  </span>
);

const MobileStep = ({
  index,
  title,
  lead = false,
  last = false,
  children,
}: {
  index: string;
  title: string;
  lead?: boolean;
  last?: boolean;
  children?: React.ReactNode;
}) => (
  <div className={`relative ${last ? "" : "mb-4"}`}>
    {/* nó no trilho */}
    <span className="absolute -left-[25px] top-6 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_3px_hsl(220_86%_56%/0.8)]" />
    <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(150deg,hsl(220_86%_56%)_0%,hsl(220_86%_44%)_55%,hsl(222_70%_28%)_100%)] px-4 py-4 text-accent-foreground shadow-[0_20px_45px_-24px_hsl(220_86%_56%/0.9)]">
      <div className="pointer-events-none absolute -top-12 -right-8 h-24 w-24 rounded-full bg-primary-foreground/20 blur-2xl" />
      <span className="relative font-body text-[10px] tracking-[0.28em] text-accent-foreground/70">{index}</span>
      <h3
        className={`relative mt-1 font-display font-bold leading-[1.15] tracking-tight ${
          lead ? "text-2xl" : "text-lg"
        }`}
      >
        {title}
      </h3>
      {children}
    </div>
  </div>
);

const ConsciousnessSection = () => (
  <section className="gradient-hero section-block relative overflow-hidden">
    {/* atmosfera */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary-foreground)/0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)/0.35) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 78%)",
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/25 blur-[110px]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[120px]"
    />

    <div className="container max-w-5xl relative">
      {/* Título */}
      <header className="mb-8 md:mb-14">
        <span className="mb-4 inline-block h-px w-16 bg-accent" />
        <h2 className="font-display uppercase tracking-tight text-primary-foreground text-[26px] leading-[1.05] sm:text-4xl md:text-5xl font-bold">
          A arquitetura da consciência humana
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3">
          <Pill label="Inconsciente" value="95%" />
          <Pill label="Consciente" value="5%" />
        </div>
      </header>

      {/* ---------- Diagrama: desktop ---------- */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1.2fr_36px_1fr_36px_1fr_36px_1.2fr] items-stretch">
          <Node index="01" title="Fonte" size="lg" />
          <Connector />
          <Node index="02" title="Inconsciente coletivo" />
          <Connector />
          <Node index="03" title="Consciência familiar" />
          <Connector />
          <Node index="04" title="Consciência pessoal">
            <div className="relative mt-4 grid grid-cols-2 gap-2">
              <span className="rounded-lg bg-primary-foreground/10 px-2.5 py-2 font-body text-[11px] leading-snug text-accent-foreground/90">
                Emocional<br />inconsciente<br />individual
              </span>
              <span className="rounded-lg bg-primary-foreground/10 px-2.5 py-2 font-body text-[11px] leading-snug text-accent-foreground/90">
                Mental<br />Eu/Ego
              </span>
            </div>
          </Node>
        </div>

        {/* Ramificação */}
        <div className="relative mt-10 pl-10">
          <div className="absolute left-10 -top-10 h-16 w-px bg-gradient-to-b from-accent to-accent/10" />
          <div className="absolute left-10 top-6 h-px w-10 bg-gradient-to-r from-accent to-accent/10" />
          <div className="ml-16 inline-flex items-center gap-5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.05] px-5 py-4 backdrop-blur-sm">
            <div className="grid grid-cols-4 gap-2.5 w-[280px]">
              <SmallBlock />
              <SmallBlock />
              <SmallBlock />
              <SmallBlock />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Diagrama: mobile (trilha vertical) ---------- */}
      <div className="md:hidden relative pl-7">
        {/* trilho */}
        <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent/60 to-accent/10" />

        <MobileStep index="01" title="Fonte" lead>
          <div className="mt-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.05] px-3 py-3">
            <div className="grid grid-cols-4 gap-1.5">
              <SmallBlock />
              <SmallBlock />
              <SmallBlock />
              <SmallBlock />
            </div>
          </div>
        </MobileStep>

        <MobileStep index="02" title="Inconsciente coletivo" />
        <MobileStep index="03" title="Consciência familiar" />
        <MobileStep index="04" title="Consciência pessoal" last>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="rounded-lg bg-primary-foreground/10 px-2.5 py-2 font-body text-[11px] leading-snug text-accent-foreground/90">
              Emocional<br />inconsciente<br />individual
            </span>
            <span className="rounded-lg bg-primary-foreground/10 px-2.5 py-2 font-body text-[11px] leading-snug text-accent-foreground/90">
              Mental<br />Eu/Ego
            </span>
          </div>
        </MobileStep>
      </div>
    </div>
  </section>
);

export default ConsciousnessSection;
