import { createCustomerIfNull } from "@/lib/stripe";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import BillingCard from "./BillingCard";
import AccountSettingsForm from "./AccountSettingsForm";

export default async function Component() {
  const session = await getServerSession(authOptions);
  let user = null;

  const customerId = (await createCustomerIfNull()) || "";
  console.log("customerId", customerId);

  // pull in the user from the database based on the current user's email
  if (session?.user?.email) {
    user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });
  }

  return (
    <MaxWidthWrapper>
      <title>Settings • Boilerbase</title>
      {user ? (
        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 px-6 lg:px-8 sm:text-center flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold mb-6">
            {user?.name ? `${user.name}'s` : ""} Settings
          </h1>
          <AccountSettingsForm />
          <BillingCard />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full mb-3">
          <p className="mx-4 text-2xl font-medium mt-4 flex items-center justify-center">
            Sorry, you must be signed in to view account settings.
          </p>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
