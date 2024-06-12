import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Hacker",
    price: "$0",
    pricePeriod: "/month",
    description: "Perfect for individual developers or small teams.",
    features: [
      "5 boilerplate templates",
      "Community support",
      "Basic customization",
    ],
  },
  {
    title: "Founder",
    price: "$19",
    pricePeriod: "/month",
    description: "Ideal for growing teams and small businesses.",
    features: [
      "15 boilerplate templates",
      "Priority support",
      "Advanced customization",
    ],
  },
  {
    title: "Pro",
    price: "$99",
    pricePeriod: "/month",
    description: "Tailored for large teams and complex projects.",
    features: ["Unlimited boilerplate templates", "Dedicated support"],
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Affordable plans for every need
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that best fits your project and budget.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`grid gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 ${
                plan.title === "Founder" ? "scale-110" : ""
              } mx-12 my-2 lg:mx-0`}
            >
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
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
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

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function HeaterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 8c2-3-2-3 0-6" />
      <path d="M15.5 8c2-3-2-3 0-6" />
      <path d="M6 10h.01" />
      <path d="M6 14h.01" />
      <path d="M10 16v-4" />
      <path d="M14 16v-4" />
      <path d="M18 16v-4" />
      <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </svg>
  );
}
