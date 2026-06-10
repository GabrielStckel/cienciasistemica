import SectionTitle from "./SectionTitle";

const blocks = [
  {
    label: "O que é",
    title: "A tua reinvenção",
    body: "É a tua reinvenção: a construção de um novo modo de viver, onde tu encontrarás leveza e fluidez. É a construção de uma postura que traz compreensão sobre como tu funcionas e o que te motiva, bem como te dá o poder de compreender e auxiliar ao outro. E ainda, organiza as tuas inteligências emocional, espiritual e mental, colocando tudo no seu lugar.",
  },
  {
    label: "Para que serve",
    title: "Te coloca no teu lugar e te faz tomar a vida",
    body: "A formação para te transformar: te coloca no teu lugar e te faz tomar a vida. É isso exatamente o que tu buscas e precisas, mesmo sem saber. Tu vais sair de uma vida de obrigações, eliminar dúvidas e inseguranças, e mergulhar no sentido da tua vida. O sentido como direção — te mostra para onde ir — e como significado, te faz perceber o que vale a pena ser vivido.",
  },
  {
    label: "Como acontece",
    title: "Uma experiência coletiva de 10 meses",
    body: "É uma experiência coletiva onde trabalharemos durante 10 (dez) meses para o desenvolvimento dos aspectos fundamentais da construção de um constelador; a denominada postura sistêmica. Neste processo, desenvolveremos juntos a transcendência do ego, a ausência de intenção, o destemor e a confiança na vida — virtudes essenciais para que seja possível a construção de uma capacidade perceptiva fidedigna ao que o campo sistêmico requer do constelador.",
  },
];

const AboutCourseSection = () => (
  <section className="section-muted py-6 md:py-10">
    <div className="container max-w-3xl">
      <div className="mb-5 md:mb-6">
        <SectionTitle eyebrow="A formação" label="Sobre o curso" />
      </div>
      <div className="grid gap-2 md:gap-2.5 mt-1 md:mt-1">
        {blocks.map((b) => (
          <article key={b.label} className="card-refined border-accent-left p-5 md:p-7">
            <div className="label-section mb-3">{b.label}</div>
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 font-semibold tracking-tight">{b.title}</h3>
            <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light text-justify">{b.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AboutCourseSection;