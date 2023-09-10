"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      onClick={changeTheme}
      className="bg-transparent border-0"
      variant="outline"
      size="icon"
    >
      {theme === "dark" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
      {theme === "light" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
