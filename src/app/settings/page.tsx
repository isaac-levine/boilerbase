import {
  createCustomerIfNull,
  createFounderCheckoutLink,
  createHackerCheckoutLink,
  createProCheckoutLink,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/lib/stripe";
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
  console.log("user: ", user);

  const manage_link = (await generateCustomerPortalLink(customerId)) || "";

  const hasSub = await hasSubscription();
  const hacker_checkout_link =
    (await createHackerCheckoutLink(customerId)) || "";
  const founder_checkout_link =
    (await createFounderCheckoutLink(customerId)) || "";
  const pro_checkout_link = (await createProCheckoutLink(customerId)) || "";

  console.log("hasSub: ", hasSub);
  console.log("manage_link: ", manage_link);
  console.log("hacker_checkout_link: ", hacker_checkout_link);
  console.log("founder_checkout_link: ", founder_checkout_link);
  console.log("pro_checkout_link: ", pro_checkout_link);

  return (
    <MaxWidthWrapper>
      {user ? (
        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 px-6 lg:px-8 sm:text-center">
          {/* <p className="text-xl font-medium text-center mt-2">
            {session?.user?.name}&apos;s dashboard
          </p> */}
          <Link href={manage_link}>Manage Billing</Link>
          {hasSub ? (
            <div className="w-3/4 rounded-md border-gray-400 border shadow-sm ml-1 h-screen">
              <h2 className="text-center font-semibold">Subsrcribed</h2>
            </div>
          ) : (
            // if the user is not a pro user, show this message
            user && (
              <div>
                <h2 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
                  {user.name} is not subscribed.
                </h2>
                <div className="flex flex-col gap-4 mt-5">
                  <Link href={hacker_checkout_link}>Upgrade to Hacker</Link>
                  <Link href={founder_checkout_link}>Upgrade to Founder</Link>
                  <Link href={pro_checkout_link}>Upgrade to Pro</Link>
                </div>
              </div>
            )
          )}
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
