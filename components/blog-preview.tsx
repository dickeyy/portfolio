import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BlogPost } from "@/types/blog-post";

export default function BlogPostPreview({ post }: { post: BlogPost }) {
    return (
        <Card className="col-span-1 w-full bg-secondary">
            <CardHeader>
                <CardTitle className="font-bold">{post.title}</CardTitle>
                <CardDescription>
                    <p className="text-foreground/60">{post.tagline}</p>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild variant={"outline"} className="w-full">
                    <a href={`/blog/${post.slug}`}>Read More</a>
                </Button>
            </CardFooter>
        </Card>
    );
}
