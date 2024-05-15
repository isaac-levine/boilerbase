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
      <h1>Sell a Boilerplate</h1>
      <div className="flex justify-center items-center min-h-screen">
        <SellAnItemForm />
      </div>
    </>
  );
}
