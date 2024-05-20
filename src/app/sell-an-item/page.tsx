"use client";
import { useSession } from "next-auth/react";
import React from "react";
import SellAnItemForm from "./SellAnItemForm";
import { Link } from "lucide-react";
import { LogOut, LogIn } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  const session = useSession();

  if (
    session?.data?.user.role !== "SELLER" &&
    session?.data?.user.role !== "ADMIN"
  ) {
    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-center text-2xl font-bold mb-12 text-black">
            Sorry, only accounts registered as sellers can sell items.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-center text-2xl font-bold mb-12 text-black">
          Sell your product in just 30 seconds.
        </h1>
        <SellAnItemForm />
      </div>
    </>
  );
}
