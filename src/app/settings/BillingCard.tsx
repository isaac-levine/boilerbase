import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import {
  createCustomerIfNull,
  createFounderCheckoutLink,
  createHackerCheckoutLink,
  createProCheckoutLink,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/lib/stripe";
import Link from "next/link";

export default async function BillingCard() {
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
    <Card>
      <CardHeader>
        <CardTitle>Billing & Payment Settings</CardTitle>
        {/* <CardDescription>
          Manage your subscription and payment methods.
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              {/* <p className="font-medium">Current Plan</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Starter Plan
              </p> */}
            </div>
            <Link href={manage_link} className={buttonVariants()}>
              Manage Billing
            </Link>
          </div>
          <Separator />
          <div className="grid gap-2">
            <p className="font-medium">Available Plans</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 flex flex-col gap-4">
                <div>
                  <p className="font-medium">Starter</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $9/month
                  </p>
                </div>
                <Link href={hacker_checkout_link} className={buttonVariants()}>
                  Upgrade
                </Link>
              </Card>
              <Card className="p-4 flex flex-col gap-4">
                <div>
                  <p className="font-medium">Pro</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $29/month
                  </p>
                </div>
                <Link href={founder_checkout_link} className={buttonVariants()}>
                  Upgrade
                </Link>
              </Card>
              <Card className="p-4 flex flex-col gap-4">
                <div>
                  <p className="font-medium">Enterprise</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $99/month
                  </p>
                </div>
                <Link href={pro_checkout_link} className={buttonVariants()}>
                  Upgrade
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
