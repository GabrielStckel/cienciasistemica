import SectionTitle from "./SectionTitle";
import { identificationItems, sectionCopy } from "@/content/course";

const IdentificationSection = () => {
  if (!identificationItems.length) return null;
  const copy = sectionCopy.identification;

  return (
    <section className="section-muted section-block">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow={copy.eyebrow || undefined}
          label={copy.title}
          subtitle={copy.subtitle || undefined}
        />
        <div className="grid sm:grid-cols-2 gap-3">
          {identificationItems.map((item) => (
            <div key={item} className="card-refined p-4 flex gap-3 items-start">
              <span className="text-accent mt-[2px]">—</span>
              <p className="text-[15px] leading-[1.7] text-foreground/90 text-left">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
