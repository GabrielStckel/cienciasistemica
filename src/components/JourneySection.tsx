import SectionTitle from "./SectionTitle";

const JourneySection = () => (
  <section className="section-white py-16 md:py-24">
    <div className="container max-w-3xl">
      <SectionTitle
        eyebrow="Sua jornada"
        label="Como será o ingresso no curso"
      />
      <div className="card-refined border-accent-left p-7 md:p-9">
        <div className="label-section mb-3">Passo 01 · Formulário</div>
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 font-semibold tracking-tight">
          Um mergulho inicial na tua história
        </h3>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light">
          Você preencherá um formulário detalhado fornecendo informações vitais
          sobre a tua história e sobre os teus anseios. É a partir daí que
          começamos a construir, juntos, a tua trajetória dentro da formação.
        </p>
      </div>
    </div>
  </section>
);

export default JourneySection;