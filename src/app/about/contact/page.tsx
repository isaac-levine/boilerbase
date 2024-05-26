import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center  px-4 py-12 ">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We appreciate your patience! Please check back later.
          </p>
          <div className="mt-10" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
