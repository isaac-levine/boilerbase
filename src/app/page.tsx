"use client";
import GradientBackground from "@/components/GradientBackground";
import NavigationBar from "@/components/NavigationBar";
import HeroHeader from "@/components/home/HeroHeader";
import { useSession } from "next-auth/react";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import FeatureSection from "@/components/home/FeatureSection";

export default function Home() {
  const session = useSession();
  const [replay, setReplay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <NavigationBar session={session}></NavigationBar>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <HeroHeader></HeroHeader>
      </section>

      <FeatureSection></FeatureSection>

      <section className="w-full h-screen flex flex-col items-center justify-center">
        {/* <HeroHeader></HeroHeader> */}
      </section>

      <GradientBackground></GradientBackground>
    </>
  );
}
