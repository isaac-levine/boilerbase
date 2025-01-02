import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { createCustomerIfNull } from "@/lib/stripe";
import { getServerSession } from "next-auth";
import AccountSettingsForm from "./AccountSettingsForm";
import BillingCard from "./BillingCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Settings • Boilerbase`,
};

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
      {user ? (
        <div className="my-12">
          <div className="items-center justify-between mb-8 text-center">
            {/* <h1 className="text-2xl font-bold text-foreground sm:block hidden mb-4 flex flex-col gap-6">
              Settings
            </h1> */}
            {/* <div className="mx-auto max-w-5xl sm:mt-56 px-6 lg:px-8 sm:text-center flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold mb-6">
            {user?.first_name ? `${user.first_name}'s` : ""} Settings
          </h1> */}
            <div className="mb-6">
              <AccountSettingsForm />
            </div>
            <BillingCard />
          </div>
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
