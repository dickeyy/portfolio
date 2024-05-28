"use client";

import { cn } from "@/lib/utils";
import { OtherProjectType, ProjectsType } from "@/types/projects-type";
import FeaturedProjectCard from "./featured-project-card";
import OtherProjectCard from "./other-project-card";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const projects: ProjectsType = {
    featured: [
        {
            name: "Hansumfella Merch",
            description:
                "A merch website for a Twitch streamer I like watching. I was commissioned to make the website by the streamer, it was a fun and very successful project.",
            image: "hansumfella-project.webp",
            link: "https://hansumfella.com",
            tools: ["Next.js", "TypeScript", "Tailwind", "GraphQL", "Shopify", "Vercel"],
            buttonText: "Visit Website",
            github: "https://github.com/dickeyy/hansumfella-website"
        },
        {
            name: "tip.dev",
            description:
                "A platform for developers to get paid for their work. I am currently working on this project, I am very excited about it. I plan to launch it in 2024.",
            image: "tipdev-project.webp",
            link: "https://tip.dev",
            tools: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "PostgreSQL",
                "Redis",
                "Stripe",
                "REST",
                "Vercel"
            ],
            buttonText: "Visit Website",
            github: "https://github.com/tipdotdev",
            inProgress: true
        },
        {
            name: "Outgone",
            description:
                "A new wave of social networking. This is a social media platform for users to find groups of like-minded people. I am currently working on this project, I plan to launch it late 2024.",
            image: "outgone-project.webp",
            link: "https://outgone.app",
            tools: [
                "React Native",
                "Tailwind",
                "Next.js",
                "Redis",
                "PostgreSQL",
                "Go",
                "TypeScript"
            ],
            buttonText: "Visit Website",
            github: "https://github.com/outgone",
            inProgress: true
        }
    ],
    other: [
        {
            name: "Quack",
            description: "A Discord bot focused on making Discord safer one server at a time.",
            link: "https://quackbot.xyz",
            tools: ["TypeScript", "MySQL", "Drizzle", "Redis", "Kafka", "Go"],
            buttonText: "Website",
            github: "https://github.com/seedsdiscord"
        },
        {
            name: "Wrink",
            description:
                "Get sh*t done. A new wave of project management. Made by the Outgone team.",
            link: "https://wrink.app",
            tools: ["Next.js", "TypeScript", "Tailwind", "Go", "Redis"],
            buttonText: "Website",
            github: "https://github.com/wrinkapp",
            inProgress: true
        },
        {
            name: "Alias",
            description: "A modern way to play a game my family and I made.",
            link: "https://alias.kyle.so",
            tools: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Vercel"],
            buttonText: "Website",
            github: "https://github.com/dickeyy/alias"
        },
        {
            name: "Dismegle Website",
            description: "The website for Dismegle, a Discord server",
            tools: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
            link: "https://dismegle.com",
            buttonText: "Website"
        },
        {
            name: "LeetCode",
            description: "A GitHub repo containing all of my LeetCode solutions.",
            tools: ["TypeScript", "MySQL"],
            github: "https://github.com/dickeyy/leetcode"
        },
        {
            name: "Travel Log",
            description:
                "Track all the places you've gone. Log in with demo@dickey.gg, password: travellogdemo",
            link: "https://travel.kyle.so",
            tools: ["React", "NodeJS", "ChakraUI", "MongoDB", "REST", "Vercel"],
            buttonText: "Website",
            github: "https://github.com/dickeyy/travel-log"
        },
        {
            name: "LasTag",
            description: "The last gamer tag you'll ever need. Basically Linktree for gamers.",
            link: "https://lastag.xyz",
            tools: ["Next.js", "Tailwind", "TypeScript", "Redis", "MongoDB", "Clerk"],
            buttonText: "Website",
            github: "https://github.com/dickeyy/lastag"
        },
        {
            name: "TikTok Scaper",
            description:
                "A small project I made for Hansumfella to get follower counts for a list of users.",
            tools: ["TypeScript", "Redis", "Cheerio"],
            github: "https://github.com/dickeyy/tiktok-scraper"
        },
        {
            name: "Countdown",
            description: "A simple event countdown website.",
            tools: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
            link: "https://countdown.kyle.so",
            buttonText: "Website",
            github: "https://github.com/dickeyy/countdown"
        },
        {
            name: "Mirky",
            description: "A little app to help teens with their finances.",
            tools: ["Expo", "React Native", "TypeScript", "Tailwind", "PostgreSQL"],
            github: "https://github.com/mirkyapp",
            inProgress: true
        },
        {
            name: "Wordle Clone",
            description: "A realtime multiplayer clone of the popular game Wordle.",
            tools: ["HTML", "CSS", "Firebase", "Vercel"],
            link: "https://wordle.dickey.gg",
            buttonText: "Website",
            github: "https://github.com/dickeyy/wordle-clone"
        },
        {
            name: "Spotinder",
            description:
                "A website to find new music for Spotify. Similar to Tinder, but for music.",
            tools: ["React", "CSS", "Spotify API", "MongoDB"],
            link: "https://spotinder.dickey.gg",
            buttonText: "Website",
            github: "https://github.com/dickeyy/spotinder",
            archived: true
        },
        {
            name: "SPHL",
            description:
                "A website to check your music knowledge, similar to the game Higher Lower.",
            tools: ["React", "CSS", "Spotify API", "Vercel"],
            link: "https://sphl.dickey.gg",
            buttonText: "Website",
            github: "https://github.com/dickeyy/spotify-higher-lower",
            archived: true
        },
        {
            name: "Dismegle AI",
            description: "A series of AI models for moderation on Dismegle.",
            tools: ["Brain.js", "PyTorch", "LLM"],
            github: "https://github.com/dickeyy/dismegle-ai",
            archived: true
        }
    ]
};

export default function ProjectsSection({ className }: { className?: string }) {
    const [viewMore, setViewMore] = useState(false);
    const [otherProjects, setOtherProjects] = useState<OtherProjectType[]>([]);

    useEffect(() => {
        if (viewMore) {
            setOtherProjects(projects.other);
        } else {
            // Only show 2 other projects
            setOtherProjects(projects.other.slice(0, 2));
        }
    }, [viewMore]);

    return (
        <div className={cn(className, "flex flex-col items-start text-foreground")}>
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="text-md font text-foreground/60">In no particular order...</p>
            <div className="mt-4 flex w-full flex-col gap-4">
                {projects.featured.map((project, index) => (
                    <FeaturedProjectCard key={index} project={project} />
                ))}
                <div className="grid w-full grid-cols-2 gap-4">
                    {otherProjects.map((project, index) => (
                        <OtherProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
            <Button
                variant={"ghost"}
                onClick={() => setViewMore(!viewMore)}
                className="mt-4 w-full"
            >
                {viewMore ? "Show Fewer" : "Show More"}
            </Button>

            <div className="mt-4 flex flex-col">
                <h4 className="text-lg font-bold">And so many more...</h4>
                <p className="text-md font text-foreground/60">
                    Checkout my{" "}
                    <a
                        href="https://github.com/dickeyy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        GitHub
                    </a>{" "}
                    to see them all.
                </p>
            </div>
        </div>
    );
}
