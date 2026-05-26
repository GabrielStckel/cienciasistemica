import { Instagram } from "lucide-react";
import jonas from "@/assets/jonas-peres.jpg";

const modules = [
  { n: "01", t: "Ciência Sistêmica e pensamento sistêmico", d: "A base perceptiva que substitui a lógica linear" },
  { n: "02", t: "Ciclos da vida e postura fenomenológica", d: "A capacidade de ver sem interpretar" },
  { n: "03", t: "Lei do Pertencimento", d: "Percepção das dinâmicas de exclusão e vínculo" },
  { n: "04", t: "Lei da Ordem e Equilíbrio", d: "Leitura das hierarquias invisíveis" },
  { n: "05", t: "Amor pai / filhos", d: "A percepção dos sistemas familiares" },
  { n: "06", t: "Saúde e sexualidade", d: "A fisiologia da dinâmica sistêmica" },
  { n: "07", t: "Amor de casal", d: "Percepção dos campos relacionais" },
  { n: "08", t: "Função sistêmica, propósito e sentido", d: "A leitura do lugar de cada um no sistema" },
  { n: "09", t: "Espiritualidade sistêmica e a ajuda", d: "O curador aprende a não atrapalhar" },
  { n: "10", t: "Prática das constelações", d: "Aplicação clínica sob supervisão" },
];

const proofs = [
  { t: "Base fenomenológica", d: "O método de Husserl e Heidegger aplicado à percepção relacional." },
  { t: "Ciência Sistêmica", d: "As 3 leis de Hellinger como dinâmicas observáveis, não como crenças." },
  { t: "Neurociência", d: "95% dos comportamentos são inconscientes — a percepção sistêmica é a chave de acesso." },
  { t: "Prática supervisionada", d: "Você constela sob orientação ao vivo, com correção em tempo real." },
  { t: "Material exclusivo", d: "Apostila completa + plataforma digital + conteúdo complementar." },
  { t: "Comunidade entre módulos", d: "A prática não para na sala de aula." },
];

const audience = [
  "Psicólogos que querem um referencial sistêmico para somar à clínica",
  "Coaches que sentem que o ferramental cognitivo não alcança dinâmicas mais profundas",
  "Consteladores que já praticam mas querem fundamentação e supervisão presencial",
  "Terapeutas integrativos que buscam um método com lastro científico",
  "Profissionais de RH, liderança e gestão que atuam com dinâmicas humanas",
];

const objections = [
  { o: "“Já fiz cursos de constelação online”", r: "E você sentiu o limite. Constelação não se aprende explicando — se aprende percebendo. Presencial." },
  { o: "“BC é longe”", r: "1 fim de semana por mês. O investimento em deslocamento é ínfimo perto do retorno de uma percepção que não se perde." },
  { o: "“É caro”", r: "Você já investiu em cursos que viraram PDF na gaveta. Isso não é um curso. É uma transformação no seu modo de atender." },
  { o: "“Não tenho tempo”", r: "2 dias por mês durante 10 meses. O que você ganha em profundidade nos atendimentos compensa cada hora investida." },
];

const transitions = [
  ["Da análise fragmentada", "para a percepção integrada"],
  ["Do protocolo rígido", "para a leitura sistêmica do cliente"],
  ["Da interpretação mental", "para o sentir como ferramenta de diagnóstico"],
];

const V1 = () => (
  <main className="min-h-screen bg-background">
    {/* HERO */}
    <section className="relative gradient-hero overflow-hidden min-h-screen flex items-center text-primary-foreground">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(213 52% 24%) 1px, transparent 1px), linear-gradient(90deg, hsl(213 52% 24%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full pointer-events-none"
        style={{ background: "hsl(220 86% 56% / 0.10)", filter: "blur(120px)" }}
      />

      <div className="absolute top-8 left-8 right-8 md:left-12 md:right-12 z-20 flex items-center justify-between">
        <span className="font-display text-lg md:text-xl font-semibold tracking-tight">Jonas Peres</span>
        <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
          Para profissionais · Turma 2026
        </span>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-28 md:py-32">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 text-[10px] tracking-[0.25em] font-semibold uppercase text-primary-foreground/55">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Formação Profissional
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-foreground/25" />
          <span>10 módulos presenciais</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-foreground/25" />
          <span>Balneário Camboriú</span>
        </div>

        <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6 font-body font-semibold">
          Para terapeutas, psicólogos, coaches e consteladores
        </p>

        <h1 className="font-display font-semibold leading-[0.98] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          Você já sente que suas ferramentas alcançam a superfície, mas não tocam a{" "}
          <span className="italic font-light text-accent">raiz</span>?
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-primary-foreground/65 leading-relaxed font-light font-body mb-12">
          Existe uma diferença entre <em>explicar</em> o padrão de um cliente e <em>perceber</em> a
          dinâmica invisível que o sustenta. Esta formação presencial existe para te levar da
          técnica à percepção.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="#inscricao" className="btn-primary">
            Quero saber mais
            <span aria-hidden>→</span>
          </a>
          <a href="#problema" className="btn-ghost-light">Entender a proposta</a>
        </div>
      </div>
    </section>

    {/* O PROBLEMA */}
    <section id="problema" className="section-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="label-section mb-4">O problema</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-8">
          O limite não está no cliente — está no modo de leitura da realidade.
        </h2>
        <div className="space-y-5 text-foreground/80 text-[15px] leading-[1.85] font-body font-light">
          <p>
            Você já construiu um repertório técnico. Sabe conduzir um atendimento, aplica
            ferramentas, entrega resultados. Mas algo te incomoda.
          </p>
          <p>
            Há casos que a metodologia não alcança. Clientes que repetem padrões mesmo depois de
            “entenderem” tudo. Dinâmicas familiares que desafiam qualquer protocolo linear.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground font-semibold tracking-tight pt-2">
            O problema não é falta de técnica. É falta de acesso ao que a técnica não enxerga.
          </p>
          <p>
            Enquanto você opera no modo mental — analisando, classificando, interpretando — você
            toca apenas a superfície. As dinâmicas inconscientes que regem o comportamento humano
            não se revelam para quem apenas pensa sobre elas.
          </p>
          <p className="text-accent font-display text-lg md:text-xl italic">
            Elas se revelam para quem percebe.
          </p>
        </div>
      </div>
    </section>

    {/* A PROMESSA */}
    <section className="section-muted py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="label-section mb-4">A promessa</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-6">
          Você sai operando em um novo modo de funcionamento profissional.
        </h2>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light max-w-3xl mb-12">
          Após 10 módulos presenciais em Balneário Camboriú, você não sai com mais uma técnica no
          currículo. Você aprende a aplicar a sabedoria da percepção nos seus atendimentos — seja
          como constelador, terapeuta, psicólogo, coach ou líder. E seus clientes passam a acessar
          camadas que antes estavam fora do alcance.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {transitions.map(([from, to], i) => (
            <div key={i} className="card-refined border-accent-left p-6">
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3 font-body">
                De · Para
              </div>
              <p className="text-foreground/60 text-[15px] font-body font-light line-through decoration-1 mb-2">
                {from}
              </p>
              <p className="font-display text-lg text-foreground font-semibold tracking-tight">
                → {to}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ESTRUTURA / MÓDULOS */}
    <section className="section-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="label-section mb-4">A estrutura</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-4">
          10 módulos presenciais. Um fim de semana por mês.
        </h2>
        <p className="text-muted-foreground text-[15px] font-body font-light mb-12">
          Balneário Camboriú · Imersões vivenciais — não aulas expositivas. O desenvolvimento da
          percepção acontece ao atravessar cada tema.
        </p>
        <ol className="relative border-l border-border ml-2 md:ml-4">
          {modules.map((m) => (
            <li key={m.n} className="pl-6 md:pl-8 pb-8 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg text-foreground font-semibold tracking-tight">
                  <span className="text-accent mr-3">{m.n}.</span>
                  {m.t}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                {m.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* O MÉTODO */}
    <section className="gradient-hero py-20 md:py-28">
      <div className="container max-w-3xl text-primary-foreground">
        <div className="label-section text-accent mb-4">O método</div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-8">
          Não é teórico — é vivencial.
        </h2>
        <div className="space-y-5 text-primary-foreground/75 text-[15px] leading-[1.85] font-body font-light">
          <p>
            Cada módulo é um mergulho terapêutico nos grandes temas da vida. O desenvolvimento da
            percepção passa pela superação dos medos que cada tema evoca.
          </p>
          <p>
            Você não estuda a separação — você percebe as dinâmicas de pertencimento dentro de
            você. Você não decora a lei da ordem — você sente o que acontece no seu corpo quando
            uma hierarquia é violada.
          </p>
          <p className="font-display text-xl md:text-2xl text-primary-foreground italic font-light pt-2">
            É assim que a percepção se instala: atravessando, não explicando.
          </p>
        </div>
      </div>
    </section>

    {/* PROVA CREDÍVEL */}
    <section className="section-muted py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="label-section mb-4">A prova credível</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-12">
          Lastro científico, prática supervisionada e estrutura completa.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {proofs.map((p, i) => (
            <div key={i} className="card-refined border-accent-left p-6">
              <div className="font-display text-accent text-sm font-semibold mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg text-foreground font-semibold tracking-tight mb-2">
                {p.t}
              </h3>
              <p className="text-foreground/75 text-[14px] leading-relaxed font-body font-light">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PARA QUEM */}
    <section className="section-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="label-section mb-4">Para quem é esta formação</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-10">
          Para profissionais que já chegaram ao limite do modo mental.
        </h2>
        <ul className="space-y-3">
          {audience.map((a) => (
            <li key={a} className="flex gap-4 items-start card-refined p-5">
              <span className="text-accent font-display font-semibold mt-0.5 shrink-0">✓</span>
              <span className="text-foreground/85 text-[15px] leading-relaxed font-body font-light">
                {a}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* INSTRUTOR (resumo) */}
    <section className="section-muted py-20 md:py-28">
      <div className="container max-w-4xl grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-center">
        <img
          src={jonas}
          alt="Jonas Peres, constelador"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <div className="label-section mb-3">Quem conduz</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold leading-tight tracking-tight">
            Jonas Peres
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6 font-body">
            Constelações Familiares & Desenvolvimento Humano
          </p>
          <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light">
            Mais de 10 anos como constelador e terapeuta. Mais de 3.000 horas conduzindo
            constelações e vivências terapêuticas, presenciais e online. Mais de 5.000 clientes e
            alunos atendidos.
          </p>
        </div>
      </div>
    </section>

    {/* INVESTIMENTO */}
    <section className="section-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="label-section mb-4">O investimento</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-8">
          Formação completa: 10 módulos presenciais.
        </h2>
        <div className="card-refined border-accent-left p-7 md:p-9 mb-6">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-body mb-2">
            Investimento
          </p>
          <p className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight mb-1">
            De R$ 5.000 a R$ 10.000
          </p>
          <p className="text-foreground/70 text-[15px] font-body font-light mb-6">
            Menos de R$ 1.000/mês · Parcelamento facilitado
          </p>
          <ul className="space-y-2 text-foreground/80 text-[14px] font-body font-light">
            <li>· Apostila + plataforma inclusos</li>
            <li>· Prática supervisionada inclusa</li>
            <li>· Comunidade entre módulos inclusa</li>
          </ul>
        </div>
        <p className="text-accent text-[13px] tracking-wide font-body font-semibold">
          ⚠ Vagas presenciais limitadas — a imersão funciona porque o grupo é pequeno.
        </p>
      </div>
    </section>

    {/* OBJEÇÕES */}
    <section className="section-muted py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="label-section mb-4">Quebra de objeções</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight leading-tight mb-10">
          As perguntas que provavelmente estão na tua cabeça agora.
        </h2>
        <div className="space-y-4">
          {objections.map((q) => (
            <div key={q.o} className="card-refined p-6">
              <p className="font-display text-base md:text-lg text-foreground font-semibold tracking-tight mb-2">
                {q.o}
              </p>
              <p className="text-foreground/75 text-[15px] leading-[1.8] font-body font-light">
                {q.r}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="inscricao" className="gradient-hero py-24 md:py-32">
      <div className="container max-w-2xl text-center">
        <div className="label-section text-accent mb-4">Próximo passo</div>
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold mb-6 leading-tight tracking-tight">
          Quero receber mais informações sobre a Formação em Ciência Sistêmica.
        </h2>
        <p className="text-primary-foreground/60 text-[15px] font-body font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Deixe seu contato e nossa equipe envia o material completo da turma 2026 em Balneário
          Camboriú.
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Quero saber mais
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
        <p className="text-primary-foreground/40 text-xs font-body text-center">
          © {new Date().getFullYear()} Jonas Peres · Formação em Ciência Sistêmica
        </p>
      </div>
    </footer>
  </main>
);

export default V1;