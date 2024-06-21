import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { buttonVariants } from "@/components/ui/button";
import FeatureRequestsTable from "./FeatureRequestsTable";
import BetaTestsTable from "./BetaTestsTable";
import { CodeXml, LayoutDashboard, FlaskConical, Settings } from "lucide-react";

export default async function Component() {
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
      <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-8">
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col gap-4">
              <CardHeader className="flex items-center justify-between">
                {gotBoilerplate ? (
                  <CardTitle>Already got Boilerplate</CardTitle>
                ) : (
                  <CardTitle>Claim your Boilerplate</CardTitle>
                )}
                <CodeXml className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                {gotBoilerplate ? (
                  <Link className={buttonVariants()} href="/form">
                    Get Boilerplate
                  </Link>
                ) : (
                  <Link className={buttonVariants()} href="/form">
                    Get Boilerplate
                  </Link>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Listed Feature Requests</CardTitle>
                <LayoutDashboard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+2350</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Listed Beta Tests</CardTitle>
                <FlaskConical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+12,234</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <FeatureRequestsTable />
          <BetaTestsTable />
        </main>
      </div>
    </div>
  );
}
