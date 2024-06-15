import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Joystick, Wrench, Cpu, CircleGauge, Users, Cross } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                Key Features
              </div> */}
              <h2 className="text-3xl font-bold sm:text-5xl">
                By developers, for developers.
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are not an outsourcing agency. We offer a custom-tailored
                boilerplate to let you skip through all of the basic
                integrations and set up that typically slows founders down.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <Joystick />
              <h3 className="text-xl font-bold">Everything in your control</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We send you a zip file with all the starter code you will need,
                so you own the code entirely.
              </p>
            </div>
            <div className="grid gap-1">
              <Wrench />
              <h3 className="text-xl font-bold">100% customizable</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our boilerplates are designed to be easily customizable, so you
                can build your app your way.
              </p>
            </div>
            <div className="grid gap-1">
              <Cpu />
              <h3 className="text-xl font-bold">
                Industry-standard technology
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We use the latest technology to ensure your app is visually and
                functionally stunning.
              </p>
            </div>
            <div className="grid gap-1">
              <CircleGauge />
              <h3 className="text-xl font-bold">
                Performance-First Architecture
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                All of our boilerplates are designed with speed as a top
                priortity, so your app will be fast and responsive.
              </p>
            </div>
            <div className="grid gap-1">
              <Cross />
              <h3 className="text-xl font-bold">Dedicated Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get help from our team of experts if you have any issues setting
                up your app.
              </p>
            </div>
            <div className="grid gap-1">
              <Users />
              <h3 className="text-xl font-bold">Exclusive community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Join our exclusive community of SaaS founders to get support
                growing your business or find your next co-founder.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default FeaturesSection;
