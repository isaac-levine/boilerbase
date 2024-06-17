"use client";

import Link from "next/link";
import { Settings } from "lucide-react";
import * as React from "react";
import BoilerbaseIcon from "./BoilerbaseIcon";
import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import { LogIn, LogOut, Menu, Gauge } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

interface NavItems {
  name: string;
  href: string;
  requiresAuth?: boolean | false;
}

export default function NavigationBar() {
  const navRef = React.useRef(null);
  const session = useSession();
  // console.log("role:" + session.data?.user.role);

  // if (session.data != null) {
  //   userSession = session.data.user;
  // } else if (session.user != null) {
  //   userSession = session.user;
  // } else {
  //   userSession = null;
  // }

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-background dark:bg-foreground/5 shadow sticky inset-0 backdrop-blur-md border-b border-foreground/10">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Sheet>
        <SheetTrigger className="sm:hidden items-start justify-start w-1/3">
          {/* <Link className="flex items-center gap-2" href="/"> */}
          {/* <BoilerbaseIcon /> */}
          {/* <span className="font-semibold text-xl">Boilerbase</span> */}
          {/* </Link> */}
          <Menu size={34}></Menu>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-full border-none">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center">
              <SheetClose asChild>
                <Link className="flex items-center gap-2" href="/">
                  <BoilerbaseIcon size={35} />
                  <span className="font-semibold text-xl">Boilerbase</span>
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <nav
            className="flex flex-col items-center gap-6 h-full justify-center text-lg font-semibold"
            ref={navRef}
          >
            <SheetClose asChild>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/"
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </SheetClose>
            {/* <SheetClose asChild>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/dashboard/feature-marketplace"
              >
                Feature Marketplace
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/dashboard/post-a-feature"
              >
                Post a Feature
              </Link>
            </SheetClose> */}
            <DarkModeToggle />
            <SheetClose asChild>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/settings"
              >
                Settings
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/api/auth/signout"
              >
                Sign Out
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>

      <Link
        className="flex items-center justify-center gap-2 w-1/3 sm:w-auto"
        href="/"
      >
        <BoilerbaseIcon size={32} />
        <span className="sm:block font-semibold text-xl hidden">
          Boilerbase
        </span>
      </Link>
      <nav
        className="hidden md:flex items-center gap-6 text-sm font-medium"
        ref={navRef}
      >
        {/* <Link
          className="hover:underline hover:underline-offset-4 font-semibold"
          href="/dashboard"
        >
          Dashboard
        </Link> */}
        {/* <Link
          className="hover:underline hover:underline-offset-4"
          href="/dashboard/feature-marketplace"
        >
          Feature Marketplace
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/dashboard/post-a-feature"
        >
          Post a Feature
        </Link> */}
      </nav>
      {session.data?.user ? (
        <div className="flex items-center justify-end gap-2 w-1/3 sm:w-auto">
          <DarkModeToggle className="hidden sm:block"></DarkModeToggle>
          <Link
            href="/dashboard"
            className={`${buttonVariants({
              variant: "outline",
            })} border-[0px] sm:border-[1px] dark:bg-foreground/10 border-foreground/10 flex flex-row gap-2`}
          >
            <span className="hidden sm:block">Dashboard</span>
            <Gauge className="block sm:hidden" size={16}></Gauge>
          </Link>
          <Link
            href="/settings"
            className={`${buttonVariants({
              variant: "outline",
            })} border-[0px] sm:border-[1px] dark:bg-foreground/10 border-foreground/10 flex flex-row gap-2`}
          >
            <span className="hidden sm:block">Settings</span>
            <Settings className="block sm:hidden" size={16}></Settings>
          </Link>
          <Link
            href="/api/auth/signout"
            // onClick={() => signOut}
            className={`${buttonVariants({
              variant: "outline",
            })} border-[0px] sm:border-[1px] dark:bg-foreground/10 border-foreground/10 `}
          >
            <span className="hidden sm:block">Sign out</span>
            <LogOut className="block sm:hidden" size={16}></LogOut>
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-2  w-1/3 sm:w-auto">
          <DarkModeToggle className="hidden sm:block"></DarkModeToggle>

          <Link
            href="/api/auth/signin"
            className={`${buttonVariants({
              variant: "outline",
            })} border-[0px] sm:border-[1px] dark:bg-foreground/10 border-foreground/10`}
          >
            <span className="hidden sm:block">Sign In</span>
            <LogIn className="block sm:hidden" size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
