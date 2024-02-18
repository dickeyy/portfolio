import { cn } from "@/lib/utils";
import SocialsIcons from "./socials-icons";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
    const year = new Date().getFullYear();

    return (
        <footer className={cn(className, "flex w-full items-center justify-between py-2")}>
            <p className="text-xs text-foreground/60">
                © {year}{" "}
                <Link href="/" className="hover:underline">
                    Kyle Dickey
                </Link>
            </p>
            <SocialsIcons size="w-4 h-4 fill-foreground/50" />
        </footer>
    );
}
