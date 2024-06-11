"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import GitHubIcon from "../public/icons/github-icon.svg";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import { FeaturedProjectType } from "@/types/projects-type";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getStars } from "@/lib/utils";
import { BetaFlag, InProgressFlag } from "./project-flags";

export default function FeaturedProjectCard({ project }: { project: FeaturedProjectType }) {
    const [stars, setStars] = useState(0);
    useEffect(() => {
        if (project.star_key) {
            getStars(project.star_key).then(setStars);
        }
    }, [project.star_key]);

    return (
        <Card className="bg-secondary">
            <CardHeader>
                <div className="flex flex-row items-center justify-start gap-2">
                    <CardTitle className="font-serif text-2xl font-semibold italic">
                        {project.name}
                    </CardTitle>
                    {project.inProgress && <InProgressFlag />}
                    {project.beta && <BetaFlag />}
                </div>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <div className="-mt-2 mb-2 flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                            <Badge
                                variant={"outline"}
                                key={tool + "-" + index}
                                className="rounded border border-zinc-400 bg-zinc-500/20 font-mono text-[0.6rem] font-light text-foreground"
                            >
                                {tool}
                            </Badge>
                        ))}
                    </div>

                    <Image
                        alt={project.name}
                        src={`/images/projects/${project.image}`}
                        width={900}
                        height={200}
                        className="aspect-video rounded-lg"
                    />
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-center gap-2">
                    <Button asChild variant="outline" className="w-full gap-2 border-zinc-300">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="h-4 w-4" />
                            {project.buttonText}
                        </Link>
                    </Button>
                    {project.github && (
                        <Button asChild variant="outline" className="w-full gap-2 border-zinc-300">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="h-4 w-4" />
                                GitHub
                                {project.star_key && (
                                    <div className="flex flex-row items-center gap-2">
                                        <Badge
                                            variant={"outline"}
                                            className="flex items-center justify-center gap-1 rounded-full border border-zinc-400 py-0 font-mono text-[0.6rem] font-light text-foreground"
                                        >
                                            {stars.toLocaleString()}
                                            <StarIcon className="h-[0.85rem] w-[0.85rem]" />
                                        </Badge>
                                    </div>
                                )}
                            </Link>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
