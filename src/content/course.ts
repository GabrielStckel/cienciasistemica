/**
 * FONTE ÚNICA DE VERDADE das datas e dados da formação.
 * Qualquer data, preço ou local muda AQUI e em nenhum outro lugar.
 */

export type Modality = "presencial" | "hibrida";

export const CITY = "Balneário Camboriú";
export const STATE = "Santa Catarina";
export const VENUE = `${CITY} · ${STATE}`;

export const APPLY_URL: Record<Modality, string> = {
  presencial: "#inscricao",
  hibrida: "#inscricao",
};

export const modules = [
  { n: "I",    title: "A ciência sistêmica",                     desc: "Introdução ao pensamento sistêmico." },
  { n: "II",   title: "Ciclos da vida e postura fenomenológica", desc: "As Leis Sistêmicas: pertencimento." },
  { n: "III",  title: "As Leis Sistêmicas",                      desc: "Ordem e equilíbrio." },
  { n: "IV",   title: "O amor em movimento",                     desc: "Pais e filhos." },
  { n: "V",    title: "O amor em movimento",                     desc: "O amor de casal." },
  { n: "VI",   title: "Saúde e sexualidade",                     desc: "O corpo como campo sistêmico." },
  { n: "VII",  title: "A vida no mundo",                         desc: "Função sistêmica, propósito e sentido da vida." },
  { n: "VIII", title: "Espiritualidade sistêmica",               desc: "As ordens da ajuda." },
  { n: "IX",   title: "A prática das constelações",              desc: "Vivência integrada." },
  { n: "X",    title: "A prática das constelações",              desc: "Encerramento e integração." },
] as const;

/** Datas ISO do primeiro dia de cada encontro, na ordem dos módulos. */
export const schedule: Record<Modality, string[]> = {
  presencial: [
    "2026-10-10", "2026-11-14", "2026-12-19", "2027-01-23", "2027-02-20",
    "2027-03-20", "2027-04-17", "2027-05-22", "2027-06-19", "2027-07-17",
  ],
  hibrida: [
    "2027-01-30", "2027-02-27", "2027-03-13", "2027-04-24", "2027-05-29",
    "2027-06-26", "2027-07-24", "2027-08-28", "2027-09-25", "2027-10-30",
  ],
};

const MONTHS_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function parse(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
}

/** "10–11 Out 2026" — encontros são sempre sábado e domingo. */
export function formatWeekend(iso: string): string {
  const { y, m, d } = parse(iso);
  const end = new Date(Date.UTC(y, m, d + 1));
  const d2 = end.getUTCDate();
  const m2 = end.getUTCMonth();
  const y2 = end.getUTCFullYear();
  if (m2 !== m) return `${d} ${MONTHS_SHORT[m]} – ${d2} ${MONTHS_SHORT[m2]} ${y2}`;
  return `${d}–${d2} ${MONTHS_SHORT[m]} ${y}`;
}

/** "Out/26" */
export function formatShort(iso: string): string {
  const { y, m } = parse(iso);
  return `${MONTHS_SHORT[m]}/${String(y).slice(2)}`;
}

export const startsAt = (mod: Modality) => schedule[mod][0];
export const endsAt = (mod: Modality) => schedule[mod][schedule[mod].length - 1];

/** "Out/26 a Jul/27" */
export const rangeLabel = (mod: Modality) =>
  `${formatShort(startsAt(mod))} a ${formatShort(endsAt(mod))}`;

/** Módulos já com a data da turma escolhida. */
export const modulesFor = (mod: Modality) =>
  modules.map((m, i) => ({ ...m, date: formatWeekend(schedule[mod][i]) }));

export const instructor = {
  name: "Jonas Peres",
  instagram: "https://www.instagram.com/jonas_peress/",
  stats: [
    { n: "10+",    l: "anos como constelador" },
    { n: "3.000h", l: "de constelações conduzidas" },
    { n: "5.000+", l: "clientes e alunos atendidos" },
  ],
};

export type ModalityCard = {
  id: Modality;
  tag: string;
  badge?: string;
  title: string;
  pitch: string;
  benefits: string[];
  price: { label: string; value: string; suffix?: string; note: string };
  cta: { text: string; variant: "primary" | "ghost" };
  featured: boolean;
};

export const modalities: ModalityCard[] = [
  {
    id: "presencial",
    tag: "Turma presencial",
    badge: "Vagas limitadas",
    title: "Presencial",
    pitch:
      "A experiência completa: dez encontros presenciais, campo vivo, prática de constelação em grupo reduzido e contato direto com o docente.",
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
    cta: { text: "Fazer minha aplicação", variant: "primary" },
    featured: true,
  },
  {
    id: "hibrida",
    tag: "Turma híbrida",
    title: "Híbrida",
    pitch:
      "Para quem mora longe ou não consegue estar presente todos os meses: parte dos módulos online ao vivo, com encontros presenciais nos momentos-chave da formação.",
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
    cta: { text: "Fazer minha aplicação", variant: "ghost" },
    featured: false,
  },
];

/** Ficha técnica de cada card, gerada a partir do calendário. */
export const specsFor = (mod: Modality): { k: string; v: string }[] =>
  mod === "presencial"
    ? [
        { k: "Formato", v: "10 encontros presenciais" },
        { k: "Duração", v: `10 meses · ${rangeLabel("presencial")}` },
        { k: "Turma", v: "Reduzida" },
        { k: "Local", v: VENUE },
      ]
    : [
        { k: "Formato", v: "Online ao vivo + presencial" },
        { k: "Duração", v: `10 meses · ${rangeLabel("hibrida")}` },
        { k: "Turma", v: "Reduzida" },
        { k: "Presenciais", v: VENUE },
      ];
