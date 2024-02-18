import BlogPostPreview from "@/components/blog-preview";
import Footer from "@/components/footer";
import Title from "@/components/title";
import { client } from "@/lib/sanity";

export const metadata = {
    title: "Kyle Dickey Blog"
};

type Post = {
    _id: string;
    title?: string;
    tagline?: string;
    slug?: {
        current: string;
    };
    publishedAt: string;
};

export default async function Page() {
    // const posts = await client.fetch<Post[]>(`*[_type == "post"]`);
    const posts: Post[] = [];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="md:2/3 mt-8 flex w-full flex-col items-start justify-start gap-4 sm:mt-0 lg:w-1/2">
                <Title />
                <div className="mt-8 flex w-full flex-col items-start justify-start gap-1">
                    {posts.length > 0 ? (
                        <>
                            {posts.map((post) => (
                                <BlogPostPreview key={post._id} post={post} />
                            ))}
                        </>
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
