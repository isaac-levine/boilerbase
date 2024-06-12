import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Boilerbase can do for you
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Boilerbase provides a range of pre-built boilerplate code to
                help you get started quickly and focus on building your product.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Rapid Prototyping</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get started quickly with pre-built boilerplate code for common
                app features.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Customizable Templates</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Easily customize the boilerplate code to fit your specific app
                requirements.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Developer Productivity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Save time and focus on building your product instead of setting
                up the infrastructure.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Scalable Architecture</h3>
              <p className="text-gray-500 dark:text-gray-400">
                The boilerplate code is designed to be scalable and maintainable
                as your app grows.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Best Practices</h3>
              <p className="text-gray-500 dark:text-gray-400">
                The boilerplate code follows industry best practices for
                security, performance, and reliability.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Community Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Join our growing community of developers and get help and
                feedback on your projects.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default FeaturesSection;
