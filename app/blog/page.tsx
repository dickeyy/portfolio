import Footer from "@/components/footer";
import Title from "@/components/title";
import { getAllPost } from "@/lib/blog-posts";
import BlogPostList from "@/components/blog-post-list";

export const metadata = {
    title: "Kyle Dickey Blog"
};

export default async function Page() {
    const posts = getAllPost();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="md:2/3 mt-8 flex w-full flex-col items-start justify-start gap-4 sm:mt-0 lg:w-1/2">
                <Title />
                <BlogPostList posts={posts} className="mt-4" />
            </div>
            <div className="md:2/3 flex w-full flex-col items-start justify-start gap-4 lg:w-1/2">
                <Footer className="mt-20" />
            </div>
        </main>
    );
}
