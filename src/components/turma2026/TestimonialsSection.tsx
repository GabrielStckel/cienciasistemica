import SectionTitle from "./SectionTitle";
import { testimonials, sectionCopy } from "@/content/course";

const TestimonialsSection = () => {
  if (!testimonials.length) return null;
  const copy = sectionCopy.testimonials;

  return (
    <section className="section-white section-block">
      <div className="container">
        <SectionTitle
          eyebrow={copy.eyebrow || undefined}
          label={copy.title}
          subtitle={copy.subtitle || undefined}
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <figure key={t.name + t.quote} className="card-refined p-5 flex flex-col">
              <span className="font-display text-4xl leading-none text-accent/30" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="text-[15px] leading-[1.7] text-foreground/90 text-left mt-2 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <div className="font-display font-semibold text-foreground">{t.name}</div>
                <div className="text-[13px] text-muted-foreground">{t.context}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
