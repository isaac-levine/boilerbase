import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

import { AuthProvider } from "@/components/providers/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "BoilerBase | Premier Marketplace for Web App Boilerplates",
  description: "Your one-stop shop for web app boilerplates and templates",
  icons: [
    "https://imagedelivery.net/PWe9rlYiKWdV4Gf-JnsgCw/faf4d104-cb3a-4669-e1f2-4b58f286fa00/2k",
  ],
};
import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { useSession } from "next-auth/react";
import { getSignedInUser } from "@/lib/auth/helper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const session = await getSignedInUser();
  // const session = await getServerSession(authOptions)
  // console.log(session)
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <AuthProvider>
            <NextTopLoader
              color="white"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              template='<div class="bar" role="bar"><div class="peg"></div></div> '
              zIndex={1600}
              showAtBottom={false}
            />
            <NavigationBar />
            <div className="flex-grow flex-1">{children}</div>
          </AuthProvider>
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
