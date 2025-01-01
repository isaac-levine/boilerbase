import { Footer } from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Cabin } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
const cabin = Cabin({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Boilerbase",
    template: "%s • Boilerbase",
  },
  description: "The fastest way to ship your SaaS app.",
  icons: ["/boilerbase-icon.png"],
};

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
      <AuthProvider>
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            cabin.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex flex-col min-h-screen">
              <NextTopLoader
                color="#2563eb"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2563eb,0 0 5px #2563eb"
                template='<div class="bar" role="bar"><div class="peg"></div></div> '
                zIndex={1600}
                showAtBottom={false}
              />
              <NavigationBar />
              <div className="flex-grow flex-1">{children}</div>
              <Footer />
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
