"use client";
import { useSession } from "next-auth/react";
import React from "react";
import SellAnItemForm from "./SellAnItemForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  const session = useSession();

  return (
    <MaxWidthWrapper>
      <title>Sell An item • BoilerBase</title>

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
        <div className="flex flex-col items-center h-screen ">
          <div className="max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800  mt-12 mx-8">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Sorry, only registered users can post feature requests.
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                To get started, please join our community.
              </p>
              <Link
                href="/api/auth/signin"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                prefetch={false}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
