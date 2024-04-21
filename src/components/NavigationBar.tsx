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

const discoverList: { title: string; href: string; description: string }[] = [
  {
    title: "Discover 🌐",
    href: "/discover",
    description: "Explore the latest templates and boilerplates.",
  },
  {
    title: "Featured ⭐",
    href: "/discover/featured",
    description: "Curated list of the best templates and boilerplates.",
  },
];

const dashboardList: { title: string; href: string; description: string }[] = [
  {
    title: "Overview 📊",
    href: "/dashboard",
    description: "View all your projects in one place.",
  },
  {
    title: "Products 📦",
    href: "/dashboard/products",
    description: "Manage your products and inventory.",
  },
  {
    title: "Orders 📄",
    href: "/dashboard/orders",
    description: "View and manage all your orders.",
  },
  {
    title: "Customers 👥",
    href: "/dashboard/customers",
    description: "Manage your customers and their orders.",
  },
];

const resourcesList: { title: string; href: string; description: string }[] = [
  {
    title: "Support 📧",
    href: "/support",
    description: "Get help from our team.",
  },
  {
    title: "About Us 🌐",
    href: "/about",
    description: "Learn more about our mission and values.",
  },
];

export default function NavigationBar({
  session,
  dark = true,
}: {
  session: any;
  dark?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  function handleMobileMenu() {
    setOpen(!open);
  }

  const router = useRouter();

  function handleLogin() {
    router.push("/auth/sign-in");
  }

  return (
    <>
      <div className="w-full h-auto p-4 flex flex-row items-center justify-between gap-4 select-none user-select-none backdrop-blur-lg border-b-[1px] border-gray-50/10 bg-black/20">
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
              "rounded-sm w-8 aspect-square",
              `${dark ? "mix-blend-screen invert" : ""} ${
                open ? "opacity-10 sm:opacity-100" : ""
              }`
            )}
          ></Image>

          <span>
            <h1
              className={cn(
                "font-extrabold tracking-tight text-lg",
                `${dark ? "text-slate-50" : "text-gray-950"} ${
                  open ? "opacity-10 sm:opacity-100" : ""
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
                  <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
              {/* <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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

          <Button onClick={handleMobileMenu} className="z-50 block sm:hidden">
            <Menu
              className={cn("text-slate-50", `${!open ? "block" : "hidden"}`)}
            ></Menu>

            <X
              className={cn("text-slate-50", `${open ? "block" : "hidden"}`)}
            ></X>
          </Button>

          <div
            className={cn(
              "absolute w-full h-[100svh] max-h-[100svh] inset-0 bg-slate-50/10 backdrop-blur-lg transition-all z-40 ease-in-out duration-300 flex justify-center items-center",
              `${open ? "flex sm:hidden" : "hidden sm:hidden"}`
            )}
          >
            <NavigationMenu
              className="grayscale w-full max-w-full"
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

                {session.data != null ? (
                  <></>
                ) : (
                  <>
                    <NavigationMenuItem>
                      <Button onClick={handleLogin}>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle}
                        >
                          Login
                        </NavigationMenuLink>
                      </Button>
                    </NavigationMenuItem>
                  </>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-4 justify-end w-1/3">
          <div>
            <Button
              onClick={handleLogin}
              className={cn(
                "px-6 py-2 rounded-full capitalize text-sm",
                `${
                  dark
                    ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30 border-slate-500 border-[1px]"
                    : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500 border-[1px]"
                }`
              )}
            >
              {session.data != null ? "Dashboard" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
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
});
ListItem.displayName = "ListItem";
