import BlogPostPreview from "@/components/blog-preview";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/types/blog-post";
import { cn } from "@/lib/utils";

export default function BlogPostList({
    posts,
    className
}: {
    posts: BlogPost[];
    className?: string;
}) {
    return (
        <div className={cn(className, "text-foreground flex flex-col items-start")}>
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {posts.map((post) => (
                        <BlogPostPreview key={post.slug} post={post} />
                    ))}
                    <Card className="bg-secondary col-span-1 w-full">
                        <CardHeader>
                            <CardTitle className="font-bold">Thats it...</CardTitle>
                            <CardDescription>
                                <p className="text-foreground/60">
                                    I&apos;m working on creating more posts for you to read, so
                                    check back soon. Thank&apos;s for reading!
                                </p>
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button asChild variant={"outline"} className="w-full">
                                <a
                                    href={`/blog/${posts[Math.floor(Math.random() * posts.length)].slug}`}
                                >
                                    Read a Random Post
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl font-bold sm:text-2xl">No blog posts yet...</h1>
                    <p className="text-foreground/60">
                        I&apos;m working on creating some though, so check back soon!
                    </p>
                </>
            )}
        </div>
    );
}
