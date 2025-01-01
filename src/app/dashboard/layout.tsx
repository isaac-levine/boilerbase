import { authOptions } from "@/lib/auth/options";
import { FOUNDER, HACKER, PRO, getSubscriptionLevel } from "@/lib/stripe";
import { getServerSession } from "next-auth";
import Link from "next/link";
import UpgradeSection from "./UpgradeSection";

import BoilerbaseIconBlocks from "@/components/BoilerbaseIconBlocks";
import {
  Gauge,
  Settings,
  BookOpen,
  PlusCircle,
  MessageSquare,
  Sparkles,
  Upload,
  LayoutGrid,
} from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const subscriptionLevel = await getSubscriptionLevel();

  // If user is not signed in, prompt them to sign in to view the dashboard
  if (!user) {
    return (
      <div className="flex flex-col items-center h-screen ">
        <title>Dashboard • {process.env.SITE_TITLE}</title>
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
  // // Prompt the user to upgrade if they are signed in but non-paying
  // else if (![FOUNDER, HACKER, PRO].includes(subscriptionLevel)) {
  //   return <UpgradeSection />;
  // }

  const gotBoilerplate = user.receivedBoilerplate;

  // User is signed in, so we can display the dashboard
  return (
    <div className="flex min-h-screen">
      <title>Dashboard • {process.env.SITE_TITLE}</title>
      <div className="dark:bg-gray-900 dark:text-white w-72 p-6 space-y-6 hidden sm:block">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-bold text-lg"
          prefetch={false}
        >
          <Gauge className="w-6 h-6" />
          <span>Dashboard</span>
        </Link>
        <nav className="space-y-4">
          {/* <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link> */}
          {/* <hr className="border-t border-gray-700" /> */}

          <div className="flex flex-col gap-1">
            <Link
              href="/dashboard/boilerplates"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:dark:bg-gray-800"
              prefetch={false}
            >
              <LayoutGrid className="w-5 h-5" />
              <span>Browse Boilerplates</span>
            </Link>

            <Link
              href="/dashboard/boilerplates/post"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:dark:bg-gray-800"
              prefetch={false}
            >
              <Upload className="w-5 h-5" />
              <span>Post a Boilerplate</span>
            </Link>
          </div>
          {/* ---- Feature requests section with 3 links ---- */}
          {/* <hr className="border-t border-gray-700" />
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
          <hr className="border-t border-gray-700" /> */}

          {/* <Link
            href="/dashboard/beta-tests"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <FlaskConical className="w-5 h-5" />
            <span>My Beta Tests</span>
          </Link>
          <Link
            href="/dashboard/post-a-test"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <FlaskConical className="w-5 h-5" />
            <span>Post a Beta Test</span>
          </Link>
          <Link
            href="/dashboard/test-marketplace"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
            prefetch={false}
          >
            <FlaskConical className="w-5 h-5" />
            <span>Beta Test Marketplace</span>
          </Link> */}
          <hr className="border-t border-gray-700" />
          <Link
            href="/dashboard/generate"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:dark:bg-gray-800"
            prefetch={false}
          >
            <BoilerbaseIconBlocks size={30} />
            <span>Generate Boilerplate</span>
          </Link>
          <hr className="border-t border-gray-700" />
          <div className="flex flex-col gap-1">
            <Link
              href="https://boilerbase.featurebase.app/"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:dark:bg-gray-800"
              prefetch={false}
              target="_blank"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Feature Requests</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:dark:bg-gray-800"
              prefetch={false}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </div>
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
