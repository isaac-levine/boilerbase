"use client";

import Spline from "@splinetool/react-spline";

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
            <h1 className="text-3xl font-bold">Magic link sent</h1>
            <p className="text-balance text-muted-foreground">
              {"Please check your email for a magic sign-in link."}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="hidden bg-muted lg:flex overflow-hidden select-none user-select-none  justify-center items-center w-full h-full"></div> */}
    </div>
  );
}
