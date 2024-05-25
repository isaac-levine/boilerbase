"use client";
import { useSession } from "next-auth/react";
import React from "react";
import SellAnItemForm from "./SellAnItemForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  const session = useSession();

  return (
    <MaxWidthWrapper>
      {session?.data?.user ? (
        <div className="my-12">
          <div className="flex flex-col items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-foreground sm:block hidden mb-12">
              Add your product in just 30 seconds.
            </h1>
            <SellAnItemForm />
          </div>
        </div>
      ) : (
        <div className="my-12">
          <div className="flex flex-col items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-foreground sm:block hidden mb-12">
              Sorry, only registered users can add listings.
            </h1>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
