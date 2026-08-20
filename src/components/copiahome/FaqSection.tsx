import { Instagram } from "lucide-react";
import SectionTitle from "./SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq, sectionCopy, instructor } from "@/content/course";

const handle = instructor.instagram.replace(/\/+$/, "").split("/").pop();

const FaqSection = () => {
  if (!faq.length) return null;
  const copy = sectionCopy.faq;

  return (
    <section className="section-muted section-block">
      <div className="container max-w-3xl">
        <SectionTitle
          eyebrow={copy.eyebrow || undefined}
          label={copy.title}
          subtitle={copy.subtitle || undefined}
        />
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-[15px] md:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-[1.7] text-muted-foreground text-left">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <a
            href={instructor.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-muted-foreground hover:text-accent transition-colors"
          >
            <Instagram className="h-4 w-4" />
            @{handle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
