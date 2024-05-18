"use client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { motion, useCycle } from "framer-motion";
import { signOut } from "next-auth/react";

export default function NavigationBar({
  session,
  dark = true,
}: {
  session: any;
  dark?: boolean;
}) {
  let userSession;

  if (session.data != null) {
    userSession = session.data.user;
  } else if (session.user != null) {
    userSession = session.user;
  } else {
    userSession = null;
  }

  const hasAccess = !["SELLER", "ADMIN"].includes(userSession?.role);

  const discoverList: {
    title: string;
    href: string;
    description: string;
    disabled: boolean;
  }[] = [
    {
      title: "Discover 🌐",
      href: "/discover",
      description: "Explore the latest templates and boilerplates.",
      disabled: false,
    },
    {
      title: "Featured ⭐",
      href: "/discover/featured",
      description: "Curated list of the best templates and boilerplates.",
      disabled: false,
    },
  ];

  const dashboardList: {
    title: string;
    href: string;
    description: string;
    disabled: boolean;
  }[] = [
    {
      title: "Overview 📊",
      href: "/dashboard",
      description: "View all your projects in one place.",
      disabled: false,
    },
    {
      title: "Products 📦",
      href: "/dashboard/products",
      description: "Manage your products and inventory.",
      disabled: hasAccess,
    },
    {
      title: "Orders 📄",
      href: "/dashboard/orders",
      description: "View and manage all your orders.",
      disabled: false,
    },
    {
      title: "Customers 👥",
      href: "/dashboard/customers",
      description: "Manage your customers and their orders.",
      disabled: hasAccess,
    },
  ];

  const resourcesList: {
    title: string;
    href: string;
    description: string;
    disabled: boolean;
  }[] = [
    {
      title: "Support 📧",
      href: "/support",
      description: "Get help from our team.",
      disabled: false,
    },
    {
      title: "About Us 🌐",
      href: "/about",
      description: "Learn more about our mission and values.",
      disabled: false,
    },
  ];

  const [open, toggleOpen] = useCycle(false, true);
  const sidebar = {
    open: () => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const router = useRouter();

  function handleLogin() {
    router.push("/auth/sign-in");
  }

  return (
    <>
      <div
        className="fixed w-full h-auto p-2 flex flex-row items-center justify-between gap-4 select-none user-select-none backdrop-blur-lg border-b-[1px] border-gray-50/10 bg-slate-950 sm:bg-black/20 z-50 filter"
        style={{
          WebkitBackdropFilter: "blur(16x)",
        }}
      >
        <Link
          href={"/"}
          className="flex flex-row gap-2 items-center justify-start w-1/2 sm:w-1/3 "
        >
          <Image
            src={
              "https://imagedelivery.net/PWe9rlYiKWdV4Gf-JnsgCw/faf4d104-cb3a-4669-e1f2-4b58f286fa00/2k"
            }
            alt="Logo"
            width={1200}
            height={1200}
            className={cn(
              "rounded-sm w-8 aspect-square transition-opacity duration-500",
              `${dark ? "mix-blend-screen invert" : ""} ${
                open ? "opacity-0 sm:opacity-100" : "opacity-100"
              }`
            )}
          ></Image>

          <span>
            <h1
              className={cn(
                "font-extrabold tracking-tight text-xl duration-500",
                `${dark ? "mix-blend-screen invert" : ""} ${
                  open ? "opacity-0 sm:opacity-100" : "opacity-100"
                }`
              )}
            >
              BoilerBase
            </h1>
          </span>
        </Link>

        <div className="flex flex-row gap-4 justify-end sm:justify-center w-1/2 sm:w-1/3">
          <NavigationMenu
            className="grayscale hidden sm:block"
            orientation="horizontal"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {discoverList.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        disabled={component.disabled}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {dashboardList.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        disabled={component.disabled}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {resourcesList.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        disabled={component.disabled}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              {userSession && (
                <NavigationMenuItem>
                  <Link href="/sell-an-item" passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle}>
                      Sell a Boilerplate
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <motion.nav
            initial={false}
            animate={open ? "open" : "closed"}
            className="block sm:hidden"
          >
            <motion.div
              variants={sidebar}
              className={cn(
                "absolute w-full h-[100vh] max-h-[100vh] inset-0 bg-slate-950 sm:bg-slate-50/10 backdrop-blur-lg transition-all z-40 ease-in-out duration-300 flex justify-center items-center "
              )}
              style={{
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <NavigationMenu
                className=" grayscale w-full max-w-full translate-y-[-4rem]"
                orientation="vertical"
              >
                <NavigationMenuList className="flex flex-col">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-full gap-3 p-4 md:grid-cols-2 overflow-auto max-h-60">
                        {discoverList.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-full gap-3 p-4 md:grid-cols-2 overflow-auto max-h-60">
                        {dashboardList.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-full gap-3 p-4 md:grid-cols-2 overflow-auto max-h-60">
                        {resourcesList.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>

            <Button
              onClick={() => toggleOpen()}
              className="z-50 block sm:hidden p-0"
            >
              <Menu
                className={cn("text-slate-50", `${!open ? "block" : "hidden"}`)}
              ></Menu>

              <X
                className={cn("text-slate-50", `${open ? "block" : "hidden"}`)}
              ></X>
            </Button>
          </motion.nav>
        </div>

        {/* RIGHT SIDE STUFF */}
        <div className="hidden sm:flex flex-row gap-4 justify-end w-1/3">
          {userSession ? (
            <Button
              onClick={() => signOut()}
              className={cn(
                "mx-1 px-6 py-2 rounded-full capitalize text-sm",
                `${
                  dark
                    ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30 border-slate-500 border-[1px]"
                    : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500 border-[1px]"
                }`
              )}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              className={cn(
                "mx-1 px-6 py-2 rounded-full capitalize text-sm",
                `${
                  dark
                    ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30 border-slate-500 border-[1px]"
                    : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500 border-[1px]"
                }`
              )}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  disabled?: boolean;
};

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, disabled, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              { "opacity-25 pointer-events-none": disabled },
              className
            )}
            onClick={(e) => {
              if (disabled) e.preventDefault();
            }}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
