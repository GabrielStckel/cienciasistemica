import { ReactNode } from "react";

interface Props {
  label: ReactNode;
  subtitle?: string;
  light?: boolean;
  eyebrow?: string;
}

const SectionTitle = ({ label, subtitle, light = false, eyebrow }: Props) => (
  <div className="mb-10 px-1 text-center">
    {eyebrow && (
      <div className={`label-section mb-3 ${light ? "text-primary-foreground/70" : ""}`}>
        {eyebrow}
      </div>
    )}
    <h2
      className={`font-display text-2xl md:text-3xl font-medium tracking-tight ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {label}
    </h2>
    {subtitle && (
      <p
        className={`font-body text-sm mt-3 font-normal max-w-xl mx-auto ${
          light ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}
        style={{ textAlign: "center" }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;