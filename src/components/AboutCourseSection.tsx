import SectionTitle from "./SectionTitle";

const blocks = [
  {
    label: "O que é",
    title: "A tua reinvenção",
    body: "É a construção de um novo modo de viver, onde tu encontrarás leveza e fluidez. Uma postura que traz compreensão sobre como tu funcionas e o que te motiva, e organiza as tuas inteligências emocional, espiritual e mental — colocando tudo no seu lugar.",
  },
  {
    label: "Para que serve",
    title: "Te coloca no teu lugar e te faz tomar a vida",
    body: "Tu vais sair de uma vida de obrigações, eliminar dúvidas e inseguranças, e mergulhar no sentido da tua vida. O sentido como direção — para onde ir — e como significado, te fazendo perceber o que vale a pena ser vivido.",
  },
  {
    label: "Como acontece",
    title: "Uma experiência coletiva de 10 meses",
    body: "Trabalharemos juntos no desenvolvimento dos aspectos fundamentais da postura sistêmica: transcendência do ego, ausência de intenção, destemor e confiança na vida — virtudes essenciais para uma capacidade perceptiva fidedigna ao que o campo sistêmico requer do constelador.",
  },
];

const AboutCourseSection = () => (
  <section className="section-muted py-16 md:py-24">
    <div className="container max-w-3xl">
      <SectionTitle eyebrow="A formação" label="Sobre o curso" />
      <div className="grid gap-5 md:gap-6">
        {blocks.map((b) => (
          <article key={b.label} className="card-refined border-accent-left p-6 md:p-8">
            <div className="label-section mb-3">{b.label}</div>
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 font-semibold tracking-tight">{b.title}</h3>
            <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light">{b.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AboutCourseSection;