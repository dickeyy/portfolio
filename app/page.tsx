import AboutDescription from "@/components/about-description";
import Footer from "@/components/footer";
import JsonAbout from "@/components/json-about";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import Title from "@/components/title";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 sm:pb-4">
            <div className="flex flex-col items-start justify-start gap-4 lg:w-1/2 md:2/3 w-full">
                <Title />
                <JsonAbout className="mt-4" />
                <AboutDescription className="mt-8" />
                <SkillsSection className="mt-8" />
                <ProjectsSection className="mt-8" />
            </div>
            <div className="flex flex-col items-start justify-start gap-4 lg:w-1/2 md:2/3 w-full">
                <Footer className="mt-20" />
            </div>
        </main>
    );
}
