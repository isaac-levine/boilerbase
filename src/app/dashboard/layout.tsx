import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { buttonVariants } from "@/components/ui/button";

import { Gauge, LayoutDashboard, FlaskConical, Settings } from "lucide-react";
import BoilerbaseIconBlocks from "@/components/BoilerbaseIconBlocks";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  const user = session?.user;

  // If user is not signed in, prompt them to sign in to view the dashboard
  if (!user) {
    return (
      <div className="flex flex-col items-center h-screen ">
        <title>Dashboard • BoilerBase</title>
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-12 mx-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Sorry, you must register to view your dashboard.
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              To get started, please join our community.
            </p>
            <Link
              href="/api/auth/signin"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
              prefetch={false}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const gotBoilerplate = user.receivedBoilerplate;

  // User is signed in, so we can display the dashboard
  return (
    <div className="flex min-h-screen">
      <title>Dashboard • BoilerBase</title>
      <div className="dark:bg-gray-900 dark:text-white w-72 p-6 space-y-6 hidden sm:block">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-bold text-lg"
          prefetch={false}
        >
          <Gauge className="w-6 h-6" />
          <span>Dashboard</span>
        </Link>
        <nav className="space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <hr className="border-t border-gray-700" />
          <Link
            href="/form"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <BoilerbaseIconBlocks size={28} />
            <span>Get Boilerplate</span>
          </Link>
          <hr className="border-t border-gray-700" />
          <div>
            <Link
              href="/dashboard/feature-requests"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
              prefetch={false}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>My Feature Requests</span>
            </Link>
            <Link
              href="/dashboard/post-a-feature"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
              prefetch={false}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Post a Feature</span>
            </Link>
            <Link
              href="/dashboard/feature-marketplace"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
              prefetch={false}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Feature Marketplace</span>
            </Link>
          </div>
          <hr className="border-t border-gray-700" />
          <div>
            <Link
              href="/dashboard/beta-tests"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
              prefetch={false}
            >
              <FlaskConical className="w-5 h-5" />
              <span>My Beta Tests</span>
            </Link>
            <Link
              href="/dashboard/beta-tests"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
              prefetch={false}
            >
              <FlaskConical className="w-5 h-5" />
              <span>Post a Beta Test</span>
            </Link>
            <Link
              href="/dashboard/beta-tests"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
              prefetch={false}
            >
              <FlaskConical className="w-5 h-5" />
              <span>Beta Test Marketplace</span>
            </Link>
          </div>
          <hr className="border-t border-gray-700" />

          <Link
            href="/settings"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-8">
        <main className="p-6 space-y-6">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
