import { cn } from "@/lib/utils";
import { SkillsType } from "@/types/skills-type";
import SkillBadge from "./skill-badge";

const skills: SkillsType = {
    frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "ChakraUI",
        "HTML",
        "CSS",
        "SVG",
        "Electron",
        "React Native",
        "SwiftUI",
        "Expo"
    ],
    backend: [
        "NodeJS",
        "Express",
        "MongoDB",
        "MySQL",
        "Python",
        "Supabase",
        "Go",
        "Redis",
        "GraphQL",
        "REST",
        "JWT",
        "HTTP",
        "DNS",
        "SMTP",
        "PostgreSQL",
        "S3",
        "R2",
        "Java",
        "Go"
    ],
    other: [
        "Google Cloud",
        "AWS",
        "Vercel",
        "Git",
        "Docker",
        "Linux",
        "Windows",
        "MacOS",
        "Nginx",
        "Jest",
        "CI/CD",
        "Figma",
        "Photoshop",
        "Illustrator"
    ]
};

export default function SkillsSection({ className }: { className?: string }) {
    return (
        <div className={cn(className, "flex flex-col items-start gap-2")}>
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">Frontend</h3>
                    <div className="flex flex-wrap gap-1">
                        {skills.frontend.map((skill) => (
                            <SkillBadge skill={skill} key={skill} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">Backend</h3>
                    <div className="flex flex-wrap gap-1">
                        {skills.backend.map((skill) => (
                            <SkillBadge skill={skill} key={skill} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">Other</h3>
                    <div className="flex flex-wrap gap-1">
                        {skills.other.map((skill) => (
                            <SkillBadge skill={skill} key={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
