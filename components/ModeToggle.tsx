"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle({
  variant = "default",
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) {
  const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return resolvedTheme === "dark" ? (
      <Button variant={variant} size={"icon"} onClick={() => setTheme("light")}>
        <Sun />
      </Button>
    ) : (
      <Button variant={variant} size={"icon"} onClick={() => setTheme("dark")}>
        <Moon />
      </Button>
    );
  };

  return ThemeSwitch();
}
