import HeroSection from "@/components/HeroSection";
import AboutCourseSection from "@/components/AboutCourseSection";
import InstructorSection from "@/components/InstructorSection";
import PillarsSection from "@/components/PillarsSection";
import ConsciousnessSection from "@/components/ConsciousnessSection";
import PreparationSection from "@/components/PreparationSection";

import JourneySection from "@/components/JourneySection";
import ModulesSection from "@/components/ModulesSection";
import CtaSection from "@/components/CtaSection";
import { Instagram } from "lucide-react";

const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <AboutCourseSection />
    <InstructorSection />
    <PillarsSection />
    <ConsciousnessSection />
    <PreparationSection />
    
    <JourneySection />
    <ModulesSection />
    <CtaSection />

    <footer className="bg-white py-5 md:py-8">
      <div className="container max-w-2xl flex flex-col items-center gap-2 md:gap-3">
        <p className="font-display text-base font-medium text-foreground tracking-wide">
          Jonas Peres
        </p>
        <a
          href="https://www.instagram.com/jonas_peress/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <p className="text-foreground/40 text-xs font-body text-center" style={{ hyphens: "none" }}>
          © {new Date().getFullYear()} Jonas Peres · Formação em Ciência Sistêmica
        </p>
      </div>
    </footer>
  </main>
);

export default Index;
