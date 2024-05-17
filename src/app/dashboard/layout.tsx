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
    <div className="flex flex-col w-full">
      <NavigationBar session={session} />
      {children}
    </div>
  );
}
