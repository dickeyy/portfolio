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
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                            <Badge
                                variant={"secondary"}
                                key={tool}
                                className="text-xs hover:bg-foreground/10 bg-foreground/[8%] rounded border border-foreground border-dashed"
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
                        className="rounded-lg aspect-video"
                    />
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex items-center gap-2 w-full">
                    <Button asChild variant="outline" className="w-full gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="w-4 h-4" />
                            {project.buttonText}
                        </a>
                    </Button>
                    {project.github && (
                        <Button asChild variant="outline" className="w-full gap-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="w-4 h-4" />
                                GitHub
                            </a>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
