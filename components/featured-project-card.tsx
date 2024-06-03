import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import GitHubIcon from "../public/icons/github-icon.svg";
import { ExternalLinkIcon } from "lucide-react";
import { FeaturedProjectType } from "@/types/projects-type";
import SkillBadge from "./skill-badge";
import { Badge } from "./ui/badge";

export default function FeaturedProjectCard({ project }: { project: FeaturedProjectType }) {
    return (
        <Card className="bg-secondary">
            <CardHeader>
                <div className="flex flex-row items-center justify-start gap-2">
                    <CardTitle className="font-bold">{project.name}</CardTitle>
                    {project.inProgress && (
                        <Badge
                            variant="outline"
                            className="rounded border border-purple-500 bg-purple-100 font-mono text-[0.6rem] font-light text-purple-600"
                        >
                            In Progress
                        </Badge>
                    )}
                    {project.beta && (
                        <Badge
                            variant="outline"
                            className="rounded border border-blue-500 bg-blue-100 font-mono text-[0.6rem] font-light text-blue-600"
                        >
                            Beta
                        </Badge>
                    )}
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
                    <Button asChild variant="outline" className="w-full gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="h-4 w-4" />
                            {project.buttonText}
                        </a>
                    </Button>
                    {project.github && (
                        <Button asChild variant="outline" className="w-full gap-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
