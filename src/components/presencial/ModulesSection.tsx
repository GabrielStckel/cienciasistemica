import { useState } from "react";
import SectionTitle from "@/components/turma2026/SectionTitle";
import { modulesFor } from "@/content/course";

const ModulesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const modules = modulesFor("presencial");
  const visible = showAll ? modules : modules.slice(0, 5);

  return (
    <section className="section-muted section-block">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow="Cronograma 2026"
          label="Dez módulos, dez encontros"
          subtitle="Dez encontros presenciais em Balneário Camboriú, de sábado a domingo, ao longo de dez meses."
        />
        <ol className="relative border-l border-border ml-2 md:ml-4 mt-8 md:mt-10">
          {visible.map((m) => (
            <li key={m.n} className="pl-5 md:pl-8 pb-7 md:pb-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-[17px] md:text-lg text-foreground font-semibold tracking-tight">
                  <span className="text-accent mr-2 md:mr-3">{m.n}.</span>
                  {m.title}
                </h3>
                <span className="hidden md:inline text-[15px] font-semibold text-foreground font-body tabular-nums whitespace-nowrap bg-accent/10 px-3 py-1 rounded-full">
                  {m.date}
                </span>
              </div>
              <p className="text-[15px] md:text-sm text-muted-foreground font-body font-normal md:font-light leading-[1.6] md:leading-relaxed text-justify md:text-left">
                {m.desc}
              </p>
              <p className="md:hidden mt-2 text-[14px] font-semibold text-foreground font-body tabular-nums inline-flex bg-accent/10 px-2.5 py-1 rounded-full">
                {m.date}
              </p>
            </li>
          ))}
        </ol>
        {!showAll && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-accent border border-accent/40 rounded-full py-3 px-6 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              Ver todos os módulos <span aria-hidden>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModulesSection;