import GitHubIcon from "../public/icons/github-icon.svg";
import TwitterIcon from "../public/icons/twitter-icon.svg";
import LinkedInIcon from "../public/icons/linkedin-icon.svg";
import InstagramIcon from "../public/icons/instagram-icon.svg";
import { cn } from "@/lib/utils";

export default function SocialsIcons({ className, size }: { className?: string; size: string }) {
    return (
        <div className={cn(className, "flex gap-4 fill-foreground/50")}>
            <a href="https://github.com/dickeyy" target="_blank" rel="noopener noreferrer">
                <GitHubIcon
                    className={cn(
                        size,
                        "hover:fill-foreground transition-all duration-150 ease-in-out cursor-pointer"
                    )}
                />
            </a>
            <a href="https://twitter.com/kyledickeyy" target="_blank" rel="noopener noreferrer">
                <TwitterIcon
                    className={cn(
                        size,
                        "hover:fill-foreground transition-all duration-150 ease-in-out cursor-pointer"
                    )}
                />
            </a>
            <a
                href="https://www.linkedin.com/in/kyletdickey/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon
                    className={cn(
                        size,
                        "hover:fill-foreground transition-all duration-150 ease-in-out cursor-pointer"
                    )}
                />
            </a>
            <a
                href="https://www.instagram.com/kyle.dickeyy/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon
                    className={cn(
                        size,
                        "hover:fill-foreground transition-all duration-150 ease-in-out cursor-pointer"
                    )}
                />
            </a>
        </div>
    );
}
