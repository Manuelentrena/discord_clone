"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ActionTooltip } from "@/components/action-tooltip";

const Themes = {
  LIGHT: "light",
  DARK: "dark",
};

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
    theme === Themes.LIGHT ? setTheme(Themes.DARK) : setTheme(Themes.LIGHT);
  };

  return (
    <ActionTooltip
      label={`Theme ${theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT}`}
      side="right"
      align="center"
    >
      <Button
        onClick={changeTheme}
        className=" dark:bg-neutral-700  text-emerald-500 hover:text-white rounded-[24px] h-[48px] w-[48px] mx-3 dark:hover:bg-emerald-500 hover:bg-emerald-500 hover:rounded-[16px] transition-all"
        variant="outline"
        size="icon"
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </ActionTooltip>
  );
}
