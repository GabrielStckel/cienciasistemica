import { Instagram } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const modules = [
  { n: "I", t: "A ciência sistêmica", date: "29–30 ago 2026", d: "Desmontar a ilusão da separação" },
  { n: "II", t: "Ciclos da vida", date: "12–13 set 2026", d: "Aceitar o que termina para perceber o que começa" },
  { n: "III", t: "Pertencimento", date: "10–11 out 2026", d: "Encarar o medo da exclusão" },
  { n: "IV", t: "Ordem e equilíbrio", date: "14–15 nov 2026", d: "Sentir o custo de estar fora do lugar" },
  { n: "V", t: "Pais e filhos", date: "19–20 dez 2026", d: "Atravessar as dinâmicas que moldaram você" },
  { n: "VI", t: "Saúde e sexualidade", date: "30–31 jan 2027", d: "O corpo como campo sistêmico" },
  { n: "VII", t: "Amor de casal", date: "27–28 fev 2027", d: "As leis invisíveis das relações" },
  { n: "VIII", t: "Propósito e sentido da vida", date: "27–28 mar 2027", d: "Sua função no sistema maior" },
  { n: "IX", t: "Espiritualidade sistêmica", date: "24–25 abr 2027", d: "Aprender a ajudar sem invadir" },
  { n: "X", t: "Prática das constelações", date: "29–30 mai 2027", d: "A percepção em ação" },
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

const V2 = () => (
  <main className="min-h-screen bg-background">
    {/* HERO */}
    <header className="relative gradient-hero overflow-hidden text-primary-foreground min-h-screen flex flex-col">
      {/* Background: large editorial monogram */}
      <div
        className="absolute -right-[6%] top-[8%] pointer-events-none select-none font-display font-semibold leading-none text-primary-foreground/[0.04]"
        style={{ fontSize: "clamp(20rem, 45vw, 44rem)" }}
        aria-hidden
      >
        BC
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 100%, hsl(220 86% 56% / 0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full pointer-events-none"
        style={{ background: "hsl(220 86% 56% / 0.07)", filter: "blur(140px)" }}
      />

      <nav className="relative z-20 w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <span className="font-display text-base md:text-lg font-semibold tracking-tight">
            Jonas Peres
          </span>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45">
              Edição 2026 / BC
            </span>
            <a href="#inscricao" className="btn-ghost-light text-sm">
              Quero saber mais
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.3em] uppercase text-primary-foreground/55">
            <span className="w-8 h-px bg-accent" />
            Formação · 2026
            <span className="w-px h-3 bg-primary-foreground/20" />
            <span className="text-accent">• Inscrições abertas</span>
          </div>

          <h1 className="font-display font-semibold leading-[1.02] tracking-tight text-balance text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] mb-8 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Entender
            <span> não é </span>
            <span className="italic font-light text-accent">transformar</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="max-w-2xl text-base md:text-[17px] text-primary-foreground/70 leading-[1.7] font-light font-body mb-10">
            Você já leu, estudou, fez terapias. Acumulou conceitos — mas o modo de funcionamento continua o mesmo. Esta formação presencial existe para te levar do <em>entendimento</em> à <em>percepção</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-14">
            <a href="#inscricao" className="btn-primary">
              Quero saber mais
              <span aria-hidden>→</span>
            </a>
            <a href="#problema" className="btn-ghost-light">Entender a proposta</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8 pt-10 border-t border-primary-foreground/10 max-w-4xl">
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-2">Para quem</p>
              <p className="text-[13px] text-primary-foreground/80 font-body font-light leading-relaxed">
                Já caminha no autoconhecimento e quer ir à raiz.
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-2">Formato</p>
              <p className="text-[13px] text-primary-foreground/80 font-body font-light leading-relaxed">
                10 módulos presenciais · BC
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-2">Início</p>
              <p className="text-[13px] text-primary-foreground/80 font-body font-light leading-relaxed">
                Março de 2026 · Turma limitada
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-y-2 text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
          <span>Início Mar/26</span>
          <span className="hidden md:inline">10 Módulos · 10 Meses</span>
          <span>Turma limitada</span>
        </div>
      </div>
    </header>

    {/* O PROBLEMA */}
    <section id="problema" className="section-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle eyebrow="O ponto de partida" label="O problema" />
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl">
          Você já está nessa caminhada há algum tempo. Já leu livros, participou de cursos, talvez já tenha vivido constelações. Já teve insights poderosos — momentos em que "entendeu" algo profundo sobre si mesmo.
        </p>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl mt-4">
          Mas algo ainda escapa. Porque o entendimento acontece na mente — e a mente fragmenta. Ela explica, categoriza, arquiva. Ela te dá a <em>sensação</em> de compreensão sem te dar a <em>experiência</em> da mudança.
        </p>

        <div className="mt-12 mb-12">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-body mb-6">
            Os sinais
          </p>
          <div className="divide-y divide-border border-y border-border">
            {sinais.map((s, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8 items-baseline py-5">
                <span className="font-display text-accent text-xs tracking-[0.2em]">
                  0{i + 1}
                </span>
                <p className="text-foreground/85 text-[15px] md:text-base font-body font-light leading-snug">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-6 md:pl-8 py-2 my-12">
          <p className="font-display text-2xl md:text-3xl text-foreground font-semibold tracking-tight leading-[1.25]">
            O que falta não é mais informação.
            <br />
            <span className="text-foreground/55">É um novo modo de funcionamento.</span>
          </p>
        </blockquote>

        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl">
          A formação em Ciência Sistêmica existe para isso: te tirar do modo mental/fragmentado e te levar para o modo perceptivo/integrado. Não é mais um conteúdo para você <em>entender</em>.
        </p>
        <p className="text-accent font-display text-lg md:text-xl italic mt-4">
          É um método para você perceber.
        </p>
      </div>
    </section>

    {/* A PROMESSA */}
    <section className="section-muted py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionTitle eyebrow="O que muda" label="A promessa" />
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light mb-12 max-w-2xl mx-auto text-center">
          Ao final dos 10 módulos presenciais em Balneário Camboriú, você não vai ter mais um caderno de conceitos. Você vai ter um novo sistema operacional interno.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 items-center text-[13px] uppercase tracking-[0.2em] text-muted-foreground font-body mb-6 px-1">
            <span className="text-left">De</span>
            <span aria-hidden />
            <span className="text-right text-accent">Para</span>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {transitions.map(([from, to], i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 items-center py-6"
              >
                <p className="text-foreground/55 text-[15px] md:text-base font-body font-light leading-snug">
                  {from}
                </p>
                <span
                  aria-hidden
                  className="font-display text-accent text-xl md:text-2xl leading-none"
                >
                  →
                </span>
                <p className="font-display text-base md:text-lg text-foreground font-semibold tracking-tight leading-snug text-right">
                  {to}
                </p>
              </div>
            ))}
          </div>

          <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light mt-12 text-center max-w-2xl mx-auto">
            E dessa percepção, você aprende a aplicar a sabedoria que emerge do sentir na sua vida — e, se desejar, na vida de quem você atende.
          </p>
        </div>
      </div>
    </section>

    {/* OS GRANDES TEMAS */}
    <section className="section-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow="A estrutura"
          label="Os grandes temas da vida"
          subtitle="10 módulos presenciais · 1 fim de semana por mês · Balneário Camboriú"
        />
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light mb-12 text-center max-w-2xl mx-auto">
          Esta formação é um mergulho vivencial e terapêutico nos temas fundamentais da existência humana. Cada módulo atravessa um território — e cada território exige que você supere um medo para acessar a percepção que está além dele.
        </p>
        <ol className="relative border-l border-border ml-2 md:ml-4 mt-10">
          {modules.map((m) => (
            <li key={m.n} className="pl-6 md:pl-8 pb-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg text-foreground font-semibold tracking-tight">
                  <span className="text-accent mr-3">{m.n}.</span>
                  {m.t}
                </h3>
                <span className="hidden md:inline text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-body tabular-nums shrink-0">{m.date}</span>
              </div>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                {m.d}
              </p>
              <p className="md:hidden mt-2 text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-body tabular-nums">
                {m.date}
              </p>
            </li>
          ))}
        </ol>
        <p className="font-display text-xl md:text-2xl text-foreground italic font-light text-center max-w-2xl mx-auto mt-10">
          É assim que a percepção se desenvolve: enfrentando os grandes temas, não os evitando.
        </p>
      </div>
    </section>

    {/* O QUE VOCÊ LEVA */}
    <section className="gradient-hero py-16 md:py-24">
      <div className="container max-w-4xl text-primary-foreground">
        <SectionTitle light eyebrow="O que você leva" label="Percepção para você — e para os outros" />
        <p className="text-primary-foreground/70 text-[15px] leading-[1.85] font-body font-light mb-12 text-center max-w-2xl mx-auto">
          Nesta formação, você não apenas desenvolve a percepção para si. Você também aprende a aplicar essa sabedoria na vida de outras pessoas.
        </p>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {leva.map((s, i) => (
            <div key={s.t} className="relative pl-6 border-l border-primary-foreground/15">
              <div className="font-display text-accent text-xs font-semibold tracking-[0.2em] mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl text-primary-foreground font-light tracking-tight mb-3">{s.t}</h3>
              <p className="text-primary-foreground/65 text-[14px] leading-relaxed font-body font-light">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* POR QUE PRESENCIAL */}
    <section className="section-muted py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle eyebrow="O método" label="Por que presencial?" />
        <p className="font-display text-2xl md:text-3xl text-foreground font-semibold tracking-tight leading-[1.25] mb-8">
          Porque percepção <span className="text-foreground/55">não se desenvolve por Zoom.</span>
        </p>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl">
          A constelação presencial é uma experiência de campo — você sente as dinâmicas no corpo, no espaço, no olho, na postura. A mediação da tela corta exatamente o que você precisa desenvolver: a linguagem integrada do sentir.
        </p>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl mt-4">
          Balneário Camboriú não é um detalhe logístico. É o ambiente de imersão que permite que você saia da rotina mental e entre na experiência perceptiva sem interrupções.
        </p>
      </div>
    </section>

    {/* INVESTIMENTO */}
    <section className="section-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle eyebrow="Valores" label="O investimento" />

        <div className="relative card-refined border-accent-left p-8 md:p-10 mb-8">
          <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-bl-lg">
            Formação 2026
          </div>

          <p className="text-muted-foreground text-sm font-body mb-1">
            10 módulos presenciais em Balneário Camboriú
          </p>
          <p className="font-display text-4xl md:text-5xl text-foreground font-semibold tracking-tight leading-none mb-2">
            De R$ 5.000
          </p>
          <p className="font-display text-lg md:text-xl text-muted-foreground font-light tracking-tight mb-8">
            a R$ 10.000
          </p>

          <div className="border-t border-border pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-5">
              O que está incluso
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Apostila exclusiva com o método",
                "Plataforma digital complementar",
                "Prática supervisionada com correção ao vivo",
                "Comunidade entre módulos",
                "Certificação da formação",
                "Menos de R$ 1.000/mês",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-accent text-lg leading-none">✓</span>
                  <span className="text-foreground/85 text-[14px] font-body font-light leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-accent text-[13px] tracking-wide font-body font-semibold text-center sm:text-left">
              Pelo custo de algumas sessões de terapia, você transforma seu modo de funcionamento para a vida inteira.
            </p>
            <a href="#inscricao" className="btn-primary shrink-0">
              Quero saber mais
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* OBJEÇÕES */}
    <section className="section-muted py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle eyebrow="Dúvidas frequentes" label="Quebra de objeções" />
        <div className="mt-12 space-y-0 divide-y divide-border border-y border-border">
          {objections.map((q, i) => (
            <div key={q.o} className="py-7 md:py-8 grid grid-cols-[auto_1fr] gap-5 md:gap-6 items-start">
              <span className="font-display text-accent text-xs font-semibold tracking-[0.2em] pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display text-base md:text-lg text-foreground font-semibold tracking-tight mb-2">
                  {q.o}
                </p>
                <p className="text-foreground/70 text-[15px] leading-[1.8] font-body font-light">
                  {q.r}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="inscricao" className="gradient-hero py-16 md:py-24">
      <div className="container max-w-4xl text-center">
        <h2 className="font-display text-2xl md:text-4xl text-primary-foreground font-semibold mb-10 leading-tight tracking-tight">
          Quero receber a programação completa da<br />
          Formação em Ciência Sistêmica
        </h2>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          QUERO RECEBER
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>

    <footer className="bg-primary py-10">
      <div className="container max-w-2xl flex flex-col items-center gap-4">
        <p className="font-display text-base font-medium text-primary-foreground tracking-wide">
          Jonas Peres
        </p>
        <a
          href="https://www.instagram.com/jonas_peress/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
        <p className="text-primary-foreground/40 text-xs font-body text-center" style={{ hyphens: "none" }}>
          © {new Date().getFullYear()} Jonas Peres · Formação em Ciência Sistêmica
        </p>
      </div>
    </footer>
  </main>
);

export default V2;