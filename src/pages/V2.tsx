import { Instagram } from "lucide-react";

// Palette local à V2 — editorial / warm / oxblood
const C = {
  bg: "#f1ebe1",        // warm cream
  bgAlt: "#e7dfd1",     // sand
  ink: "#1a1410",       // near-black brown
  ink2: "#3a2f27",
  muted: "#7a6a5c",
  line: "#d4c8b5",
  accent: "#8b2e1f",    // oxblood
  accent2: "#c9744a",   // terracotta
};

const modules = [
  { n: "I", t: "A ciência sistêmica", d: "Desmontar a ilusão da separação" },
  { n: "II", t: "Ciclos da vida", d: "Aceitar o que termina para perceber o que começa" },
  { n: "III", t: "Pertencimento", d: "Encarar o medo da exclusão" },
  { n: "IV", t: "Ordem e equilíbrio", d: "Sentir o custo de estar fora do lugar" },
  { n: "V", t: "Pais e filhos", d: "Atravessar as dinâmicas que moldaram você" },
  { n: "VI", t: "Saúde e sexualidade", d: "O corpo como campo sistêmico" },
  { n: "VII", t: "Amor de casal", d: "As leis invisíveis das relações" },
  { n: "VIII", t: "Propósito e sentido da vida", d: "Sua função no sistema maior" },
  { n: "IX", t: "Espiritualidade sistêmica", d: "Aprender a ajudar sem invadir" },
  { n: "X", t: "Prática das constelações", d: "A percepção em ação" },
];

const transitions = [
  ["A mente que analisava", "a percepção que integra"],
  ["O medo que paralisava", "a abertura para o sentir"],
  ["Os padrões que você entendia", "você percebe antes de repeti-los"],
];

const sinais = [
  "O padrão se repete, mesmo depois de você entendê-lo.",
  "A reação automática vem antes da consciência.",
  "O condicionamento ainda vence a escolha.",
  "Insights poderosos que não viraram transformação.",
];

const leva = [
  { t: "Como constelador", d: "Conduzindo processos sistêmicos com profundidade" },
  { t: "Como profissional", d: "Trazendo maior equilíbrio para seus atendimentos na sua área de atuação" },
  { t: "Como ser humano", d: "Vivendo com mais presença e menos reatividade" },
];

const objections = [
  { o: "\u201CJá investi muito em autoconhecimento\u201D", r: "Exato. Você já investiu em conteúdos. Agora é hora de investir em percepção." },
  { o: "\u201CPosso fazer online\u201D", r: "Você sabe que não é a mesma coisa. A percepção sistêmica acontece na presença." },
  { o: "\u201CBC é longe da minha cidade\u201D", r: "1 fim de semana por mês. A imersão vale cada quilômetro." },
  { o: "\u201CTenho medo do que vou encontrar\u201D", r: "Esse medo é exatamente o que a formação vai te ajudar a atravessar." },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block text-[11px] font-body font-semibold uppercase tracking-[0.28em]"
    style={{ color: C.accent }}
  >
    {children}
  </span>
);

const SectionHead = ({
  num,
  eyebrow,
  title,
  light = false,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  light?: boolean;
}) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-baseline gap-6 mb-5">
      <span
        className="font-display italic text-3xl md:text-4xl"
        style={{ color: light ? C.bg : C.accent }}
      >
        §{num}
      </span>
      <span
        className="h-px flex-1"
        style={{ background: light ? "rgba(241,235,225,0.25)" : C.line }}
      />
      <Eyebrow>{eyebrow}</Eyebrow>
    </div>
    <h2
      className="font-display font-normal tracking-tight leading-[1.05] text-[2rem] md:text-[3rem] max-w-3xl"
      style={{ color: light ? C.bg : C.ink }}
    >
      {title}
    </h2>
  </div>
);

const V2 = () => (
  <main className="min-h-screen" style={{ background: C.bg, color: C.ink }}>
    {/* NAV */}
    <nav
      className="sticky top-0 z-30 backdrop-blur"
      style={{
        background: `${C.bg}cc`,
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <span className="font-display italic text-lg" style={{ color: C.ink }}>
          Jonas Peres
        </span>
        <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.22em] font-body" style={{ color: C.ink2 }}>
          <a href="#problema" className="hover:opacity-60">Problema</a>
          <a href="#temas" className="hover:opacity-60">Temas</a>
          <a href="#investimento" className="hover:opacity-60">Investimento</a>
          <a href="#inscricao" className="hover:opacity-60">Inscrição</a>
        </div>
        <a
          href="#inscricao"
          className="text-[12px] uppercase tracking-[0.22em] font-body font-semibold px-4 py-2 border"
          style={{ borderColor: C.ink, color: C.ink }}
        >
          Quero saber mais
        </a>
      </div>
    </nav>

    {/* HERO — magazine asymmetric */}
    <header className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-end">
          <div className="md:col-span-8">
            <Eyebrow>Edição 2026 · No 01</Eyebrow>
            <h1
              className="mt-8 font-display font-normal leading-[0.95] tracking-[-0.02em] text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem]"
              style={{ color: C.ink }}
            >
              Entender
              <br />
              <span style={{ color: C.muted }}>não é</span>
              <br />
              <span className="italic" style={{ color: C.accent }}>transformar.</span>
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-6">
            <div
              className="border-t pt-6"
              style={{ borderColor: C.ink }}
            >
              <p
                className="font-body text-[15px] leading-[1.7]"
                style={{ color: C.ink2 }}
              >
                Para quem já está em uma caminhada de autoconhecimento e quer
                ir à <em>raiz</em>. Uma formação presencial em Balneário Camboriú
                que te leva do entendimento à percepção.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#inscricao"
                  className="inline-flex items-center justify-between px-5 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ background: C.ink, color: C.bg }}
                >
                  Quero saber mais
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#problema"
                  className="inline-flex items-center justify-between px-5 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] border"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Entender a proposta
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* hero meta strip */}
        <div
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-y-6 border-t border-b py-6 font-body text-[12px] uppercase tracking-[0.22em]"
          style={{ borderColor: C.ink, color: C.ink2 }}
        >
          <div><span style={{ color: C.accent }}>·</span> 10 módulos</div>
          <div><span style={{ color: C.accent }}>·</span> 1 fim de semana / mês</div>
          <div><span style={{ color: C.accent }}>·</span> Balneário Camboriú</div>
          <div><span style={{ color: C.accent }}>·</span> Presencial</div>
        </div>
      </div>
    </header>

    {/* PROBLEMA */}
    <section id="problema" className="py-20 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHead
          num="01"
          eyebrow="O ponto de partida"
          title={<>O problema não é falta de <em className="italic" style={{ color: C.accent }}>informação</em>.</>}
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <p
              className="font-display text-[1.4rem] md:text-[1.7rem] leading-[1.3]"
              style={{ color: C.ink }}
            >
              Você já leu, estudou, fez terapias. Acumulou conceitos. Mas o modo
              de funcionamento continua o mesmo.
            </p>
            <p className="mt-6 font-body text-[15px] leading-[1.85]" style={{ color: C.ink2 }}>
              Porque o entendimento acontece na mente — e a mente fragmenta. Ela
              explica, categoriza, arquiva. Te dá a <em>sensação</em> de
              compreensão sem te dar a <em>experiência</em> da mudança.
            </p>
          </div>

          <div className="md:col-span-7">
            <p
              className="font-body text-[11px] uppercase tracking-[0.28em] mb-6"
              style={{ color: C.muted }}
            >
              Os sinais que você reconhece
            </p>
            <div className="grid sm:grid-cols-2 gap-px" style={{ background: C.line }}>
              {sinais.map((s, i) => (
                <div
                  key={i}
                  className="p-6 md:p-7 flex flex-col gap-4"
                  style={{ background: C.bg }}
                >
                  <span
                    className="font-display italic text-2xl"
                    style={{ color: C.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[1.05rem] leading-[1.4]" style={{ color: C.ink }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-20 md:mt-28 border-t border-b py-12"
          style={{ borderColor: C.ink }}
        >
          <p
            className="font-display text-[1.8rem] md:text-[2.6rem] leading-[1.1] max-w-4xl"
            style={{ color: C.ink }}
          >
            O que falta não é mais informação —
            <br />
            <span className="italic" style={{ color: C.accent }}>
              é um novo modo de funcionamento.
            </span>
          </p>
        </div>
      </div>
    </section>

    {/* PROMESSA — de/para horizontal */}
    <section className="py-20 md:py-32" style={{ background: C.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHead
          num="02"
          eyebrow="O que muda"
          title={<>Um novo <em className="italic" style={{ color: C.accent }}>sistema operacional</em> interno.</>}
        />

        <div className="space-y-px" style={{ background: C.line }}>
          {transitions.map(([from, to], i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-6 md:gap-10 items-center px-6 md:px-10 py-10"
              style={{ background: C.bgAlt }}
            >
              <div className="md:col-span-1 font-display italic text-3xl" style={{ color: C.accent }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p
                className="md:col-span-5 font-body text-[1.1rem] leading-snug"
                style={{ color: C.muted, textDecoration: "line-through", textDecorationColor: `${C.muted}66` }}
              >
                {from}
              </p>
              <div className="md:col-span-1 font-display italic text-3xl" style={{ color: C.accent2 }}>
                →
              </div>
              <p
                className="md:col-span-5 font-display text-[1.4rem] md:text-[1.7rem] leading-[1.2]"
                style={{ color: C.ink }}
              >
                {to}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TEMAS — grid magazine */}
    <section id="temas" className="py-20 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHead
          num="03"
          eyebrow="A estrutura · 10 módulos"
          title={<>Os grandes temas <span style={{ color: C.muted }}>da vida.</span></>}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: C.line }}>
          {modules.map((m) => (
            <article
              key={m.n}
              className="p-7 md:p-8 min-h-[220px] flex flex-col justify-between transition-colors"
              style={{ background: C.bg }}
            >
              <div
                className="font-display italic text-[2.5rem] leading-none"
                style={{ color: C.accent }}
              >
                {m.n}
              </div>
              <div>
                <h3
                  className="font-display text-[1.35rem] leading-[1.2] mb-3"
                  style={{ color: C.ink }}
                >
                  {m.t}
                </h3>
                <p className="font-body text-[14px] leading-[1.6]" style={{ color: C.muted }}>
                  {m.d}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-16 font-display italic text-[1.4rem] md:text-[1.8rem] leading-[1.3] max-w-3xl"
          style={{ color: C.ink2 }}
        >
          A percepção se desenvolve enfrentando os grandes temas —
          <span style={{ color: C.accent }}> não os evitando.</span>
        </p>
      </div>
    </section>

    {/* O QUE VOCÊ LEVA — dark oxblood block */}
    <section className="py-20 md:py-32" style={{ background: C.ink, color: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHead
          num="04"
          eyebrow="O que você leva"
          title={<>Percepção para você — <span style={{ color: C.accent2 }}>e para os outros.</span></>}
          light
        />

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {leva.map((s, i) => (
            <div key={s.t} className="relative">
              <div
                className="font-display italic text-[3.5rem] leading-none mb-6"
                style={{ color: C.accent2 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-display text-[1.6rem] leading-[1.15] mb-4"
                style={{ color: C.bg }}
              >
                {s.t}
              </h3>
              <p
                className="font-body text-[14px] leading-[1.7]"
                style={{ color: "rgba(241,235,225,0.65)" }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MÉTODO — por que presencial */}
    <section className="py-20 md:py-32" style={{ background: C.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Eyebrow>§05 · O método</Eyebrow>
          <h2
            className="mt-6 font-display text-[2rem] md:text-[2.6rem] leading-[1.05]"
            style={{ color: C.ink }}
          >
            Por que <em className="italic" style={{ color: C.accent }}>presencial</em>?
          </h2>
        </div>
        <div className="md:col-span-8 md:pl-10 md:border-l" style={{ borderColor: C.ink }}>
          <p className="font-display text-[1.6rem] md:text-[2rem] leading-[1.2] mb-8" style={{ color: C.ink }}>
            Porque percepção <span style={{ color: C.muted }}>não se desenvolve por Zoom.</span>
          </p>
          <p className="font-body text-[15px] leading-[1.85] mb-5" style={{ color: C.ink2 }}>
            A constelação presencial é uma experiência de campo — você sente as
            dinâmicas no corpo, no espaço, no olho, na postura. A mediação da
            tela corta exatamente o que você precisa desenvolver: a linguagem
            integrada do sentir.
          </p>
          <p className="font-body text-[15px] leading-[1.85]" style={{ color: C.ink2 }}>
            Balneário Camboriú não é um detalhe logístico. É o ambiente de
            imersão que permite que você saia da rotina mental e entre na
            experiência perceptiva sem interrupções.
          </p>
        </div>
      </div>
    </section>

    {/* INVESTIMENTO */}
    <section id="investimento" className="py-20 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHead
          num="06"
          eyebrow="Valores"
          title={<>O <em className="italic" style={{ color: C.accent }}>investimento</em>.</>}
        />

        <div
          className="border grid md:grid-cols-12"
          style={{ borderColor: C.ink }}
        >
          {/* price */}
          <div
            className="md:col-span-5 p-8 md:p-12 border-b md:border-b-0 md:border-r"
            style={{ borderColor: C.ink, background: C.bgAlt }}
          >
            <Eyebrow>Formação 2026</Eyebrow>
            <p className="mt-6 font-body text-[13px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>
              10 módulos presenciais · BC
            </p>
            <div className="mt-6">
              <p
                className="font-display text-[3rem] md:text-[4.5rem] leading-none"
                style={{ color: C.ink }}
              >
                R$ 5.000
              </p>
              <p
                className="font-display italic text-[1.4rem] md:text-[1.8rem] mt-2"
                style={{ color: C.muted }}
              >
                a R$ 10.000
              </p>
            </div>
            <p className="mt-8 font-body text-[13px] leading-[1.7]" style={{ color: C.accent }}>
              Menos de R$ 1.000/mês — pelo custo de algumas sessões de terapia,
              você transforma seu modo de funcionamento para a vida inteira.
            </p>
          </div>

          {/* incluso */}
          <div className="md:col-span-7 p-8 md:p-12">
            <p className="font-body text-[11px] uppercase tracking-[0.28em] mb-6" style={{ color: C.muted }}>
              O que está incluso
            </p>
            <ul className="space-y-4">
              {[
                "Apostila exclusiva com o método",
                "Plataforma digital complementar",
                "Prática supervisionada com correção ao vivo",
                "Comunidade entre módulos",
                "Certificação da formação",
                "Menos de R$ 1.000/mês",
              ].map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] gap-5 items-baseline pb-4 border-b"
                  style={{ borderColor: C.line }}
                >
                  <span className="font-display italic text-sm" style={{ color: C.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-[15px]" style={{ color: C.ink }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#inscricao"
              className="mt-10 inline-flex items-center gap-3 px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ background: C.accent, color: C.bg }}
            >
              Quero saber mais
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* OBJEÇÕES — Q&A magazine */}
    <section className="py-20 md:py-32" style={{ background: C.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHead
          num="07"
          eyebrow="Dúvidas frequentes"
          title={<>Quebra de <em className="italic" style={{ color: C.accent }}>objeções</em>.</>}
        />

        <div className="space-y-px" style={{ background: C.line }}>
          {objections.map((q, i) => (
            <div
              key={q.o}
              className="grid md:grid-cols-12 gap-6 md:gap-10 px-6 md:px-10 py-10"
              style={{ background: C.bgAlt }}
            >
              <div className="md:col-span-1 font-display italic text-3xl" style={{ color: C.accent }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p
                className="md:col-span-5 font-display text-[1.3rem] md:text-[1.5rem] leading-[1.25]"
                style={{ color: C.ink }}
              >
                {q.o}
              </p>
              <p
                className="md:col-span-6 font-body text-[15px] leading-[1.85]"
                style={{ color: C.ink2 }}
              >
                {q.r}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="inscricao" className="py-24 md:py-36" style={{ background: C.ink, color: C.bg }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <Eyebrow>Última chamada</Eyebrow>
        <h2
          className="mt-8 font-display font-normal leading-[1.0] tracking-[-0.02em] text-[2.4rem] md:text-[4.5rem]"
          style={{ color: C.bg }}
        >
          Quero receber a programação completa da
          <br />
          <span className="italic" style={{ color: C.accent2 }}>
            Formação em Ciência Sistêmica
          </span>
        </h2>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center gap-3 px-8 py-5 font-body text-sm font-semibold uppercase tracking-[0.25em]"
          style={{ background: C.bg, color: C.ink }}
        >
          Quero receber
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>

    <footer className="py-12" style={{ background: C.ink, color: C.bg, borderTop: `1px solid rgba(241,235,225,0.1)` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display italic text-base" style={{ color: C.bg }}>
          Jonas Peres
        </p>
        <a
          href="https://www.instagram.com/jonas_peress/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
      </div>
    </footer>
  </main>
);

export default V2;