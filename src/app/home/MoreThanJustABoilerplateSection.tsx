import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function MoreThanJustABoilerplateSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl/tight">
              More Than Just a Boilerplate
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Not only do we provide you with a personalized, high-quality,
              generated boilerplate so that you can hit the ground running, but
              we also offer a community of like-minded founders where you can
              get support, find co-founders, and connect with like-minded
              people.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-950 dark:shadow-none">
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Personalized Generated Boilerplate
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ship your SaaS product in hours, not months with a boilerplate
                  that is custom tailored to your needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Exclusive Founder Community
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with like-minded founders, get support, find a
                  co-founder, and grow your network.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Learning and Development Resources
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get access to our curated resources and tools to help you
                  launch and grow your SaaS product effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
