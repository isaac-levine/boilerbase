"use client"
import GradientBackground from "@/components/GradientBackground";
import NavigationBar from "@/components/NavigationBar";
import HeroHeader from "@/components/home/HeroHeader";
import { useSession } from "next-auth/react";


export default function Home() {
  const session =  useSession();

  return (
    <>
      <NavigationBar session={session}></NavigationBar>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <HeroHeader></HeroHeader>
      </section>
      <section className="w-full h-screen flex flex-col items-center justify-center"></section>
      <GradientBackground></GradientBackground>
    </>
  );
}
