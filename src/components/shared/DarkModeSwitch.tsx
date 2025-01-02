"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DarkModeSwitch({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {hasMounted && (
        <Switch
          className={`${className} outline-none hover:bg-transparent focus:bg-none`}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Switch>
      )}
    </>
  );
}
