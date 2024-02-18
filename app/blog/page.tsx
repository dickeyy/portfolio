import Footer from "@/components/footer";
import Title from "@/components/title";

export const metadata = {
    title: "Kyle Dickey Blog"
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="flex flex-col items-start justify-start gap-4 lg:w-1/2 md:2/3 sm:w-full">
                <Title />
                <div className="flex flex-1 flex-col items-start justify-center gap-1 w-full mt-8">
                    <h1 className="text-2xl sm:text-2xl font-bold">No blog posts yet...</h1>
                    <p className="text-foreground/60">
                        I&apos;m working on creating some though, so check back soon!
                    </p>
                </div>
            </div>
            <div className="flex lg:w-1/2 md:2/3 sm:w-full">
                <Footer className="mt-20" />
            </div>
        </main>
    );
}
