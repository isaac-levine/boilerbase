import FeaturesSection from "@/components/home/FeaturesSection";
import FrequentlyAskedQuestionsSection from "@/components/home/FrequentlyAskedQuestionsSection";
import HeroSection from "@/components/home/HeroSection";
import MoreThanJustABoilerplateSection from "@/components/home/MoreThanJustABoilerplateSection";
import TechStackSection from "@/components/home/TechStackSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Metadata } from "next";

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
