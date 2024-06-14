import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <MaxWidthWrapper>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Ship your SaaS app 90% faster with{" "}
                <span className="text-primary font-extrabold">Boilerbase</span>.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
                We take care of all the integrations and set up. You focus on
                building what matters.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto lg:mx-0">
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </div>
          </div>
          <img
            src="/boilerbase-icon-transparent.png"
            width="500"
            height="500"
            alt="Hero"
            className="hidden lg:block mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
