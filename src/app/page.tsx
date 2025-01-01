import { Metadata } from "next";
import DemoSection from "./home/DemoSection";
import FeaturesSection from "./home/FeaturesSection";
import FrequentlyAskedQuestionsSection from "./home/FrequentlyAskedQuestionsSection";
import HeroSection from "./home/HeroSection";
import MoreThanJustABoilerplateSection from "./home/MoreThanJustABoilerplateSection";
import PricingSection from "./home/PricingSection";
import TechStackSection from "./home/TechStackSection";
import TestimonialsSection from "./home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <TechStackSection />
        <MoreThanJustABoilerplateSection />
        {/* <DemoSection /> */}
        <FeaturesSection />
        <TestimonialsSection />
        <FrequentlyAskedQuestionsSection />
        {/* <PricingSection /> */}
      </main>
    </div>
  );
}
