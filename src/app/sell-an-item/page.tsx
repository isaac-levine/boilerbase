"use client";
import { useSession } from "next-auth/react";
import React from "react";
import SellAnItemForm from "./SellAnItemForm";

export default function Home() {
  const session = useSession();

  if (session?.data?.user) {
    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-center text-2xl font-bold mb-12 text-black">
            Add your product in just 30 seconds.
          </h1>
          <SellAnItemForm />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-center text-2xl font-bold mb-12 text-black">
          Sorry, only registered users can add listings.
        </h1>
      </div>
    </>
  );
}
