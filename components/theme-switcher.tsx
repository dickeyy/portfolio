"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
    const { setTheme, theme } = useTheme();

    return (
        <>
            {theme === "dark" ? (
                <Sun
                    className={cn(
                        className,
                        "cursor-pointer text-background hover:fill-foreground"
                    )}
                    onClick={() => setTheme("light")}
                />
            ) : (
                <Moon
                    className={cn(
                        className,
                        "cursor-pointer text-background hover:fill-foreground"
                    )}
                    onClick={() => setTheme("dark")}
                />
            )}
        </>
    );
}
