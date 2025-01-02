import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

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
                Hear from our Users
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From VC-backed founders to solo developers, see how teams of all
                sizes are shipping faster.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-md bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/maria-gorskikh-headhsot.jpeg"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-medium">Maria Gorskikh</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Founder, Global Venture Labs
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We finished our MVP and validate our idea in the matter of days!
                I can not recommend Boilerbase enough to founders or anyone
                building a product!
              </p>
            </div>
            <div className="grid gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/minh-nguyen-headshot.jpeg"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-medium">Minh Nguyen</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Co-Founder, Ricefield
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Boilerbase has saved us countless hours of setup and
                configuration. We got a custom boilerplate and finished our MVP
                way faster than I ever thought possible!
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialsSection;
