import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { modulesFor, type Modality } from "@/content/course";

const ModulesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [modality, setModality] = useState<Modality>("presencial");
  const modules = modulesFor(modality);
  const visible = showAll ? modules : modules.slice(0, 5);

  const tabs: { id: Modality; label: string }[] = [
    { id: "presencial", label: "Presencial" },
    { id: "hibrida", label: "Híbrida" },
  ];

  return (
    <section className="section-muted section-block">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow="Cronograma 2026"
          label="Dez módulos, dez encontros"
          subtitle="Uma jornada coletiva de dez meses, presencial, com turmas reduzidas."
        />
        <div className="mt-6 md:mt-8 flex justify-center">
          <div
            role="tablist"
            className="flex w-full sm:w-auto sm:inline-flex rounded-full p-1 border border-border bg-foreground/5"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={modality === t.id}
                onClick={() => {
                  setModality(t.id);
                  setShowAll(false);
                }}
                className={`flex-1 sm:flex-none rounded-full px-5 py-2 text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold transition-colors ${
                  modality === t.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <ol className="relative border-l border-border ml-2 md:ml-4 mt-8 md:mt-10">
          {visible.map((m) => (
            <li key={m.n} className="pl-5 md:pl-8 pb-7 md:pb-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-[17px] md:text-lg text-foreground font-semibold tracking-tight">
                  <span className="text-accent mr-2 md:mr-3">{m.n}.</span>
                  {m.title}
                </h3>
                <span className="hidden md:inline text-sm font-semibold text-foreground/80 font-body tabular-nums whitespace-nowrap">
                  {m.date}
                </span>
              </div>
              <p className="text-[15px] md:text-sm text-muted-foreground font-body font-normal md:font-light leading-[1.6] md:leading-relaxed text-justify md:text-left">
                {m.desc}
              </p>
              <p className="md:hidden mt-2 text-[13px] font-semibold text-foreground/80 font-body tabular-nums">
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