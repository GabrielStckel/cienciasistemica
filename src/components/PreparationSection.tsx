import SectionTitle from "./SectionTitle";

const topics = [
  "Pensamento sistêmico como paradigma científico",
  "Teoria sistêmica das constelações familiares segundo Bert Hellinger",
  "Funcionamento da consciência holográfica e seus pressupostos",
  "Funcionamento e interferência do campo do pensamento",
  "Bases meditativas e transcendentais de ancoramento",
  "Exercícios de percepção em todos os encontros",
];

const PreparationSection = () => (
  <section className="section-white py-12 md:py-24 relative overflow-hidden">
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

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
        {topics.map((t, i) => (
          <li key={t} className="group h-full">
            <div
              className="relative h-full rounded-2xl p-5 md:p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(210 25% 97%) 100%)",
                border: "1px solid hsl(var(--border))",
                boxShadow:
                  "0 1px 0 hsl(0 0% 100%) inset, 0 12px 30px -18px hsl(214 67% 14% / 0.18)",
              }}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full font-display text-[13px] font-semibold shrink-0"
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
              <p className="text-foreground text-[14.5px] md:text-[15px] leading-snug font-body pt-2 text-left">
                {t}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PreparationSection;