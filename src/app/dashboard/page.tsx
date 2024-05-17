"use client";
import GradientBackground from "@/components/GradientBackground";
import NavigationBar from "@/components/NavigationBar";
import HeroHeader from "@/components/home/HeroHeader";
import { useSession } from "next-auth/react";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import FeatureSection from "@/components/home/FeatureSection";
import TechStackSection from "@/components/home/TechStackSection";
import { HomePicker } from "@/components/home/HomePicker";
import { useRouter } from "next/navigation";

export default function NewHomeTest() {
  const session = useSession();
  const router = useRouter();
  const [replay, setReplay] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/sign-in");
    }
  }, [session.status, router]);

  return (
    <>
      <section className="bg-gradient-to-t to-transparent from-slate-950/75 w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-extrabold mb-4">
          Welcome to BoilerBase.{" "}
        </h1>
        <p className="text-white font-semibold mb-4">
          The only centralized marketplace for web app boilerplates and
          templates.
        </p>
        <div className="h-[500px]">
          <HomePicker />
        </div>
      </section>
    </>
  );
}
