import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Eye, Code2, Users, Star, Github, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Open Source, Open Community
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Free tools to generate production-ready code, plus a transparent
                marketplace of community-reviewed boilerplates to help you ship
                faster.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <Code2 className="opacity-50" />
              <h3 className="text-xl font-bold">Smart Generation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Generate custom boilerplates instantly based on your specific
                needs and tech stack.
              </p>
            </div>
            <div className="grid gap-1">
              <Eye className="opacity-50" />
              <h3 className="text-xl font-bold">Full Transparency</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Every boilerplate comes with community reviews, ratings, and
                detailed documentation.
              </p>
            </div>
            <div className="grid gap-1">
              <Github className="opacity-50" />
              <h3 className="text-xl font-bold">100% Open Source</h3>
              <p className="text-gray-500 dark:text-gray-400">
                All code is open source. Fork, customize, and contribute back to
                help others.
              </p>
            </div>
            <div className="grid gap-1">
              <Zap className="opacity-50" />
              <h3 className="text-xl font-bold">Modern Stack</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Built with latest tech and best practices for performance and
                developer experience.
              </p>
            </div>
            <div className="grid gap-1">
              <Star className="opacity-50" />
              <h3 className="text-xl font-bold">Quality First</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Community-vetted code following best practices and security
                standards.
              </p>
            </div>
            <div className="grid gap-1">
              <Users className="opacity-50" />
              <h3 className="text-xl font-bold">Active Community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Share knowledge, get help, and collaborate with other
                developers.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturesSection;
