import SectionTitle from "./SectionTitle";

const JourneySection = () => (
  <section className="gradient-hero py-16 md:py-24">
    <div className="container max-w-3xl">
      <SectionTitle
        light
        eyebrow="Sua jornada"
        label="Como será o ingresso no curso"
      />
      <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur-sm p-7 md:p-9 border-l-2 border-l-accent">
        <div className="label-section mb-3 text-accent">Passo 01 · Formulário</div>
        <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-4 font-semibold tracking-tight">
          Um mergulho inicial na tua história
        </h3>
        <p className="text-primary-foreground/90 text-[15px] leading-[1.85] font-body font-normal text-justify">
          Você preencherá um formulário detalhado fornecendo informações vitais
          sobre a tua história e sobre os teus anseios. É a partir daí que
          começamos a construir, juntos, a tua trajetória dentro da formação.
        </p>
      </div>
    </div>
  </section>
);

export default JourneySection;