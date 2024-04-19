import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/onboarding/account");
  } else {
    redirect("/auth/sign-in");
  }

  return (
    <div className="grid place-items-center">
      <div className="flex items-center gap-2 animate-pulse">
        <Loader2 className="animate-spin" size={18} />
        <p className="text-sm font-mono">Loading...</p>
      </div>
    </div>
  );
}
