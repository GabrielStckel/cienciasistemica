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
  <section className="section-white py-16 md:py-24">
    <div className="container max-w-3xl">
      <SectionTitle
        eyebrow="Método fenomenológico"
        label="Tudo que tu estudaste até aqui não te servirá para nada"
        subtitle="O segredo do poder das constelações está na abertura de um vínculo de comunicação inconsciente, que se origina da vulnerabilidade. Antes de mais nada, este curso é um processo transformador de autoconhecimento — começamos a olhar para o outro a partir de nós mesmos."
      />
      <ul className="grid sm:grid-cols-2 gap-3 mt-10">
        {topics.map((t, i) => (
          <li
            key={t}
            className="card-refined border-accent-left p-5 flex gap-4 items-start"
          >
            <span className="font-display text-accent text-sm font-semibold mt-0.5 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-foreground/85 text-[14px] leading-relaxed font-body font-light">
              {t}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PreparationSection;