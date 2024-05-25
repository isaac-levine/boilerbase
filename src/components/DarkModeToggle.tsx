"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DarkModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {hasMounted && (
        <Button
          variant={"ghost"}
          className={`${className} outline-none hover:bg-transparent focus:bg-none`}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      )}
    </>
  );
}
