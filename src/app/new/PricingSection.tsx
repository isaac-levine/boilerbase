import { Button } from "@/components/ui/button";
import { features } from "process";
import { Check, X } from "lucide-react";

const plans = [
  {
    title: "Hacker",
    price: "$30",
    pricePeriod: "/month",
    description: "Perfect for individual developers or small teams.",
    features: [
      { text: "1 personalized app boilerplates", offered: true },
      { text: "Exclusive founder community", offered: false },
      { text: "Logo design for your company", offered: false },
      { text: "24/7 support", offered: false },
      { text: "SaaS growth course", offered: false },
      // { text: "Regular lessons and live calls", offered: false },
    ],
  },
  {
    title: "Founder",
    price: "$45",
    pricePeriod: "/month",
    description: "Ideal for growing teams and small businesses.",
    features: [
      { text: "3 personalized app boilerplates", offered: true },
      { text: "Exclusive founder community", offered: true },
      { text: "Logo design for your company", offered: true },
      { text: "24/7 support", offered: true },
      { text: "SaaS growth course", offered: false },
      // { text: "Regular lessons and live calls", offered: false },
    ],
  },
  {
    title: "Pro",
    price: "$99",
    pricePeriod: "/month",
    description: "Tailored for large teams and complex projects.",
    features: [
      { text: "6 personalized app boilerplates", offered: true },
      { text: "Community support", offered: true },
      { text: "Basic customization", offered: true },
      { text: "24/7 support", offered: true },
      { text: "SaaS growth course", offered: true },
      // { text: "Regular lessons and live calls", offered: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Pricing
            </div> */}
            <h2 className="text-3xl font-bold sm:text-5xl">Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that best fits your project and budget.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-3 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`grid gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 ${
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
              <Button className="w-full">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
