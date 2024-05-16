"use client";
import NavigationBar from "@/components/NavigationBar";
import { useSession } from "next-auth/react";
import React from "react";
import SellAnItemForm from "./SellAnItemForm";

export default function Home() {
  const session = useSession();

  return (
    <>
      <NavigationBar session={session}></NavigationBar>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-center text-2xl font-bold mb-12 text-white">
          Sell your product in just 30 seconds.
        </h1>
        <SellAnItemForm />
      </div>
    </>
  );
}
