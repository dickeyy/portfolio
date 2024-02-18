import { cn } from "@/lib/utils";
import SocialsIcons from "./socials-icons";

export default function Footer({ className }: { className?: string }) {
    const year = new Date().getFullYear();

    return (
        <footer className={cn(className, "flex items-center justify-between w-full py-2")}>
            <p className="text-foreground/60 text-xs">© {year} Kyle Dickey</p>
            <SocialsIcons size="w-4 h-4" />
        </footer>
    );
}
