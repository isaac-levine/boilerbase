import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  MongodbOriginal,
  NextjsOriginal,
  PrismaOriginal,
  TrpcOriginal,
  TypescriptPlain,
  PostgresqlOriginal,
  BootstrapOriginal,
  NodejsOriginalWordmark,
  JavascriptOriginal,
  FirebaseOriginal,
  OauthOriginal,
  SupabaseOriginal,
} from "devicons-react";
import { MotionContext } from "framer-motion";

const HeroSection = () => {
  // Get the current hour
  let currentHour = new Date().getHours();

  // Determine if it's night, morning, or afternoon
  let timeOfDay;
  if (currentHour >= 4 && currentHour < 12) {
    timeOfDay = "this morning";
  } else if (currentHour >= 12 && currentHour < 16) {
    timeOfDay = "this afternoon";
  } else {
    timeOfDay = "tonight";
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Ship your SaaS MVP{" "}
                <span className="text-primary">{timeOfDay}</span>.
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Simply answer a few questions and receive your boilerplate code
                in minutes.
              </p>
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            <MongodbOriginal size="150" />
            <PostgresqlOriginal size="150" />
            <NextjsOriginal size="150" />
            <PrismaOriginal size="150" />
            <TrpcOriginal size="150" />
            <TypescriptPlain size="150" />
            <BootstrapOriginal size="150" />
            <NodejsOriginalWordmark size="150" />
            <JavascriptOriginal size="150" />
            <FirebaseOriginal size="150" />
            {/* <OauthOriginal size="150" /> */}
            <SupabaseOriginal size="150" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
