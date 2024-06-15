import Link from "next/link";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import CompaniesSection from "./CompaniesSection";
import TechStackSection from "./TechStackSection";
import FrequentlyAskedQuestionsSection from "./FrequentlyAskedQuestionsSection";
import MoreThanJustABoilerplateSection from "./MoreThanJustABoilerplateSection";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <title>Home • Boilerbase</title>
      <main className="flex-1">
        <HeroSection />
        {/* <CompaniesSection /> */}
        <TechStackSection />
        <MoreThanJustABoilerplateSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FrequentlyAskedQuestionsSection />
        <PricingSection />
      </main>
    </div>
  );
}
