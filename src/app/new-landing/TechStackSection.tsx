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

const HeroSection = () => {
  // Get the current hour
  let currentHour = new Date().getHours();

  // Determine if it's night or morning
  let timeOfDay =
    currentHour >= 18 || currentHour < 6 ? "tonight" : "this morning";
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ship your SaaS app {timeOfDay}.
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Simply answer a few questions and receive your boilerplate code
                in minutes.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 ">
            <MongodbOriginal size="128" />
            <PostgresqlOriginal size="128" />
            <NextjsOriginal size="128" />
            <PrismaOriginal size="128" />
            <TrpcOriginal size="128" />
            <TypescriptPlain size="128" />
            <BootstrapOriginal size="128" />
            <NodejsOriginalWordmark size="128" />
            <JavascriptOriginal size="128" />
            <FirebaseOriginal size="128" />
            {/* <OauthOriginal size="128" /> */}
            <SupabaseOriginal size="128" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
