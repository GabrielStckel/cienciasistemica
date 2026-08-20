import { ReactNode } from "react";

interface Props {
  label: ReactNode;
  subtitle?: string;
  light?: boolean;
  eyebrow?: string;
}

const SectionTitle = ({ label, subtitle, light = false, eyebrow }: Props) => (
  <div className="mb-8 md:mb-10 px-1 text-center">
    {eyebrow && (
      <div className={`label-section text-[11px] mb-3 ${light ? "text-primary-foreground/70" : ""}`}>
        {eyebrow}
      </div>
    )}
    <h2
      className={`font-display text-[26px] leading-[1.15] md:text-4xl md:leading-tight font-semibold tracking-tight ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {label}
    </h2>
    {subtitle && (
      <p
        className={`font-body text-[15px] leading-[1.65] mt-3 font-normal max-w-xl mx-auto text-justify md:text-center ${
          light ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;