import HeroSection from "@/components/HeroSection";
import AboutCourseSection from "@/components/AboutCourseSection";
import InstructorSection from "@/components/InstructorSection";
import PillarsSection from "@/components/PillarsSection";
import PreparationSection from "@/components/PreparationSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import JourneySection from "@/components/JourneySection";
import ModulesSection from "@/components/ModulesSection";
import ComparisonSection from "@/components/ComparisonSection";
import CtaSection from "@/components/CtaSection";
import { Instagram } from "lucide-react";

const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <AboutCourseSection />
    <InstructorSection />
    <PillarsSection />
    <PreparationSection />
    <DifferentialsSection />
    <JourneySection />
    <ModulesSection />
    <ComparisonSection />
    <CtaSection />

    <footer className="bg-primary py-10">
      <div className="container max-w-2xl flex flex-col items-center gap-4">
        <p className="font-display text-base font-medium text-primary-foreground tracking-wide">
          Jonas Peres
        </p>
        <a
          href="https://www.instagram.com/jonas_peress/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
        <p className="text-primary-foreground/40 text-xs font-body text-center" style={{ hyphens: "none" }}>
          © {new Date().getFullYear()} Jonas Peres · Formação em Ciência Sistêmica
        </p>
      </div>
    </footer>
  </main>
);

export default Index;
