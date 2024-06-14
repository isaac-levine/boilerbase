import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold sm:text-5xl">
                What our users say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from developers who have used Boilerbase to build their
                apps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Founder, Acme Inc.
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                &quot;Boilerbase has been a game-changer for my team. The\n
                pre-built boilerplate code has helped us launch our app\n much
                faster than we could have on our own.&quot;
              </p>
            </div>
            <div className="grid gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-medium">Jane Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    CTO, Globex Corp.
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                &quot;Boilerbase has saved us countless hours of setup and\n
                configuration. The customizable templates have allowed us\n to
                quickly build and deploy our app.&quot;
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialsSection;
