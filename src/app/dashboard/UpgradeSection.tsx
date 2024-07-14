import GetStartedButton from "@/components/home/components/GetStartedButton";
import {
  createCustomerIfNull,
  createFounderCheckoutLink,
  createHackerCheckoutLink,
  hasSubscription,
} from "@/lib/stripe";
import { Check, X } from "lucide-react";
import { getServerSession } from "next-auth";

const UpgradeSection = async () => {
  const customerId = (await createCustomerIfNull()) || "";
  const hasSub = await hasSubscription();
  const hacker_checkout_link =
    (await createHackerCheckoutLink(customerId)) || "";
  // TODO: the founder checkout link really uses the stripe plan called "pro" so we should refactor all of this "founder" stuff to be called "pro" and delete all the commented out "pro" stuff that's old
  const founder_checkout_link =
    (await createFounderCheckoutLink(customerId)) || "";
  // const pro_checkout_link = (await createProCheckoutLink(customerId)) || "";

  const session = await getServerSession();
  const user = session?.user;

  const plans = [
    {
      title: "Hacker",
      price: "$30",
      pricePeriod: "/month",
      description: "Perfect for shipping your side project quickly.",
      features: [
        { text: "Tailored code boilerplate", offered: true },
        { text: "Basic support", offered: true },
        { text: "Exclusive founder community", offered: false },
        { text: "Logo design for your company", offered: false },
        { text: "Feature marketplace access", offered: false },
        { text: "Beta testing marketplace access", offered: false },
        { text: "Early feature access", offered: false },
        { text: "SaaS growth course access", offered: false },
      ],
      checkout_link: hacker_checkout_link,
    },
    {
      title: "Founder",
      price: "$45",
      pricePeriod: "/month",
      description: "Ideal for building a fully-featured SaaS app.",
      features: [
        { text: "Tailored code boilerplate", offered: true },
        { text: "Priority support", offered: true },
        { text: "Exclusive founder community", offered: true },
        { text: "Logo design for your company", offered: true },
        { text: "Feature marketplace access", offered: true },
        { text: "Beta testing marketplace access", offered: true },
        { text: "Early feature access", offered: false },
        { text: "SaaS growth course access", offered: false },
      ],
      checkout_link: founder_checkout_link,
    },
    // {
    //   title: "Pro",
    //   price: "$99",
    //   pricePeriod: "/month",
    //   description:
    //     "Tailored for teams who are serious about growth and profitability.",
    //   features: [
    //     { text: "Tailored code boilerplate", offered: true },
    //     { text: "Priority support", offered: true },
    //     { text: "Exclusive founder community", offered: true },
    //     { text: "Logo design for your company", offered: true },
    //     { text: "Feature marketplace access", offered: true },
    //     { text: "Beta testing marketplace access", offered: true },
    //     { text: "Early feature access", offered: true },
    //     { text: "SaaS growth course access", offered: true },
    //   ],
    //   checkout_link: pro_checkout_link,
    // },
  ];

  return (
    <section id="pricing" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Pricing
            </div> */}
            <h2 className="text-3xl font-bold">
              Sorry, only paying users can see the dashboard
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that best fits your project and budget.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-3 lg:gap-12 ">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`grid gap-4  border border-gray-200 dark:border-gray-800  bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 ${
                plan.title === "Founder" ? "" : ""
              } mx-12 my-2 lg:mx-0`}
            >
              {plan.title === "Founder" ? (
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

export default UpgradeSection;
