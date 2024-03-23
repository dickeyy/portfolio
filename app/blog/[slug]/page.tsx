import Footer from "@/components/footer";
import SocialsIcons from "@/components/socials-icons";
import { Separator } from "@/components/ui/separator";
import { getPostData } from "@/lib/blog-posts";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import BlogViewIncrement from "@/components/blog-view-increment";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = await getPostData(params.slug);
    return {
        title: post.title + " | Kyle Dickey",
        authors: [
            {
                name: "Kyle Dickey",
                url: "https://dickey.gg"
            }
        ],
        description: post.tagline,
        openGraph: {
            images: [post.ogImage],
            url: `https://dickey.gg/blog/${params.slug}`
        },
        twitter: {
            card: "summary_large_image",
            images: [post.ogImage],
            description: post.tagline,
            site: "https://dickey.gg"
        }
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPostData(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="md:2/3 mt-8 flex w-full flex-col items-start justify-start gap-4 sm:mt-0 lg:w-1/2">
                <div className="mb-8 flex w-full flex-row items-start justify-between">
                    <BlogViewIncrement id={params.slug} />
                    <Link
                        href="/blog"
                        className="text-foreground flex flex-row items-center gap-2 transition-all duration-200 ease-in-out"
                    >
                        <ArrowLeftIcon className="h-6 w-6" />
                    </Link>
                    <SocialsIcons size="w-6 h-6 fill-foreground/30" />
                </div>
                <article className="mb-8 w-full flex-1">
                    <h1 className="text-4xl font-extrabold">{post.title}</h1>
                    <p className="text-foreground/60 mt-2 italic">
                        <Link href="/" className="hover:underline">
                            Kyle Dickey
                        </Link>{" "}
                        · {new Date(post.date * 1000).toLocaleDateString()} · {post.views} view
                        {post.views > 1 && "s"}
                    </p>
                    <p className="text-foreground/60 italic"></p>
                    <Separator className="my-4" />
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                </article>
                <Footer />
            </div>
        </main>
    );
}
