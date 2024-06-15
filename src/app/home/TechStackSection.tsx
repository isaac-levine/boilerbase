"use client";
import React, { useState, useEffect } from "react";
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
  const [timeOfDay, setTimeOfDay] = useState("today");

  useEffect(() => {
    // Get the current hour using the client's local time
    const currentHour = new Date().getHours();

    // Determine if it's night, morning, or afternoon
    let timeMessage;
    if (currentHour >= 4 && currentHour < 12) {
      timeMessage = "this morning";
    } else if (currentHour >= 12 && currentHour < 16) {
      timeMessage = "this afternoon";
    } else {
      timeMessage = "tonight";
    }

    setTimeOfDay(timeMessage);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <MaxWidthWrapper>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Finish your MVP{" "}
                <span className="text-primary">{timeOfDay}</span>.
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Simply answer a few questions and receive your boilerplate code
                in minutes.
              </p>
            </div>
          </div>

          <div className="flex-row space-x-4 hidden sm:flex">
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
