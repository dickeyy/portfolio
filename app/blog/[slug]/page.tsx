import Footer from "@/components/footer";
import SocialsIcons from "@/components/socials-icons";
import { Separator } from "@/components/ui/separator";
import { getPostData } from "@/lib/blog-posts";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPostData(params.slug);

    if (!post) {
        notFound();
    }

    console.log(post);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="md:2/3 mt-8 flex w-full flex-col items-start justify-start gap-4 sm:mt-0 lg:w-1/2">
                <div className="mb-8 flex w-full flex-row items-start justify-between">
                    <Link
                        href="/blog"
                        className="flex flex-row items-center gap-2 text-foreground/50 transition-all duration-200 ease-in-out hover:text-foreground"
                    >
                        <ArrowLeftIcon className="h-6 w-6" />
                    </Link>
                    <SocialsIcons size="w-6 h-6 fill-foreground/30" />
                </div>
                <article className="mb-8 w-full flex-1">
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                    <p className="mt-2 italic text-foreground/60">
                        <Link href="/" className="hover:underline">
                            Kyle Dickey
                        </Link>{" "}
                        · {new Date(post.date * 1000).toLocaleDateString()} · 1,340 views
                    </p>
                    <p className="italic text-foreground/60"></p>
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
