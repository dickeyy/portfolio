import "@/styles/globals.css";
import { Varela_Round as FontSans } from "next/font/google";
import { JetBrains_Mono as Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import { Metadata } from "next";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "400"
});

const fontMono = Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400"
});

export const metadata: Metadata = {
    title: "Kyle Dickey",
    description: "Kyle Dickey, Junior Full-stack Developer",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://dickey.gg",
        images: "/me-circle.png"
    },
    twitter: {
        site: "https://dickey.gg",
        card: "summary",
        creator: "@kyledickeyy",
        description: "Kyle Dickey, Junior Full-stack Developer",
        title: "Kyle Dickey",
        images: "/me-circle.png"
    },
    robots: "follow, index",
    keywords:
        "Kyle Dickey, Full-stack Developer, Web Developer, Software Developer, colorado, colorado state, colorado state university, dickey, kyle",
    category: "Web Development"
};

export default function RootLayout({ children }: any) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontMono.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster richColors theme="light" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
