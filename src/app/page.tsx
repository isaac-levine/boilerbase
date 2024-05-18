"use client";
import GradientBackground from "@/components/GradientBackground";
import NavigationBar from "@/components/NavigationBar";
import HeroHeader from "@/components/home/HeroHeader";
import { useSession } from "next-auth/react";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import FeatureSection from "@/components/home/FeatureSection";
import TechStackSection from "@/components/home/TechStackSection";

export default function Home() {
  const session = useSession();
  const [replay, setReplay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <NavigationBar session={session}></NavigationBar>

      <section className="bg-gradient-to-t to-transparent from-slate-950/75 w-full min-h-screen h-auto flex flex-col items-center justify-center">
        <HeroHeader />
      </section>

      <section className="bg-slate-950/75 w-full h-auto flex flex-col items-center justify-center">
        <FeatureSection />
      </section>

      <section className="bg-slate-950/75 w-full h-auto flex flex-col items-center justify-center pb-20">
        <TechStackSection />
      </section>

      <GradientBackground />
    </>
  );
}
