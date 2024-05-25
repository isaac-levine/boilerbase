"use client";

import { ReactNode, useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("darkmode") === "false" ? false : true
  );

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

  return <div>{children}</div>;
}
