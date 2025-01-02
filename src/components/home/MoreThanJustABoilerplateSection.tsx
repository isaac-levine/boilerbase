import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export default function MoreThanJustABoilerplateSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl/tight">
              Build with Confidence
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Generate production-ready code tailored to your needs, or explore
              our community marketplace of openly reviewed boilerplates. Every
              submission is vetted and rated by developers like you, ensuring
              quality and reliability.
            </p>
          </div>
          <div className="rounded-xl dark:shadow-none bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-12">
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Smart Code Generation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get a custom boilerplate built to your specifications in
                  minutes, with modern best practices baked in.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Transparent Marketplace</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse community boilerplates with real reviews, ratings, and
                  detailed documentation. No hidden costs or surprises.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Developer Community</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Share feedback, contribute code, and collaborate with other
                  developers in our open community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
