"use client";

import { ReactNode, useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const savedDarkmode = localStorage.getItem("darkmode");
    if (savedDarkmode) {
      setDarkmode(savedDarkmode === "true");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode ? "true" : "false");
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return <>{children}</>;
}
