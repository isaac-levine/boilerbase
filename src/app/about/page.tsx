import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <main className="w-full">
      <MaxWidthWrapper>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  About Boilerbase
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bringing Transparency and Quality to Web App Boilerplates
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Boilerbase is a project dedicated to providing developers with
                  high-quality, transparent, and community-vetted web
                  application boilerplates. Our mission is to simplify the
                  initial setup process and ensure that developers can start
                  their projects with a solid foundation.
                </p>
              </div>
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        alt="Isaac Levine"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>IL</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="font-semibold">Isaac Levine</div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Founder, Boilerbase
                    </p>
                    <p>
                      Isaac is a software developer and an active member of the
                      web development community. He created Boilerbase to help
                      developers save time and effort in setting up their
                      projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-12 md:py-24 mb-12">
        <section>
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transparency, Quality, and Community
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Boilerbase, we believe in providing transparent and
                  high-quality boilerplates that are vetted by the developer
                  community. We strive to create a collaborative environment
                  where developers can contribute, share their expertise, and
                  collectively improve the tools they use.
                </p>
              </div>
              <div className="grid gap-8">
                <div className="flex items-center gap-4">
                  <ClipboardCheckIcon className="w-10 h-10 text-primary" />
                  <div>
                    <div className="font-semibold">
                      Transparent Boilerplates
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      All Boilerbase boilerplates are open-source and thoroughly
                      documented, ensuring developers can understand and
                      customize them to their needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <RocketIcon className="w-10 h-10 text-primary" />
                  <div>
                    <div className="font-semibold">
                      Community-Driven Quality
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our boilerplates are reviewed and improved by a community
                      of experienced developers, ensuring they meet the highest
                      standards of quality and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <UsersIcon className="w-10 h-10 text-primary" />
                  <div>
                    <div className="font-semibold">
                      Collaborative Environment
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Boilerbase encourages developers to contribute, share
                      their knowledge, and work together to create the best
                      possible tools for the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X4YvwN0zuwH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

function ClipboardCheckIcon(props: any) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
