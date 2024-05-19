"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import * as React from "react";
import BoilerbaseIcon from "./BoilerbaseIcon";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";

export default function NavigationBar() {
  const session = useSession();

  // if (session.data != null) {
  //   userSession = session.data.user;
  // } else if (session.user != null) {
  //   userSession = session.user;
  // } else {
  //   userSession = null;
  // }

  // const hasAccess = !["SELLER", "ADMIN"].includes(userSession?.role);

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white shadow dark:bg-gray-950">
      <Link className="flex items-center gap-2" href="/">
        <BoilerbaseIcon />
        <span className="font-semibold text-xl">Boilerbase</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/discover"
        >
          Browse Boilerplates
        </Link>
        {session && (
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/sell-an-item"
          >
            Sell a Boilerplate
          </Link>
        )}
      </nav>
      {session ? (
        <div className="flex items-center gap-2">
          <Link
            href="/api/auth/signout"
            // onClick={() => signOut}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Sign out
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/api/auth/signin"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
}
