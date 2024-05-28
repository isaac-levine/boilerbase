"use client";

import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { signOut } from "next-auth/react";

export default function Page() {
  return (
    // <div className="flex flex-col select-none">
    //   <div className="flex flex-col text-center">
    //     <h1 className="text-xl">Magic link sent</h1>
    //     <p className="text-muted tracking-tight">
    //       {"Please check your email for a magic sign-in link."}
    //     </p>
    //   </div>
    // </div>
    <div className="w-full h-screen select-none">
      <div className="flex items-center justify-center py-12 bg-gradient-to-b from-background to-foreground/20 h-full">
        <div className="mx-auto grid w-[350px] gap-6 ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Are you sure you want to sign out?</h1>
            <p className="text-balance text-muted-foreground">
              {"Please click the button below to sign out."}
            </p>
            <Button onClick={()=>{
                signOut()
            }}>Sign Out</Button>
          </div>
        </div>
      </div>
      {/* <div className="hidden bg-muted lg:flex overflow-hidden select-none user-select-none  justify-center items-center w-full h-full"></div> */}
    </div>
  );
}
