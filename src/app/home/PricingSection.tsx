import GetStartedButton from "@/components/home/components/GetStartedButton";
import {
  createCustomerIfNull,
  createFounderCheckoutLink,
  createHackerCheckoutLink,
  createProCheckoutLink,
  hasSubscription,
} from "@/lib/stripe";
import { Check, X } from "lucide-react";
import { getServerSession } from "next-auth";

const PricingSection = async () => {
  const customerId = (await createCustomerIfNull()) || "";
  const hasSub = await hasSubscription();
  const hacker_checkout_link =
    (await createHackerCheckoutLink(customerId)) || "";
  const founder_checkout_link =
    (await createFounderCheckoutLink(customerId)) || "";
  const pro_checkout_link = (await createProCheckoutLink(customerId)) || "";

  const session = await getServerSession();
  const user = session?.user;

  const plans = [
    {
      title: "Free",
      price: "$0",
      pricePeriod: "/month",
      description: "Get inpsiration from others or post your own boilerplate.",
      features: [
        { text: "Boilerplate marketplace", offered: true },
        { text: "Custom boilerplate generations", offered: false },
        { text: "Exclusive founder community", offered: false },
        { text: "Early feature access", offered: false },
      ],
      checkout_link: "/dashboard",
    },
    {
      title: "Hacker",
      price: "$8",
      pricePeriod: "/month",
      description:
        "Generate a boilerplate with the exact integrations that you need.",
      features: [
        { text: "Boilerplate marketplace", offered: true },
        { text: "10 boilerplate generations / month", offered: true },
        { text: "Exclusive founder community", offered: false },
        { text: "Early feature access", offered: false },
      ],
      checkout_link: hacker_checkout_link,
    },
    {
      title: "Founder",
      price: "$18",
      pricePeriod: "/month",
      description: "Ship fast and often with likeminded founders.",
      features: [
        { text: "Boilerplate marketplace", offered: true },
        { text: "Unlimited boilerplate generations", offered: true },
        { text: "Exclusive founder community", offered: true },
        { text: "Early feature access", offered: true },
      ],
      checkout_link: founder_checkout_link,
    },
  ];

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-0 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Pricing
            </div> */}
            <h2 className="text-3xl font-bold sm:text-5xl">Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan best suited to your current stage.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-6 py-8 lg:grid-cols-3 lg:gap-12 ">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`grid gap-4  border border-gray-200 dark:border-gray-800  bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 ${
                plan.title === "Founder" ? "" : ""
              } mx-12 my-2 lg:mx-0`}
            >
              {plan.title === "Hacker" ? (
                <div className="text-sm font-bold text-blue-500 dark:text-blue-400 uppercase  opacity-100">
                  Most Popular
                </div>
              ) : (
                ""
              )}
              <div className="space-y-2">
                <div className="text-2xl font-bold">{plan.title}</div>
                <div className="text-4xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    {plan.pricePeriod}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center">
                    {feature.offered ? (
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                      <X className="mr-2 h-4 w-4 text-gray-300" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              {/* <Link
                href={user ? plan.checkout_link : "/auth/sign-in"}
                className={`${buttonVariants({
                  variant: "default",
                })} rounded-lg shadow-lg border-t p-8 transition-transform duration-300 hover:scale-105`}
              >
                Get Started
              </Link> */}
              <GetStartedButton checkoutLink={plan.checkout_link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
