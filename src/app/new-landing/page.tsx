import Link from "next/link";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection
          title="Boilerplate code for your next app"
          description="Boilerbase provides pre-built boilerplate code to help you kickstart your app development. Save time and focus on building your product."
          cta="Get Boilerplate"
          imgSrc="/placeholder.svg"
          imgAlt="Hero"
        />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </div>
  );
}
