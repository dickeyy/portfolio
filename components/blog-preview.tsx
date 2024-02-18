import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import GitHubIcon from "../public/icons/github-icon.svg";
import { ExternalLinkIcon } from "lucide-react";
import { FeaturedProjectType } from "@/types/projects-type";
import SkillBadge from "./skill-badge";
import { Badge } from "./ui/badge";

type Post = {
    _id: string;
    title?: string;
    tagline?: string;
    slug?: {
        current: string;
    };
    publishedAt: string;
};

export default function BlogPostPreview({ post }: { post: Post }) {
    return (
        <Card className="w-full bg-secondary">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                    <p className="text-foreground/60">{post.tagline}</p>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild variant={"outline"} className="w-full">
                    <a href={`/blog/${post.slug?.current}`}>Read More</a>
                </Button>
            </CardFooter>
        </Card>
    );
}
