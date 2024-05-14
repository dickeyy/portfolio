import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BlogPost } from "@/types/blog-post";
import Link from "next/link";

export default function BlogPostPreview({ post }: { post: BlogPost }) {
    return (
        <Card className="col-span-1 w-full bg-secondary">
            <CardHeader>
                <CardTitle className="font-bold">{post.title}</CardTitle>
                <CardDescription>{post.tagline}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild variant={"outline"} className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
