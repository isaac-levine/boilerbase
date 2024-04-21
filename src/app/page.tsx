"use client"
import GradientBackground from "@/components/GradientBackground";
import NavigationBar from "@/components/NavigationBar";
import { getSignedInUser } from "@/lib/auth/helper";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session =  useSession();

  return (
    <>
      <NavigationBar session={session}></NavigationBar>
      <GradientBackground></GradientBackground>
    </>
  );
}
