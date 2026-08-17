import SectionTitle from "./SectionTitle";

const JourneySection = () => (
  <section className="gradient-hero section-block">
    <div className="container max-w-3xl">
      <SectionTitle
        light
        eyebrow="Sua jornada"
        label="Como será o ingresso no curso"
      />
      <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur-sm p-5 md:p-7 border-l-2 border-l-accent">
        <div className="label-section mb-1.5 text-[11px] text-accent">Passo 01 · Formulário</div>
        <h3 className="font-display text-[17px] md:text-base text-primary-foreground mb-2 font-semibold tracking-tight">
          Um mergulho inicial na tua história
        </h3>
        <p className="text-primary-foreground/90 text-[15px] md:text-[14px] leading-[1.65] md:leading-relaxed font-body font-normal text-justify">
          Você preencherá um formulário detalhado fornecendo informações vitais
          sobre a tua história e sobre os teus anseios. É a partir daí que
          começamos a construir, juntos, a tua trajetória dentro da formação.
        </p>
      </div>
    </div>
  </section>
);

export default JourneySection;