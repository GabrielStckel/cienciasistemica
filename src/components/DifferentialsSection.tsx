import SectionTitle from "./SectionTitle";

const DifferentialsSection = () => (
  <section className="section-muted py-16 md:py-24">
    <div className="container max-w-3xl">
      <SectionTitle eyebrow="Nossos diferenciais" label="Além das constelações" />
      <div className="space-y-6 text-foreground/85 text-[15px] leading-[1.85] font-body font-light">
        <p>
          A ciência sistêmica está além das constelações. A obra de Bert
          Hellinger é uma das vertentes de um novo paradigma de funcionamento
          da consciência. Ao longo de mais de 10 anos atuando como constelador,
          auxiliei muitos profissionais de diversas áreas — sobretudo
          consteladores — a se sentirem prontos para atuar e, principalmente, a
          desempenhar suas funções de ajudantes com profundidade e eficiência,
          sem se emaranharem com o conteúdo de seus clientes e pacientes.
        </p>
        <p>
          O referencial teórico robusto e a experiência vivencial completa
          viabilizados no curso servem a todos os que desejam atuar como
          profissionais da ajuda, e também àqueles que buscam se conhecer,
          desenvolver sua espiritualidade e expandir sua consciência e modo de
          pensar.
        </p>
        <p className="font-display text-xl md:text-2xl text-foreground font-semibold tracking-tight pt-2">
          A terapia não é o suficiente — é preciso aprender a viver. E isso tu
          encontrarás nesta formação.
        </p>
      </div>
    </div>
  </section>
);

export default DifferentialsSection;