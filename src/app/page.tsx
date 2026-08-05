import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { HowWeBuildSection } from "@/components/HowWeBuildSection";
import { TechnologySection } from "@/components/TechnologySection";
import { WhyVijnovaSection } from "@/components/WhyVijnovaSection";
import { ResearchSection } from "@/components/ResearchSection";
import { AboutSection } from "@/components/AboutSection";
import { PrivacySection } from "@/components/PrivacySection";
import { PartnerSection } from "@/components/PartnerSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#fafafa] selection:bg-blue-500/30">
      <Navigation />
      
      <main className="flex flex-col items-center w-full overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <HowWeBuildSection />
        <TechnologySection />
        <WhyVijnovaSection />
        <ResearchSection />
        <AboutSection />
        <PrivacySection />
        <PartnerSection />
      </main>

      <Footer />
    </div>
  );
}
