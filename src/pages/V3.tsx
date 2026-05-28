import { Instagram } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const modules = [
  { n: "I", t: "O que é a ciência sistêmica", d: "A chave para entender tudo que virá" },
  { n: "II", t: "Os ciclos da vida", d: "Perceber que tudo termina e começa" },
  { n: "III", t: "Pertencimento", d: "De onde você veio e por que isso importa" },
  { n: "IV", t: "Ordem e equilíbrio", d: "O que acontece quando você está fora do seu lugar" },
  { n: "V", t: "Pais e filhos", d: "As dinâmicas que moldaram sua história" },
  { n: "VI", t: "Saúde e sexualidade", d: "O corpo fala o que a mente silencia" },
  { n: "VII", t: "Amor de casal", d: "O que rege as relações íntimas" },
  { n: "VIII", t: "Propósito", d: "Sua função no sistema da vida" },
  { n: "IX", t: "Espiritualidade sistêmica", d: "Aprender a confiar na ajuda" },
  { n: "X", t: "Prática", d: "Você constela" },
];

const promessa = [
  { t: "Sair do modo mental", d: "Aprender a silenciar a análise para ouvir a percepção" },
  { t: "Atravessar os medos", d: "Cada módulo é um mergulho — e cada mergulho te liberta de um condicionamento" },
  { t: "Acessar o sentir", d: "Descobrir que o corpo e a intuição têm uma sabedoria que a mente não alcança" },
  { t: "Encontrar sua essência", d: "Aprender a deixar que ela, não o medo, reja suas escolhas" },
];

const paraQuem = [
  "Para quem nunca fez constelação mas sente o chamado",
  "Para quem já tentou autoconhecimento mas sentiu que faltava profundidade",
  "Para quem está cansado de explicações superficiais",
  "Para quem quer uma transformação real, não mais um certificado na parede",
  "Para quem tem coragem de se olhar de verdade",
];

const objections = [
  { o: "\u201CNunca fiz nada parecido\u201D", r: "Perfeito. Você não precisa desaprender nada. A formação começa do zero." },
  { o: "\u201CTenho medo do que vou descobrir\u201D", r: "Esse medo é o maior sinal de que você está no caminho certo. A formação vai te dar acolhimento para atravessar cada descoberta." },
  { o: "\u201CNão sou terapeuta\u201D", r: "Você não precisa ser. A percepção sistêmica serve para qualquer vida — inclusive a sua." },
  { o: "\u201CBC é longe\u201D", r: "1 fim de semana por mês. É o investimento mais importante que você pode fazer em si mesmo." },
  { o: "\u201CÉ caro\u201D", r: "É o custo de alguns meses de terapia — mas o resultado dura a vida inteira." },
];

const V3 = () => (
  <main className="min-h-screen bg-background">
    {/* HERO */}
    <header className="relative gradient-hero overflow-hidden text-primary-foreground min-h-screen flex flex-col">
      {/* Concentric rings backdrop */}
      <div
        aria-hidden
        className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1100px] max-h-[1100px] rounded-full pointer-events-none opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, transparent 0%, transparent 38%, hsl(220 86% 56% / 0.55) 38.4%, transparent 39%, transparent 52%, hsl(220 86% 56% / 0.4) 52.4%, transparent 53%, transparent 66%, hsl(220 86% 56% / 0.3) 66.4%, transparent 67%, transparent 80%, hsl(220 86% 56% / 0.22) 80.4%, transparent 81%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
        style={{ background: "hsl(220 86% 56% / 0.16)", filter: "blur(110px)" }}
      />

      {/* Vertical side label */}
      <span
        aria-hidden
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] tracking-[0.5em] uppercase text-primary-foreground/35 font-body"
      >
        Formação · BC · 2026
      </span>

      <nav className="relative z-20 w-full">
        <div className="max-w-6xl mx-auto px-5 md:px-12 py-5 md:py-6 flex items-center justify-between">
          <span className="font-display text-sm md:text-lg font-semibold tracking-tight">
            Jonas Peres
          </span>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45">
              Edição III
            </span>
            <a href="#inscricao" className="btn-ghost-light text-xs md:text-sm px-4 md:px-5">
              Quero saber mais
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-5 md:px-12 py-10 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* LEFT — content */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase text-accent font-body font-semibold">
                Para quem está começando
              </span>
            </div>

            <h1 className="font-display font-semibold leading-[1.1] tracking-tight text-balance text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] mb-6 md:mb-8 md:max-w-[14ch] animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              Existe algo <span className="text-primary-foreground/55 italic font-light">além do que</span> seus olhos <span className="text-accent italic font-light">veem.</span>
            </h1>

            <p className="max-w-md text-[14px] md:text-base text-primary-foreground/65 leading-[1.7] md:leading-[1.75] font-light font-body mb-8 md:mb-10 text-left" style={{ hyphens: "none", textAlign: "left" }}>
              Talvez você nunca tenha feito terapia — ou já tentou e sentiu que algo fundamental ficou de fora. Essa formação presencial é para quem sente o chamado de se conhecer.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#inscricao" className="btn-primary">
                Quero saber mais
                <span aria-hidden>→</span>
              </a>
              <a href="#problema" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body underline underline-offset-4 decoration-primary-foreground/20">
                Entender a proposta
              </a>
            </div>
          </div>

          {/* RIGHT — info card */}
          <aside className="md:col-span-5 md:pl-6 w-full">
            <div
              className="relative rounded-2xl border backdrop-blur-md p-6 md:p-8"
              style={{
                background: "hsl(0 0% 100% / 0.035)",
                borderColor: "hsl(0 0% 100% / 0.10)",
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-5 md:mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50 font-body">
                  Próxima turma
                </span>
                <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-accent font-body font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Aberta
                </span>
              </div>

              <div className="mb-7 md:mb-8" style={{ textAlign: "left" }}>
                <p className="font-display text-base md:text-xl leading-[1.3] tracking-tight font-medium text-primary-foreground/70 mb-1" style={{ hyphens: "none", textAlign: "left" }}>
                  Formação em
                </p>
                <p className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.15] tracking-tight font-light text-accent italic" style={{ hyphens: "none", textAlign: "left" }}>
                  Ciência Sistêmica
                </p>
                <p className="font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-primary-foreground/45 mt-3" style={{ hyphens: "none", textAlign: "left" }}>
                  segundo Bert Hellinger
                </p>
              </div>

              <div className="grid grid-cols-3 divide-x divide-primary-foreground/10">
                {[
                  { k: "Início", v: "Mar 26" },
                  { k: "Módulos", v: "10" },
                  { k: "Local", v: "BC" },
                ].map((it) => (
                  <div key={it.k} className="px-2 text-center first:pl-0 last:pr-0">
                    <p className="text-[9px] tracking-[0.25em] uppercase text-primary-foreground/40 mb-1.5 font-body" style={{ textAlign: "center" }}>
                      {it.k}
                    </p>
                    <p className="font-display text-base md:text-lg font-semibold tracking-tight">
                      {it.v}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-primary-foreground/10 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center text-accent text-sm">→</span>
                <p className="text-[13px] text-primary-foreground/70 font-body font-light leading-snug" style={{ textAlign: "left", hyphens: "none" }}>
                  1 fim de semana por mês <br />
                  <span className="text-primary-foreground/45">durante 10 meses</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-5 md:px-12 py-4 flex flex-wrap items-center justify-between gap-2 md:gap-4 text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase text-primary-foreground/45 font-body">
          <span className="text-center w-full md:w-auto md:text-left">Presencial · Vivencial · Supervisionado</span>
          <span className="hidden md:inline">Vagas limitadas</span>
        </div>
      </div>
    </header>

    {/* O PROBLEMA */}
    <section id="problema" className="section-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle eyebrow="O ponto de partida" label="O problema" />
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl">
          Você não precisa saber o que é uma constelação para sentir que algo está errado. Talvez seja aquela sensação de que a vida está no piloto automático. De que você repete padrões que não escolheu. De que existe uma inquietação dentro de você — um chamado que não cabe em explicações lógicas.
        </p>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl mt-4">
          Você sente, mas não sabe nomear. O mundo te ensinou a funcionar pela mente: planejar, controlar, analisar, resolver. Mas existe uma camada inteira da vida que a mente não alcança — onde estão as dinâmicas invisíveis que realmente regem os seus movimentos.
        </p>

        <blockquote className="border-l-2 border-accent pl-6 md:pl-8 py-2 my-12">
          <p className="font-display text-2xl md:text-3xl text-foreground font-semibold tracking-tight leading-[1.25]">
            Você não precisa de mais um curso.
            <br />
            <span className="text-foreground/55">Você precisa de um método para sair da prisão da mente — e começar a perceber.</span>
          </p>
        </blockquote>

        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-2xl">
          São essas dinâmicas que explicam por que você repete relações que não funcionam. Por que sabota seu próprio sucesso. Por que, mesmo com tudo "no lugar", você sente que falta algo essencial.
        </p>
      </div>
    </section>

    {/* A PROMESSA */}
    <section className="section-muted py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionTitle eyebrow="O que muda" label="A promessa" />
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light mb-12 max-w-2xl mx-auto text-center">
          Você não precisa de conhecimento prévio. Não precisa ser terapeuta. Não precisa saber o que é fenomenologia. Você só precisa de uma coisa: <em>estar pronto para se encontrar</em>.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mx-auto">
          {promessa.map((p, i) => (
            <div key={p.t} className="relative pl-6 border-l border-border">
              <div className="font-display text-accent text-xs font-semibold tracking-[0.2em] mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg text-foreground font-semibold tracking-tight mb-2">
                {p.t}
              </h3>
              <p className="text-foreground/70 text-[14px] leading-relaxed font-body font-light">
                {p.d}
              </p>
            </div>
          ))}
        </div>

        <p className="text-accent font-display text-lg md:text-xl italic mt-12 text-center">
          E, se você quiser, aprender a aplicar essa sabedoria para ajudar outras pessoas.
        </p>
      </div>
    </section>

    {/* COMO FUNCIONA */}
    <section className="section-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow="Como funciona"
          label="Os 10 módulos"
          subtitle="1 fim de semana por mês · 10 meses · Balneário Camboriú"
        />
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light mb-12 text-center max-w-2xl mx-auto">
          A formação começa do zero — do primeiro conceito sistêmico — e avança módulo a módulo. Você não precisa saber nada. O método é progressivo, vivencial e supervisionado.
        </p>
        <ol className="relative border-l border-border ml-2 md:ml-4 mt-10">
          {modules.map((m) => (
            <li key={m.n} className="pl-6 md:pl-8 pb-8 relative">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <h3 className="font-display text-lg text-foreground font-semibold tracking-tight mb-1">
                <span className="text-accent mr-3">{m.n}.</span>
                {m.t}
              </h3>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                {m.d}
              </p>
            </li>
          ))}
        </ol>
        <p className="font-display text-xl md:text-2xl text-foreground italic font-light text-center max-w-2xl mx-auto mt-10">
          Cada módulo não é uma aula. É uma vivência. É assim que a percepção se instala: vivendo, não estudando.
        </p>
      </div>
    </section>

    {/* PARA QUEM É */}
    <section className="gradient-hero py-16 md:py-24">
      <div className="container max-w-3xl text-primary-foreground">
        <SectionTitle light eyebrow="Vocação" label="Para quem é" />
        <div className="mt-12 divide-y divide-primary-foreground/10 border-y border-primary-foreground/10">
          {paraQuem.map((s, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8 items-baseline py-5">
              <span className="font-display text-accent text-xs tracking-[0.2em]">
                0{i + 1}
              </span>
              <p className="text-primary-foreground/85 text-[15px] md:text-base font-body font-light leading-snug">
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* INVESTIMENTO */}
    <section className="section-white py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle eyebrow="Valores" label="O que está incluso" />

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
            a R$ 10.000 · menos de R$ 1.000/mês
          </p>

          <div className="border-t border-border pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-5">
              Incluso na formação
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "10 módulos presenciais em BC",
                "Apostila exclusiva com o método completo",
                "Plataforma digital com conteúdo complementar",
                "Prática supervisionada ao vivo",
                "Comunidade de alunos entre módulos",
                "Certificação da formação",
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
              É o investimento mais importante que você pode fazer em si mesmo.
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
          Quero saber mais sobre a<br />
          Formação em Ciência Sistêmica
        </h2>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          FALE COMIGO
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
      </div>
    </footer>
  </main>
);

export default V3;
