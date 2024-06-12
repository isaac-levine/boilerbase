import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
  cta: string;
  imgSrc: string;
  imgAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  cta,
  imgSrc,
  imgAlt,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-900">
      <MaxWidthWrapper>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                {title}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto lg:mx-0">
              <Button variant="default" size="lg">
                {cta}
              </Button>
            </div>
          </div>
          <img
            src={imgSrc}
            width="550"
            height="550"
            alt={imgAlt}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
