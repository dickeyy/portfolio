import BlogPostPreview from "@/components/blog-preview";
import Footer from "@/components/footer";
import Title from "@/components/title";
import { getAllPost } from "@/lib/blog-posts";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Kyle Dickey Blog"
};

export default async function Page() {
    const posts = getAllPost();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="md:2/3 mt-8 flex w-full flex-col items-start justify-start gap-4 sm:mt-0 lg:w-1/2">
                <Title />
                <div className="mt-8 flex w-full flex-col items-start justify-start gap-1">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {posts.map((post) => (
                                <BlogPostPreview key={post.slug} post={post} />
                            ))}
                            <Card className="col-span-1 w-full bg-secondary">
                                <CardHeader>
                                    <CardTitle className="font-bold">Thats it...</CardTitle>
                                    <CardDescription>
                                        <p className="text-foreground/60">
                                            I&apos;m working on creating more posts for you to read,
                                            so check back soon. Thank&apos;s for reading!
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
            </div>
            <div className="md:2/3 flex w-full flex-col items-start justify-start gap-4 lg:w-1/2">
                <Footer className="mt-20" />
            </div>
        </main>
    );
}
