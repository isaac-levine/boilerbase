// SignInForm.tsx (Client Component)
"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SignInForm() {
  const session = useSession();
  const router = useRouter();

  if (session.data?.user) {
    setTimeout(() => {
      router.push("/");
    }, 100);

    return (
      <div className="flex flex-col w-full h-screen justify-center items-center select-none">
        <Loader2 className="animate-spin text-white" size={18} />
        <p className="text-white">{"Redirecting to dashboard..."}</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] h-screen select-none">
      <div className="flex items-center justify-center py-12 bg-gradient-to-b from-background to-foreground/20 h-full px-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full dark:bg-foreground shadow-sm dark:text-background gap-2 border-foreground/10"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <FaGithub /> Login with GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
