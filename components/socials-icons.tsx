import GitHubIcon from "../public/icons/github-icon.svg";
import TwitterIcon from "../public/icons/twitter-icon.svg";
import LinkedInIcon from "../public/icons/linkedin-icon.svg";
import InstagramIcon from "../public/icons/instagram-icon.svg";
import ThreadsIcon from "../public/icons/threads-icon.svg";
import { cn } from "@/lib/utils";

export default function SocialsIcons({ className, size }: { className?: string; size: string }) {
    return (
        <div className={cn(className, "flex gap-2 sm:gap-4")}>
            <a href="https://github.com/dickeyy" target="_blank" rel="noopener noreferrer">
                <GitHubIcon
                    className={cn(
                        size,
                        "cursor-pointer transition-all duration-200 ease-in-out hover:fill-foreground"
                    )}
                />
            </a>
            <a href="https://twitter.com/kyledickeyy" target="_blank" rel="noopener noreferrer">
                <TwitterIcon
                    className={cn(
                        size,
                        "cursor-pointer transition-all duration-200 ease-in-out hover:fill-foreground"
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
                        "cursor-pointer transition-all duration-200 ease-in-out hover:fill-foreground"
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
                        "cursor-pointer transition-all duration-200 ease-in-out hover:fill-foreground"
                    )}
                />
            </a>
            <a href="https://threads.net/@kyle.dickeyy" target="_blank" rel="noopener noreferrer">
                <ThreadsIcon
                    className={cn(
                        size,
                        "cursor-pointer transition-all duration-200 ease-in-out hover:fill-foreground"
                    )}
                />
            </a>
        </div>
    );
}
