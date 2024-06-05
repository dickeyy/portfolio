import "@/styles/globals.css";
import { Nunito as Sans } from "next/font/google";
import { JetBrains_Mono as Mono } from "next/font/google";
import { Oooh_Baby as Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Metadata, Viewport } from "next";
import { PosthogProvider } from "@/components/posthog-provider";

const fontSans = Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "700"]
});

const fontSerif = Serif({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: "400"
});

const fontMono = Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400"
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dickey.gg"),
    title: "Kyle Dickey",
    description: "Kyle Dickey, Junior Full-stack Developer",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://dickey.gg",
        images: "/og-image.png"
    },
    twitter: {
        site: "https://dickey.gg",
        card: "summary_large_image",
        creator: "@kyledickeyy",
        description: "Kyle Dickey, Junior Full-stack Developer",
        title: "Kyle Dickey",
        images: "/og-image.png"
    },
    robots: "follow, index",
    keywords:
        "Kyle Dickey, Full-stack Developer, Web Developer, Software Developer, colorado, colorado state, colorado state university, dickey, kyle",
    category: "Web Development"
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#ffffff" }
    ]
};

export default function RootLayout({ children }: any) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontMono.variable,
                    fontSerif.variable
                )}
            >
                <PosthogProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        themes={["light"]}
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Toaster richColors theme="light" />
                        {children}
                    </ThemeProvider>
                </PosthogProvider>
            </body>
        </html>
    );
}
