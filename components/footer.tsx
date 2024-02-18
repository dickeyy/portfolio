import { cn } from "@/lib/utils";
import SocialsIcons from "./socials-icons";

export default function Footer({ className }: { className?: string }) {
    const year = new Date().getFullYear();

    return (
        <footer className={cn(className, "flex w-full items-center justify-between py-2")}>
            <p className="text-xs text-foreground/60">© {year} Kyle Dickey</p>
            <SocialsIcons size="w-4 h-4" />
        </footer>
    );
}
