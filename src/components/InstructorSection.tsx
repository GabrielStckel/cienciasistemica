import SectionTitle from "./SectionTitle";
import jonas from "@/assets/jonas-peres.jpg";

const stats = [
  { n: "10+", l: "anos como constelador" },
  { n: "3.000h", l: "de constelações conduzidas" },
  { n: "5.000+", l: "clientes e alunos atendidos" },
];

const InstructorSection = () => (
  <section className="section-white py-16 md:py-24">
    <div className="container max-w-4xl grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-center">
      <div className="order-2 md:order-1">
        <img
          src={jonas}
          alt="Jonas Peres, constelador e terapeuta"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg"
        />
      </div>
      <div className="order-1 md:order-2">
        <div className="label-section mb-3">Aprenda com quem já chegou lá</div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-medium leading-tight">
          Jonas Peres
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6 font-body" style={{ textAlign: "left" }}>
          Constelações Familiares & Desenvolvimento Humano
        </p>
        <p className="text-foreground/80 text-[15px] leading-[1.85] font-body font-light mb-8">
          Mais de 10 anos como constelador e terapeuta, no coração de uma vida destinada ao servir consciente à vida —
          com o suporte de uma espiritualidade laica e filosófica que traz clareza, sabedoria e verdade ao processo.
        </p>
        <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl md:text-3xl text-accent font-medium">{s.n}</div>
              <div className="text-xs text-muted-foreground mt-1 font-body" style={{ textAlign: "left" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;