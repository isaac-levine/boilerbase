import DemoSection from "./home/DemoSection";
import FeaturesSection from "./home/FeaturesSection";
import FrequentlyAskedQuestionsSection from "./home/FrequentlyAskedQuestionsSection";
import HeroSection from "./home/HeroSection";
import MoreThanJustABoilerplateSection from "./home/MoreThanJustABoilerplateSection";
import PricingSection from "./home/PricingSection";
import TechStackSection from "./home/TechStackSection";
import TestimonialsSection from "./home/TestimonialsSection";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <title>Home • Boilerbase</title>
      <main className="flex-1">
        <HeroSection />
        {/* <CompaniesSection /> */}
        <TechStackSection />
        <MoreThanJustABoilerplateSection />
        <DemoSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FrequentlyAskedQuestionsSection />
        <PricingSection />
      </main>
    </div>
  );
}
