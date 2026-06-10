import SectionTitle from "./SectionTitle";

const topics = [
  "Pensamento sistêmico como paradigma científico",
  "Teoria sistêmica das constelações familiares segundo Bert Hellinger",
  "Funcionamento da consciência holográfica e seus pressupostos",
  "Funcionamento e interferência do campo do pensamento",
  "Bases meditativas e transcendentais de ancoramento",
  "Exercícios de percepção em todos os encontros",
];

/* Posições orgânicas para distribuir os balões em desktop */
const bubblePositions = [
  "md:translate-x-[4%] md:translate-y-2",
  "md:translate-x-[-6%] md:translate-y-6",
  "md:translate-x-[8%] md:-translate-y-3",
  "md:translate-x-[-3%] md:translate-y-4",
  "md:translate-x-[6%] md:-translate-y-2",
  "md:translate-x-[-7%] md:translate-y-3",
];

const PreparationSection = () => (
  <section className="section-white py-16 md:py-24 relative overflow-hidden">
    {/* Sutil halo de fundo */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{
        background:
          "radial-gradient(60% 50% at 50% 20%, hsl(220 86% 56% / 0.06), transparent 70%)",
      }}
    />
    <div className="container max-w-5xl relative">
      <SectionTitle
        eyebrow="Método fenomenológico"
        label="Tudo que tu estudaste até aqui não te servirá para nada"
        subtitle="O segredo do poder das constelações está na abertura de um vínculo de comunicação inconsciente, que se origina da vulnerabilidade. Antes de mais nada, este curso é um processo transformador de autoconhecimento — começamos a olhar para o outro a partir de nós mesmos."
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
        {topics.map((t, i) => (
          <li
            key={t}
            className={`group relative ${bubblePositions[i] ?? ""}`}
          >
            <div
              className="relative rounded-[2rem] p-7 md:p-8 flex flex-col gap-4 items-start transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(210 25% 97%) 100%)",
                border: "1px solid hsl(var(--border))",
                boxShadow:
                  "0 1px 0 hsl(0 0% 100%) inset, 0 12px 30px -18px hsl(214 67% 14% / 0.18)",
              }}
            >
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full font-display text-sm font-semibold shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(220 86% 56%), hsl(220 86% 64%))",
                  color: "hsl(var(--accent-foreground))",
                  boxShadow:
                    "0 8px 20px -8px hsl(220 86% 56% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground text-[15.5px] md:text-base leading-relaxed font-body">
                {t}
              </p>
              {/* Cauda do balão */}
              <span
                aria-hidden
                className="absolute -bottom-2 left-10 w-4 h-4 rotate-45"
                style={{
                  background: "hsl(210 25% 97%)",
                  borderRight: "1px solid hsl(var(--border))",
                  borderBottom: "1px solid hsl(var(--border))",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PreparationSection;