import SectionTitle from "./SectionTitle";
import { track } from "@/lib/analytics";

const APPLY_URL_PRESENCIAL = "#inscricao";
const APPLY_URL_HIBRIDA = "#inscricao";

type Modality = {
  id: string;
  tag: string;
  badge?: string;
  title: string;
  pitch: string;
  specs: { k: string; v: string }[];
  benefits: string[];
  price: { label: string; value: string; suffix?: string; note: string };
  cta: { text: string; href: string; variant: "primary" | "ghost" };
  featured: boolean;
};

const modalities: Modality[] = [
  {
    id: "presencial",
    tag: "Turma presencial",
    badge: "Vagas limitadas",
    title: "Presencial",
    pitch:
      "A experiência completa: dez encontros presenciais, campo vivo, prática de constelação em grupo reduzido e contato direto com o docente.",
    specs: [
      { k: "Formato", v: "10 encontros presenciais" },
      { k: "Duração", v: "10 meses · Ago/26 a Mai/27" },
      { k: "Turma", v: "Reduzida" },
    ],
    benefits: [
      "Todos os módulos ao vivo, no mesmo espaço",
      "Prática de constelação com o campo presencial",
      "Vivências e exercícios de percepção em grupo",
      "Acompanhamento direto do docente",
    ],
    price: {
      label: "Pré-inscrição",
      value: "Sob consulta",
      note: "Condições enviadas após a aplicação",
    },
    cta: { text: "Fazer minha aplicação", href: APPLY_URL_PRESENCIAL, variant: "primary" },
    featured: true,
  },
  {
    id: "hibrida",
    tag: "Turma híbrida",
    title: "Híbrida",
    pitch:
      "Para quem mora longe ou não consegue estar presente todos os meses: parte dos módulos online ao vivo, com encontros presenciais nos momentos-chave da formação.",
    specs: [
      { k: "Formato", v: "Online ao vivo + presencial" },
      { k: "Duração", v: "10 meses · Ago/26 a Mai/27" },
      { k: "Turma", v: "Reduzida" },
    ],
    benefits: [
      "Módulos teóricos online, ao vivo e com interação",
      "Encontros presenciais nos módulos de prática",
      "Mesmo conteúdo e mesma certificação",
      "Gravações para revisão dos módulos online",
    ],
    price: {
      label: "Pré-inscrição",
      value: "Sob consulta",
      note: "Condições enviadas após a aplicação",
    },
    cta: { text: "Fazer minha aplicação", href: APPLY_URL_HIBRIDA, variant: "ghost" },
    featured: false,
  },
];

const ModalitiesSection = () => (
  <section id="inscricao" className="section-white section-block relative overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(60% 50% at 50% 15%, hsl(220 86% 56% / 0.07), transparent 70%)",
      }}
    />
    <div className="container max-w-5xl relative">
      <SectionTitle
        eyebrow="Modalidades"
        label="Escolha como você quer viver a formação"
        subtitle="As duas turmas percorrem os mesmos dez módulos. O que muda é a forma de estar presente. As vagas são limitadas e o ingresso acontece por aplicação."
      />

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
        {modalities.map((m) => (
          <article
            key={m.id}
            className={`${m.featured ? "card-elevated-accent" : "card-plain"} flex flex-col h-full rounded-2xl p-5 md:p-7 transition-transform duration-300 md:hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="label-section text-[11px]">{m.tag}</span>
              {m.badge && (
                <span className="shrink-0 rounded-full bg-accent/10 text-accent text-[10.5px] uppercase tracking-[0.14em] font-body font-semibold px-2.5 py-1">
                  {m.badge}
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-foreground">
              {m.title}
            </h3>

            <p className="text-[15px] leading-[1.7] text-foreground/80 font-body mt-2.5 mb-5">
              {m.pitch}
            </p>

            <dl className="border-y border-border py-4 space-y-2.5">
              {m.specs.map((s) => (
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
              {m.benefits.map((b) => (
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
                {m.price.label}
              </p>
              <p className="font-display text-2xl font-semibold text-foreground tracking-tight">
                {m.price.value}
                {m.price.suffix && (
                  <span className="text-muted-foreground font-body text-[14px] font-normal ml-2">
                    {m.price.suffix}
                  </span>
                )}
              </p>
              <p className="text-[13px] text-muted-foreground font-body mt-1">{m.price.note}</p>

              <a
                href={m.cta.href}
                data-analytics="apply"
                onClick={() => track("apply_click", { modality: m.id })}
                className={`${m.cta.variant === "primary" ? "btn-primary" : "btn-ghost-dark"} w-full mt-5`}
              >
                {m.cta.text}
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="text-[13.5px] text-muted-foreground max-w-lg mx-auto mt-6 text-center">
        Não sabe qual escolher? Faça a aplicação em qualquer uma delas — a modalidade pode ser
        ajustada na conversa de ingresso.
      </p>
    </div>
  </section>
);

export default ModalitiesSection;