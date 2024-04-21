import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { OnboardingForm } from "./_components/onboarding-form";
import GradientBackground from "@/components/GradientBackground";

export default async function Page() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirst({ where: { id: session?.user.id } });

  if (!user) {
    return redirect("/auth/sign-in");
  }

  return (
    <main className="w-full">
      <OnboardingForm user={user} />
      <GradientBackground></GradientBackground>
    </main>
  );
}
