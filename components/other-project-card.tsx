import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import GitHubIcon from "../public/icons/github-icon.svg";
import { ExternalLinkIcon } from "lucide-react";
import { OtherProjectType } from "@/types/projects-type";
import { Badge } from "./ui/badge";

export default function OtherProjectCard({ project }: { project: OtherProjectType }) {
    return (
        <Card className="bg-secondary col-span-2 flex flex-col justify-between sm:col-span-1">
            <CardHeader>
                <CardTitle className="font-bold">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                        <Badge
                            variant={"outline"}
                            key={tool}
                            className="border-foreground text-foreground rounded border border-dashed font-mono text-[0.6rem] font-light"
                        >
                            {tool}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-center gap-2">
                    {project.link && (
                        <Button asChild variant="outline" className="w-full gap-2">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLinkIcon className="h-4 w-4" />
                                {project.buttonText}
                            </a>
                        </Button>
                    )}
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
