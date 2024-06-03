"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import GitHubIcon from "../public/icons/github-icon.svg";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import { OtherProjectType } from "@/types/projects-type";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { getStars } from "@/lib/utils";
import Link from "next/link";

export default function OtherProjectCard({ project }: { project: OtherProjectType }) {
    const [stars, setStars] = useState(0);
    useEffect(() => {
        if (project.star_key) {
            getStars(project.star_key).then(setStars);
        }
    }, [project.star_key]);

    return (
        <Card className="col-span-2 flex flex-col justify-between bg-secondary sm:col-span-1">
            <CardHeader>
                <div className="flex flex-row items-center justify-start gap-2">
                    <CardTitle className="font-bold">{project.name}</CardTitle>
                    {project.archived && (
                        <Badge
                            variant="outline"
                            className="rounded border border-orange-500 bg-orange-100 font-mono text-[0.6rem] font-light text-orange-600"
                        >
                            Archived
                        </Badge>
                    )}
                    {project.inProgress && (
                        <Badge
                            variant="outline"
                            className="rounded border border-purple-500 bg-purple-100 font-mono text-[0.6rem] font-light text-purple-600"
                        >
                            In Progress
                        </Badge>
                    )}
                </div>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                        <Badge
                            variant={"outline"}
                            key={tool}
                            className="rounded border border-zinc-400 bg-zinc-500/20 font-mono text-[0.6rem] font-light text-foreground"
                        >
                            {tool}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
                    {project.link && (
                        <Button asChild variant="outline" className="w-full gap-2">
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLinkIcon className="h-4 w-4" />
                                {project.buttonText}
                            </Link>
                        </Button>
                    )}
                    {project.github && (
                        <Button asChild variant="outline" className="w-full gap-2">
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
