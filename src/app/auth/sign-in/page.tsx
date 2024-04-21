"use client";
import { FcGoogle } from "react-icons/fc";
// import Image from "next/image";
// import Link from "next/link";
// import { Label } from "@/components/ui/label";
// import { Alert } from "@/components/ui/alert";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { AlertTriangle, Loader2, Lock } from "lucide-react";
// import { signIn, useSession } from "next-auth/react";
// import { redirect, useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FormEvent } from "react";
// import { Suspense } from "react";
// export default function Page() {
//   const session = useSession();
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [authError, setAuthError] = useState<string | null>(null);

//   const query = useSearchParams();

//   useEffect(() => {
//     if (query?.get("error")) {
//       setAuthError(query.get("error"));
//       console.log(authError);
//     }
//   }, [query, authError]);

//   const handleSignIn = async (event: FormEvent) => {
//     event.preventDefault(); // prevent the form from doing a page refresh
//     setLoading(true);
//     await signIn("email", { email: email, callbackUrl: "/dashboard" });
//     setLoading(false);
//   };

//   if (session.data && session.data?.user) {
//     //redirect to /dashboard in 1 second
//     setTimeout(() => {
//       router.push("/dashboard");
//     }, 1000);

//     return (
//       <>
//         {/* user already logged in, redirecting to dashboard */}
//         <div className="flex flex-col w-full justify-center items-center select-none">
//           <Loader2 className="animate-spin" size={18} />
//           <p className="text-muted">{"Redirecting to dashboard..."}</p>
//         </div>
//       </>
//     );
//   }

//   return (
//     <Suspense>
//       <main>
//         <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[800px]">
//           <div className="flex items-center justify-center">
//             <div className="mx-auto grid w-[350px] gap-6">
//               <div className="grid gap-2 text-center select-none">
//                 {authError && (
//                   <Alert
//                     variant={"default"}
//                     className="space-x-2 mb-6 bg-black/0 backdrop-blur-md"
//                   >
//                     <AlertTriangle color="white" />
//                     <p>{authError}</p>
//                   </Alert>
//                 )}
//                 <h1 className="text-3xl font-bold">Login</h1>

//                 <p className="text-balance text-muted-foreground">
//                   Enter your email below to login to your account
//                 </p>
//               </div>
//               <div className="grid gap-4">
//                 <div className="grid gap-2">
//                   <form onSubmit={handleSignIn}>
//                     <div className="flex flex-col">
//                       <div className="flex flex-col pb-4">
//                         <p className="text-sm text-muted pb-2 select-none">
//                           Email
//                         </p>
//                         <Input
//                           value={email}
//                           type="email"
//                           onChange={(e) => setEmail(e.target.value)}
//                           required={true}
//                           placeholder="m@example.com"
//                         />
//                       </div>
//                       <Button type="submit" size={"lg"} loading={loading}>
//                         Login
//                       </Button>
//                     </div>
//                   </form>
//                   <Button
//                     size={"lg"}
//                     className="mt-2 bg-white/0 text-white backdrop-blur-md outline-white select-none"
//                     disabled={true}
//                   >
//                     Request Access
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </Suspense>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spline from "@splinetool/react-spline";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import BoilerBackground from "@/components/BoilerBackground";
import GradientBackground from "@/components/GradientBackground";

export default function SignIn() {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [authError, setAuthError] = useState<string | null>(null);

  const query = useSearchParams();

  useEffect(() => {
    if (query?.get("error")) {
      setAuthError(query.get("error"));
      console.log(authError);
    }
  }, [query, authError]);

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault(); // prevent the form from doing a page refresh
    setLoading(true);
    await signIn("email", { email: email, callbackUrl: "/dashboard" });
    setLoading(false);
  };

  if (session.data && session.data?.user) {
    //redirect to /dashboard in 1 second
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    return (
      <>
        {/* user already logged in, redirecting to dashboard */}
        <div className="flex flex-col w-full justify-center items-center select-none">
          <Loader2 className="animate-spin" size={18} />
          <p className="text-muted">{"Redirecting to dashboard..."}</p>
        </div>
      </>
    );
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen select-none">
      <div className="flex items-center justify-center py-12 bg-gradient-to-b from-slate-50 to-slate-300 h-full px-12">
        <div className="mx-auto grid w-[350px] gap-6 ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <form onSubmit={handleSignIn} className="gap-4 flex flex-col">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-slate-50 shadow-sm">
                Login
              </Button>
            </form>
            <Button
              variant="outline"
              className="w-full bg-slate-50 shadow-sm"
              disabled={true}
            >
              <FcGoogle /> Login with Google
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted sm:flex overflow-hidden select-none user-select-none  justify-center items-center w-full h-full">
        <BoilerBackground />
      </div>

    </div>
  );
}
