import GradientBackground from "@/components/GradientBackground";
import NavigationBar from "@/components/NavigationBar";
// import { Navigation, NavigationLink } from "@/components/ui/navigation";
import { getSignedInUser } from "@/lib/auth/helper";
import {
  AlertTriangle,
  LayoutDashboard,
  PartyPopper,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSignedInUser();
  return (
    <div className="flex flex-col w-full h-screen">
      <GradientBackground></GradientBackground>
      <NavigationBar session={session} />
      <div className="w-full pt-2">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col pt-4 px-4 sm:px-20">{children}</div>
          <div className="h-20 w-full" />
        </div>
      </div>
    </div>
  );
}
