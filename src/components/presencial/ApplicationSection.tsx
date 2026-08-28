import SectionTitle from "@/components/turma2026/SectionTitle";
import { modalities, specsFor, APPLY_URL } from "@/content/course";
import { track } from "@/lib/analytics";

const ApplicationSection = () => {
  const presencial = modalities.find((m) => m.id === "presencial");
  if (!presencial) return null;

  return (
    <section id="inscricao" className="section-white section-block relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 15%, hsl(220 86% 56% / 0.07), transparent 70%)",
        }}
      />
      <div className="container max-w-2xl relative">
        <SectionTitle
          eyebrow="Aplicação"
          label="Vagas para a turma presencial"
          subtitle="As vagas são limitadas e o ingresso acontece por aplicação. Depois de enviar, você recebe as condições e a conversa de ingresso."
        />

        <article className="card-elevated-accent flex flex-col h-full rounded-2xl p-5 md:p-7">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="label-section text-[11px]">{presencial.tag}</span>
            {presencial.badge && (
              <span className="shrink-0 rounded-full bg-accent/10 text-accent text-[10.5px] uppercase tracking-[0.14em] font-body font-semibold px-2.5 py-1">
                {presencial.badge}
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-foreground">
            {presencial.title}
          </h3>

          <p className="text-[15px] leading-[1.7] text-foreground/80 font-body mt-2.5 mb-5">
            {presencial.pitch}
          </p>

          <dl className="border-y border-border py-4 space-y-2.5">
            {specsFor("presencial").map((s) => (
              <div key={s.k} className="flex items-baseline justify-between gap-4">
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-body">
                  {s.k}
                </dt>
                <dd className="text-[14px] font-medium text-foreground font-body text-right">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 space-y-2.5">
            {presencial.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span aria-hidden className="text-accent text-[14.5px] leading-[1.5] shrink-0">
                  ✓
                </span>
                <span className="text-[14.5px] leading-[1.5] text-foreground/85 font-body">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-7">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-body mb-1">
              {presencial.price.label}
            </p>
            <p className="font-display text-2xl font-semibold text-foreground tracking-tight">
              {presencial.price.value}
              {presencial.price.suffix && (
                <span className="text-muted-foreground font-body text-[14px] font-normal ml-2">
                  {presencial.price.suffix}
                </span>
              )}
            </p>
            <p className="text-[13px] text-muted-foreground font-body mt-1">{presencial.price.note}</p>

            <a
              href={APPLY_URL.presencial}
              data-analytics="apply"
              onClick={() => track("apply_click", { modality: "presencial", source: "presencial_page" })}
              className="btn-primary w-full mt-5"
            >
              {presencial.cta.text}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ApplicationSection;